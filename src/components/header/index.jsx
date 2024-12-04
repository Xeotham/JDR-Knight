import { Link } from "react-router-dom/"
import "./header.scss"
import React, { useState } from 'react'

import headerLogo from "../../assets/logo/headerRadreams.png"

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={headerLogo} alt="Logo RAdreams" />
                <p className="header__logo__text">Parce que tout commence par un Rêve</p>
            </div>
            <div className="structure">
                <div className='menu-icon' onClick={toggleNav}>
                    &#9776;
                </div>
                <div className="header__phone">
                    <p><a href="https://www.facebook.com/RomainAgnesDreams" target="_blank"><i className="fa-brands fa-facebook"></i></a> 06 34 10 83 49 - 06 72 89 61 65</p>
                </div>
                <nav className={`header__nav ${isNavOpen ? 'nav-open' : ''}`}>
                    <Link className="header__nav__link" to='/'>Accueil</Link>
                    <Link className="header__nav__link" to='/actualites'>Actualités</Link>
                    <Link className="header__nav__link" to='/portrait'>Portrait</Link>
                    <Link className="header__nav__link" to='/applications-et-outils'>Applications et Outils</Link>
                    <Link className="header__nav__link" to='/boutique'>Boutique</Link>
                    <Link className="header__nav__link" to='/contact'>Contact</Link>
                    <Link className="header__nav__link" to='/panier'><i className="fas fa-shopping-cart"></i></Link>
                    <Link className="header__nav__link" to='/panier'><i className="fa-solid fa-user"></i></Link>
                </nav>
            </div>
        </div>
    )
}