import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            
            <div className="hero-illustration">
                <img src={process.env.PUBLIC_URL + '/images/Hero.svg'} alt="hero" className="hero-img"></img>
            </div>
            <div className="hero-description">
                <h1>Bienvenido de NOMBRALO UDEA</h1>
                <p className="text">Obten ideas de nombres creativos para el proyecto de PLANVIEW.</p>
                <ul className="features">
                    <li>
                        <p><b>🎴 Disponibilidad: </b> Compruebe si el nombre está disponible para registrarse en el nuevo dominio.</p>
                    </li>
                    <li>
                        <p><b>🌿 Unicidad: </b> Obtener lista de todos los nombres según su palabra clave.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;