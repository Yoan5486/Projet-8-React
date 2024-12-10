import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundHome from '../images/background_home.jpeg'
import backgroundLogement from '../images/image_logement.png'


const Home = () => {
    const cards = Array(19).fill(null)
    const navigate = useNavigate()

    const handleCardClick = (path) => {
      navigate(path)
    }

return (

    <div>
        <div className="box__dimension">
            <div className="background__black"></div>
            <img className = "img__background--home" src={backgroundHome} alt="Arrière plan page d'accueil"/>
            <h2 className = "title__home">Chez vous, partout et ailleurs</h2>
        </div>
        <div className="cards">
        {cards.map((_, index) => (
          <div className="card" key={index} onClick={() => handleCardClick('/details')}>
            <img className="img__logement" src={backgroundLogement} alt = "Logement en arrière plan des cards"/>
            <p className="title__card">Titre de la<br />
            location
            </p>
          </div>
        ))}
        </div>
    </div>
)

}

export default Home