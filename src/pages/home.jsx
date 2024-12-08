import React from 'react';
import backgroundHome from '../images/background_home.jpeg';


const Home = () => (
    <div>
        <div>
            <img className = "img__background--home" src={backgroundHome} alt="Arrière plan page d'accueil"/>
            <h2 className = "title__home">Chez vous, partout et ailleurs</h2>
        </div>
        <div className='cards'>
            <div className="card">
                <p className="title__card">Titre de la </p>
                <p className="title__card">location</p>
            </div>
            <div className="card">
                <p className="title__card">Titre de la </p>
                <p className="title__card">location</p>
            </div>
            <div className="card">
                <p className="title__card">Titre de la </p>
                <p className="title__card">location</p>
            </div>
            <div className="card">
                <p className="title__card">Titre de la </p>
                <p className="title__card">location</p>
            </div>
            <div className="card">
                <p className="title__card">Titre de la </p>
                <p className="title__card">location</p>
            </div>
            <div className="card">
                <p className="title__card">Titre de la </p>
                <p className="title__card">location</p>
            </div>
        </div>
       
    </div>
)
export default Home;