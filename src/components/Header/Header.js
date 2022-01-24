import React,{useState} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'

const Header = () => {

    const [burger, setBurger] = useState(false)

    return (
        <header className='header'>
            <div className="container">
                <nav className='header__navbar'>
                    <h1 className='header__title'>Max Birimkulov</h1>
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
                </nav>
                <div className={`burger ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}>
                    <span className="burger__line"></span>
                </div>
            </div>
        </header>
    );
};

export default Header;