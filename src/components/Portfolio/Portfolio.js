import React,{useEffect, useState} from 'react';
import './Portfolio.css'

import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import SortItem from "./SortItem";


const Portfolio = () => {
    const [sort, setSort] = useState('По умолчанию');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios('https://maxbirimkulov-portfolio.herokuapp.com/portfolio/api/projects')
            .then(({data}) => setProjects(data))
    }, []);

    return (
        <section className='portfolio'>
            <div className="container">
                <div className="portfolio__header">
                    <h2 className='portfolio__title title'>Портфолио</h2>
                    <div className='content__header-sort'>
                        <p className='content__header-sort-title'>Сортировка</p>
                        <p className='content__header-sort-default'>{sort} <span>︾</span></p>
                        <div className='content__header-sort-line'>
                        </div>
                        <ul className='content__header-sort-list'>
                           <SortItem text='React JS' setSort={setSort}/>
                           <SortItem text='Верстка' setSort={setSort}/>
                        </ul>
                    </div>
                </div>

                <div className='portfolio__content'>
                    <div className='portfolio__content-row'>
                        {projects.filter((item) => {
                            switch (sort) {
                                case "React JS": {
                                    return item.category === 'React'
                                }
                                case "Верстка" : {
                                    return item.category === 'Верстка'
                                }
                                default :{
                                    return item
                                }
                            }
                        }).map((item) => (
                            <div key={item.id} className='portfolio__content-card'>
                                <div className='portfolio__content-card-image'>
                                    <a target='_blank' href={item.site}>
                                        <img className='portfolio__content-card-img' src={item.image} alt={item.title}/>
                                    </a>

                                </div>

                                <div className='portfolio__content-card-info'>
                                    <h4 className='portfolio__content-card-title'>{item.title}</h4>
                                    <p className='portfolio__content-card-descr'>Категория : {item.category}</p>
                                    <p className='portfolio__content-card-descr'>Библиотеки : <span>{item.library.join(', ')}</span></p>
                                    <p className='portfolio__content-card-less'>
                                        Ссылка на видео урок
                                        <FontAwesomeIcon icon={faHandPointRight}/>
                                        <a href={item.linkLesson}>Youtube</a> </p>
                                    <a className='portfolio__content-card-site' href={item.site} target='_blank'>Перейти на сайт</a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;