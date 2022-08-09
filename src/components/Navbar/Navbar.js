import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-brand">
               Nombralo UDEA
            </div>
            <ul className="nav-link">

                <li className="nav-item">
                    <a target="_blank" rel="noreferrer" href="https://github.com/johnfelipe">Desarrollador</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;