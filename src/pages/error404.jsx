// Importation des Composants Reacts

import React from "react";
import { Link } from "react-router-dom";

// Codage de la Page

const Error404 = () => {

    return (
        <div>
            <h1 className="error__title">404</h1>;
            <h2 className="title__notfound">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="link__home--error">Retourner sur la page d'accueil</Link>
        </div>
    )
}

// Exportation de la page Error404

export default Error404;