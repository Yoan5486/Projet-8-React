// Importation des Composants Reacts

import React, { useState } from "react";
import backgroundAbout from "../images/background_about.png"
import Collapse from "../components/Collapse"


const About = () => {

  // Tableau du Contenu du Collapse

  const collapseTexts = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
  ]

  // Ouverture et Fermeture du Collapse
  const [openIndexes, setOpenIndexes] = useState([]);


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
      {/*Collapse*/}
      <div className="flex__redbox">
        {collapseTexts.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} isOpen={openIndexes.includes(index)} toggleCollapse={() => toggleCollapse(index)} />
        ))}
      </div>
    </div>
  )
}
// Exportation de la page A Propos

export default About;