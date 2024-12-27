// Importation des Composants Reacts

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import DataLogements from "../Logements.json"

// Code pour naviguer entre les logement 

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const logement = DataLogements.find((logement) => logement.id === id)
    const [openIndexes, setOpenIndexes] = useState([]);

    // Redirection à la page erreur si ID incorrect

    useEffect(() => {
        if (!logement) {
            navigate("/error", { replace: true })
        }
    }, [logement, navigate])

    // Ouverture et Fermeture du Collapse 

    const toggleCollapse = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index))
        } else {
            setOpenIndexes([...openIndexes, index])
        }
    }

    // Variable  pour indiquer le nombres d'étoiles 

    const totalStars = 5;

    // Intégration de la page
    return (
        // Carrousel
        logement && (
            <div className="dimension__page">
                <Slideshow pictures={logement.pictures} />
                <div className="container__log">
                    <div>
                        <h1 className="title__logement">{logement.title}</h1>
                        <p className="logement__localisation">{logement.location}</p>
                        {/*Tags*/}
                        <div className="tag__flex">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    {/*Affichage Infos Vendeur*/}
                    <div className="rating__container">
                        <div className="host__container">
                            <p className="host__name">{logement.host.name}</p>
                            <img src={logement.host.picture} alt={`Hôte : ${logement.host.name}`} className="host__img" />
                        </div>
                        <div>
                            {/*Notation du Vendeur*/}
                            {Array.from({ length: totalStars }, (_, index) => (
                                <span key={index} className={`star ${index < parseInt(logement.rating) ? "star__filled" : "star__empty"}`}>★</span>
                            ))}
                        </div>
                    </div>
                </div>
                {/*Collapses Description & Équipements */}
                <div className="flex__redbox--log">
                    <Collapse
                        title="Description"
                        content={logement.description}
                        isOpen={openIndexes.includes(0)}
                        toggleCollapse={() => toggleCollapse(0)}
                        className="redbox__design--log"
                    />
                    <Collapse
                        title="Équipements"
                        content={
                            <ul className="list__style--none">
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>}
                        isOpen={openIndexes.includes(1)}
                        toggleCollapse={() => toggleCollapse(1)}
                        className="redbox__design--log" />
                </div>
            </div>
        )
    )
}

// Exportation de la page Détails 

export default Details