import React from 'react';
import Photo from '../../assets/aboutme.jpg'
import PhotoSmall from '../../assets/aboutMesmall.jpg'
import './aboutMe.css'
import SkillsItem from "./SkillsItem";

const AboutMe = () => {
    return (
        <section className='aboutMe'>
            <div className="container">
                <h2 className='aboutMe__title title'>Обо мне</h2>
                <div className='aboutMe__content'>
                    <div className='aboutMe__info'>
                        <h3 className='aboutMe__info-title'>Максат Биримкулов</h3>
                        <p className='aboutMe__info-address'>Адрес : Кыргызстан , Бишкек</p>
                        <p className='aboutMe__info-language'> JavaScript :  Front-End and so so Back-End </p>
                        <p className='aboutMe__info-channel'>Уроки : <a target='_blank' href="https://www.youtube.com/channel/UCM37zEJM2_GMPXanZ1kozFA">YouTube</a></p>
                        <p className='aboutMe__info-text'>
                            Опыт работы
                        </p>
                        <p className='aboutMe__info-exp'>
                            Freelance - 2019 - 2020 : Front-End разработчик
                        </p>
                        <p  className='aboutMe__info-exp'>
                            IT-RUN  - 24.06.2020 - Текущая : Front-End разработчик && Ментор
                        </p>

                        <img className='aboutMe__image' src={Photo} alt="Max Birimkulov"/>

                        <div className='skills'>
                        <p className='skills__title'>
                            Мои навыки
                        </p>
                        <div className='skills__list'>
                            <SkillsItem title={'HTML/CSS'} text={'Создание сайта любой сложности. С использованием актуальных технологий и библиотек. Создание адаптивных и кросс браузерных сайтов. Резиновый сайт с помощью FLEX-BOX. Для читабельности кода и быстрого создания соблюдение методологии BEM. Так же препроцессоры CSS : SASS, SCSS, LESS, Stylus. Подключение сторонних библиотек : Bootstrap, Materialize CSS, Owl-Carousel, Swiper, Fancy-Box и т.д.'}/>
                            <SkillsItem title={'JavaScript'} text={'Обращаюсь к JavaScript на ты . Выполение сложных алгоритмов. Отправка запросов, работа с ассинхронностью. Понимание области видимости. Работа с DOM элементами. CRUD операции.'}/>
                            <SkillsItem title={'React Js'} text={'Выучил React JS один раз и запомнил навсегда. Создание SPA приложений. Полное понимание синтаксиса. Работа со всеми видами созданий компонент. Активное использование хуков. Работа со стейт менеджером Redux, Redux-Thunk, Redux-Toolkit. Работа с маршрутизацией React-Router-Dom v5/v6. Отправка запросов через axios и работа с api. Так же интеграция с другими библиотеками : React-Hook-Form, Material UI, Firebase, json-server т.д.'}/>
                            <SkillsItem title={'Node JS'} text={'Создание full-stack приложений. Работа с библиотекой express. Создание своего api. Написание своих моделей. Понятие методов HTTP. Работа с базой данных MongoDB. Авторизация c помощью JSON Web Token. Библиотеки: mongoose , express, cors, bcrypt и т.д.'}/>
                        </div>
                        </div>

                    </div>

                    <div className='aboutMe__img-block'>
                        <picture>
                            <source srcSet={PhotoSmall} media='(max-width:768px)'/>
                            <img className='aboutMe__img' src={Photo} alt="Max Birimkulov"/>
                        </picture>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutMe;