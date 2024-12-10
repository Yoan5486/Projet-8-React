import React from 'react';
import backgroundAbout from '../images/background_about.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


const About = () => {

    const collapseTexts = ["Fiabilité", "Respect", "Service", "Sécurité"];

return (
        <div>
            <div className="box__dimension--about">
                <div className = "background__black--about"></div>
                <img className = "img__background--about" src={backgroundAbout} alt="Arrière plan page à propos"/>
            </div>
            <div className = "flex__collapse">
           {collapseTexts.map((text, index) => (
          <div className="collapse__design" key={index}>
            <h3 className="txt__collapse">{text}</h3>
                <FontAwesomeIcon icon={faChevronUp} size="lg" className="icon__chevron"/>
            </div>
           ))}
            </div>
        </div>
)

}

export default About;