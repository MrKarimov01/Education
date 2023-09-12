import React from "react";
import "./Home__Header.css"
import { BiSearch } from 'react-icons/bi';
import { LuSchool2 } from 'react-icons/lu';

const Home__Header = ()=>{

    return(
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

                     <button className="home__search-button"><BiSearch/></button>
                     </div>

                </div>
        </div>
        </div>

        <section className="home__hero">
        
            <div className="home__hero-inner-in">
        <p>О нас</p>
                    <div className="inner">
                    
                <span ><LuSchool2/></span>
                <div className="inner-text">
                <h6>250+</h6>
                <p>Университеты партнеры</p>
                </div>
                
                </div>
                <div className="inner2">
                <span ><LuSchool2/></span>
                <h6>250+</h6>

                </div>
                <div className="inner3">
                <span ><LuSchool2/></span>
                <h6>250+</h6>

                </div>
                    <div className="inner4">
                <span ><LuSchool2/></span>
                <div className="inner-text">
                <h6>250+</h6>
                <p>Университеты партнеры</p>
                </div>

                    </div>
                </div>
                


                
        </section>
        </>

    )
}
export default Home__Header