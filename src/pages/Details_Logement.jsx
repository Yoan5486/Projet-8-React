import React, { useEffect} from 'react';
import { useParams, useNavigate} from "react-router-dom";
import Slideshow from "../components/Slideshow";
import DataLogements from "../Logements.json";

const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const logement = DataLogements.find((logement) => logement.id === id)

  useEffect(() => {
    if (!logement) {
      navigate("/error", { replace: true })
    }
  }, [logement, navigate])

  return (
    logement && (
      <div className = "dimension__page">
        <Slideshow pictures={logement.pictures} />
        <h1 className = "title__logement">{logement.title}</h1>
        <p className = "logement__localisation">{logement.location}</p>
        <p>{logement.description}</p>
      </div>
    )
  );
};

export default Details