import React, {useContext} from 'react';
import Photo from '../../assets/photo.jpg'
import PhotoSmall from '../../assets/photosmall.jpg'
import Resume from '../../assets/resume.pdf'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck , faSearchDollar} from '@fortawesome/free-solid-svg-icons'
import {ThemeContext} from "../../providers/ThemeProvider";

const Home = () => {
    const {type} = useContext(ThemeContext);
    return (
        <section  className={`home ${type ? 'light' : ''}`}>
            <div className="container">
            <div className='home__row'>
                <div className='home__img-block'>
                    <picture>
                        <source srcSet={PhotoSmall} media="(max-width: 992px)"/>
                        <img className='home__img' src={Photo} alt="Maksat Birimkulov"/>
                    </picture>

                </div>

                <div className='home__info'>
                    <h2 className='home__title'>Максат Биримкулов</h2>
                    <p className='home__subtitle'>WEB - DEVELOPER</p>
                    <img className='home__image' src={Photo} alt="Maksat Birimkulov"/>
                    <p className='home__text'>
                        Привет, меня зовут Максат. Я веб-разработчик, по направлению Front-End, на языке JavaScript.
                        Специализируюсь на обучении студентов языку программирования с нуля, а так же созданием сайтов.
                        Помогу решить задачи связанные с созданием сайта , обучению языка или любой другой вопрос по веб-разработке. <br/>
                    </p>
                    <p className='home__text'>В поиске чего-то нового
                        <span className="home__text-icon">
                            <FontAwesomeIcon icon={faSearchDollar}/>
                        </span>
                    </p>
                    <p className='home__text'>
                        Готов рассмотреть варианты  сотрудничества
                        <span className='home__text-icon'>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                    </p>

                    <div className='home__resume'>
                        <a download href={Resume} className='home__resume-text'>Скачать резюме</a>
                    </div>

                </div>
            </div>
            </div>
        </section>
    );
};

export default Home;