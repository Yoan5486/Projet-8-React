// Importation des Composants Reacts


import React, { useState } from 'react';
import backgroundAbout from '../images/background_about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  // Tableau du Contenu du Collapse

  const collapseTexts = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
  ]
  // Variables pour ouvrir le Collapse

  const [openIndexes, setOpenIndexes] = useState([])
  const toggleCollapse = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index))
    } else {
      setOpenIndexes([...openIndexes, index])
    }
  }

// Intégration de la page

  return (
    // Arrière plan image

    <div className="dimension__page">
      <div className="box__dimension--about">
        <div className="background__black--about"></div>
        <img className="img__background--about" src={backgroundAbout} alt="Arrière plan page à propos" />
      </div>
    {/*Design du Collapse*/}
      <div className="flex__redbox">
        {collapseTexts.map((item, index) => (
          <React.Fragment key={index}>
            <div className="redbox__design" onClick={() => toggleCollapse(index)}>
              <h3 className="txt__redbox">{item.title}</h3>
              {/*Îcone du Chevron*/}
              <FontAwesomeIcon icon={openIndexes.includes(index) ? faChevronDown : faChevronUp} size="lg" className="icon__chevron" />
            </div>
            {/*Contenu du Collapse*/}
            {openIndexes.includes(index) && (
              <div className="collapse__content">
                <p>{item.content}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )

}
// Exportation de la page A Propos

export default About;