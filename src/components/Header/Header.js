import React, {useContext, useState} from 'react';
import './Header.css';
import {NavLink, Link} from 'react-router-dom'

import {ThemeContext} from "../../providers/ThemeProvider";
import Switcher from "./Switcher";

const Header = () => {
    const {type} = useContext(ThemeContext);
    const [burger, setBurger] = useState(false);

    return (
        <header className={`header ${type ? 'light' : ''}`} >
            <div className="container">
                <nav className='header__navbar'>
                    <h1 className='header__title'>
                        <Link to="/">
                            Max Birimkulov
                        </Link>
                       </h1>
                    <ul className={`header__list ${burger ? 'active' : ''}`}>
                        <li className='header__list-item'>
                            <NavLink onClick={() => setBurger(false)} className='header__link' to='/'>Главная</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink onClick={() => setBurger(false)} className='header__link' to='/aboutme'>Обо мне</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink onClick={() => setBurger(false)} className='header__link' to='/portfolio'>Портфолио</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink onClick={() => setBurger(false)} className='header__link' to='/courses'>Курсы</NavLink>
                        </li>
                        <li className='header__list-item'>
                            <NavLink onClick={() => setBurger(false)} className='header__link' to='/contact'>Контакты</NavLink>
                        </li>
                    </ul>
                    <Switcher/>
                </nav>
                <div className={`burger ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}>
                    <span className="burger__line"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;