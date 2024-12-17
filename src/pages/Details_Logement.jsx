import React, { useEffect, useState} from 'react';
import { useParams, useNavigate} from "react-router-dom";
import Slideshow from "../components/Slideshow";
import DataLogements from "../Logements.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const logement = DataLogements.find((logement) => logement.id === id)
  const [openIndexes, setOpenIndexes] = useState([])

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true })
    }
  }, [logement, navigate])

  const totalStars = 5;

  const toggleCollapse = (index) => {
    if (openIndexes?.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }
  return (
    logement && (
        <div className = "dimension__page">
          <Slideshow pictures={logement.pictures} />
            <div>
              <h1 className = "title__logement">{logement.title}</h1>
              <p className = "logement__localisation">{logement.location}</p>
            </div>
            <div className="tag__flex">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        <div className = "rating__container">
          <div className = "host__container">
            <p className = "host__name">{logement.host.name}</p>
            <img src={logement.host.picture} alt={`Hôte : ${logement.host.name}`} className = "host__img"/>
          </div>
          <div>
          {Array.from({ length: totalStars }, (_, index) => (
            <span  key={index} className = {`star ${index < parseInt(logement.rating) ? "star__filled" : "star__empty"}`}>★</span>
          ))}
          </div>
        </div>
          <div className = "flex__redbox--log">
            <div className = "redbox__design--log" onClick={() => toggleCollapse(0)}>
              <h3 className = "txt__redbox--log">Description</h3>
              <FontAwesomeIcon icon={openIndexes.includes(0) ? faChevronDown : faChevronUp}size = "lg" className = "icon__chevron"/>
            </div>
            {openIndexes.includes(0) && (
              <div className = "collapse__content">
                <p>{logement.description}</p>
              </div>
            )}
            <div className = "redbox__design--log" onClick={() => toggleCollapse(1)}>
              <h3 className = "txt__redbox--log">Équipements</h3>
              <FontAwesomeIcon icon={openIndexes.includes(1) ? faChevronDown : faChevronUp} size = "lg"className = "icon__chevron"/>
            </div>
            {openIndexes.includes(1) && (
              <div className = "collapse__content">
                <ul className = "list__style--none">
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )
    )
  }

export default Details