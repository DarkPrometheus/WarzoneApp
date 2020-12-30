import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className="Home">
            <Link to="/imagenes">Iniciar</Link>
        </div>
    )
}
