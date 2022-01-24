import React from 'react';
import Social from "./Social";
import {faGithub, faInstagram, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
            <h3 className='footer__title'>Социальные сети</h3>
                <div className='footer__content'>
                    <ul className='footer__list'>
                        <Social path='https://www.linkedin.com/in/maksat-birimkulov-a20a251b1/' icon={faLinkedin}/>
                        <Social path='https://www.instagram.com/max.birimkulov' icon={faInstagram}/>
                        <Social path='https://github.com/maxbirimkulov' icon={faGithub}/>
                        <Social path='https://t.me/Max_Birimkulov/' icon={faTelegram}/>
                    </ul>
                    <a className='footer__phone' href="tel:+ 996 505 02 05 99">+996 505 02 05 99</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;