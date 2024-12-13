import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundHome from '../images/background_home.jpeg'
import DataLogements from '../Logements.json'


const Home = () => {
    const navigate = useNavigate()
    const handleCardClick = (id) => {
      navigate(`/details/${id}`)
    }

return (

    <div>
        <div className = "box__dimension">
            <div className = "background__black"></div>
            <img className = "img__background--home" src={backgroundHome} alt= "Arrière plan page d'accueil"/>
            <h2 className = "title__home">Chez vous, partout et ailleurs</h2>
        </div>
        <div className = "cards">
        {DataLogements.map((logement) => (
          <div className = "card" key={logement.id} onClick={() => handleCardClick(logement.id)}>
            <img className = "img__logement" src={logement.cover} alt = "Logement en arrière plan des cards"/>
            <p className = "title__card">{logement.title}</p>
          </div>
        ))}
        </div>
    </div>
)

}

export default Home