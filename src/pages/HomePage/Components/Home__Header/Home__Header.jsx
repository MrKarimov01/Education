import React from "react";
import "./Home__Header.css"
import { BiSearch } from 'react-icons/bi';
import { LuSchool2 } from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import Home__Hero from "../Home__Hero/Home__Hero";
import Home__Hero_data from "../Home__Hero-data/Home__Hero-data";
import Home__Hero_inner_subjects from "../Home__Hero-inner-subjects/Home__Hero-inner-subjects";
import Home__Hero_inner_comments from "../Home__Hero-inner-comments/Home__Hero-inner-comments";
import Home__Hero_inner_footer from "../Home__Hero-inner-footer/Home__Hero-inner-footer";
import Home__Hero_carousel from "../Home__Hero-carousel/Home__Hero-carousel";
const Home__Header = () => {

    return (
        <>
            <div className="home__header">
                <img src="https://i.pinimg.com/564x/f0/00/f5/f000f561ba495eadbf9af952e170d755.jpg" alt="" />
                <nav className="home__nav">
                    <div className="edu">
                        <h3>Education</h3>
                    </div>
                    <div className="tag">
                        <a href="#">Войти</a>
                        <a href="#">Регистратция</a>
                    </div>
                </nav>
                <div className="home__header-hero">

                    <h2 className="home__h2">Выберите свой университет вместе с Education</h2>
                    <h4>Education помогает абитуриентам найти свое направление в выборе професси и поступить в престижные ВУЗы на территории СНГ</h4>
                    <div className="home__ul-inner">
                        <ul>
                            <li>Бакалаврият</li>
                            <li>Магистратура</li>
                        </ul>
                        <ul>
                            <li>Аспирантура</li>
                            <li>Докторантура</li>
                        </ul>
                        <button>Бесплатная косультатция</button>

                    </div>
                    <div className="home__header-search">

                        <p>Найти Университет</p>

                        <div className="home-search">
                            <select name="city" id="city">
                                <option value="city">Страна</option>
                                <option value="city">Andijan</option>
                                <option value="city">Tashkent</option>
                                <option value="city">Voha</option>
                            </select>
                            <select name="city" id="city">
                                <option value="city">Степень</option>
                                <option value="city">Andijan</option>
                                <option value="city">Tashkent</option>
                                <option value="city">Voha</option>
                            </select>
                            <select name="city" id="city">
                                <option value="city">Направления</option>
                                <option value="city">Andijan</option>
                                <option value="city">Tashkent</option>
                                <option value="city">Voha</option>
                            </select>

                            <a href="./search" className="home__search-button"><BiSearch /></a>
                        </div>

                    </div>
                </div>
            </div>
            <section className="home__hero">
                <Home__Hero/>
                <Home__Hero_data/>
                <Home__Hero_inner_subjects/>
                <Home__Hero_inner_comments/>
                <Home__Hero_carousel/>

            </section>
            <Home__Hero_inner_footer/>
        </>

    )
}
export default Home__Header