import React from 'react'
import "./Home__Search.css" 
import Home__Hero_data from '../../Components/Home__Hero-data/Home__Hero-data'
import Home__Hero_inner_footer from '../../Components/Home__Hero-inner-footer/Home__Hero-inner-footer'
import { BiSearch } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';
const Home__Search = () => {
  return (
    <>
      <div className="home__header">
                <img src="https://i.pinimg.com/564x/f0/00/f5/f000f561ba495eadbf9af952e170d755.jpg" alt="" />
                <nav className="home__nav">
                    <div className="edu">
                        <div className="home-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                <g clip-path="url(#clip0_101_2153)">
                                    <path d="M29.7503 14.1665C25.1454 14.4336 20.7167 16.0299 17.0003 18.7622C13.284 16.0299 8.85524 14.4336 4.25033 14.1665V18.3598C3.49762 18.3613 2.77632 18.6617 2.24501 19.1949C1.7137 19.728 1.41587 20.4504 1.417 21.2031V22.6254C1.417 24.1965 4.25033 25.7534 4.25033 25.7534V28.5967C8.013 28.8387 11.6417 30.0863 14.7577 32.2092C15.5445 32.7552 16.2938 33.3534 17.0003 33.9998C17.7069 33.3534 18.4561 32.7552 19.2429 32.2092C22.3589 30.0863 25.9877 28.8387 29.7503 28.5967V25.4687C30.503 25.4672 31.2243 25.1668 31.7556 24.6336C32.287 24.1005 32.5848 23.3781 32.5837 22.6254V21.2031C32.5848 20.4504 32.287 19.728 31.7556 19.1949C31.2243 18.6617 30.503 18.3613 29.7503 18.3598V14.1665ZM17.0003 30.3477C14.0621 28.1944 10.6699 26.7425 7.08366 26.1033V17.3908C9.83211 17.9445 12.4416 19.0438 14.7577 20.6237C15.5445 21.1697 16.2938 21.7679 17.0003 22.4143C17.7069 21.7679 18.4561 21.1697 19.2429 20.6237C21.559 19.0433 24.1684 17.9435 26.917 17.3894V26.1033C23.3308 26.7425 19.9385 28.1944 17.0003 30.3477ZM15.5837 11.3332H18.417V12.7498H15.5837V11.3332ZM15.5837 5.6665H18.417V7.08317H15.5837V5.6665Z" fill="white" />
                                    <path d="M15.5835 14.1662H18.4168V15.5829H15.5835V14.1662ZM12.7502 7.08287C13.1259 7.08287 13.4862 6.93362 13.7519 6.66794C14.0176 6.40227 14.1668 6.04193 14.1668 5.66621C14.1682 5.48166 14.1328 5.29869 14.0628 5.12794C13.9928 4.95718 13.8895 4.80205 13.759 4.67155C13.6285 4.54105 13.4734 4.4378 13.3026 4.36778C13.1319 4.29776 12.9489 4.26239 12.7643 4.26371C12.5792 4.26278 12.3958 4.29832 12.2244 4.3683C12.053 4.43827 11.8971 4.54132 11.7655 4.67156C11.4999 4.93458 11.3496 5.29236 11.3477 5.66621C11.3458 6.04005 11.4925 6.39933 11.7555 6.66501C12.0185 6.93068 12.3763 7.081 12.7502 7.08287Z" fill="white" />
                                    <path d="M21.2497 7.08333C22.0321 7.08333 22.6663 6.44907 22.6663 5.66667C22.6663 4.88426 22.0321 4.25 21.2497 4.25C20.4673 4.25 19.833 4.88426 19.833 5.66667C19.833 6.44907 20.4673 7.08333 21.2497 7.08333Z" fill="white" />
                                    <path d="M22.6663 11.3333H11.333C10.2062 11.3322 9.12583 10.8841 8.32905 10.0873C7.53226 9.29051 7.08413 8.21016 7.08301 7.08333V4.25C7.08413 3.12318 7.53226 2.04282 8.32905 1.24604C9.12583 0.449253 10.2062 0.00112514 11.333 0L22.6663 0C23.7932 0.00112514 24.8735 0.449253 25.6703 1.24604C26.4671 2.04282 26.9152 3.12318 26.9163 4.25V7.08333C26.9152 8.21016 26.4671 9.29051 25.6703 10.0873C24.8735 10.8841 23.7932 11.3322 22.6663 11.3333ZM11.333 2.83333C10.9574 2.83371 10.5973 2.98308 10.3317 3.24868C10.0661 3.51427 9.91672 3.87439 9.91634 4.25V7.08333C9.91672 7.45894 10.0661 7.81906 10.3317 8.08465C10.5973 8.35025 10.9574 8.49962 11.333 8.5H22.6663C23.042 8.49962 23.4021 8.35025 23.6677 8.08465C23.9333 7.81906 24.0826 7.45894 24.083 7.08333V4.25C24.0826 3.87439 23.9333 3.51427 23.6677 3.24868C23.4021 2.98308 23.042 2.83371 22.6663 2.83333H11.333Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_101_2153">
                                        <rect width="34" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3>Education</h3>
                    </div>
                    <div className="tag">
                        <a href="./login">Войти</a>
                        <a href="./registir">Регистратция</a>
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
            <div className="home__hero-inner-data">
                <p className="home__hero-p">Результаты поиска   6</p>
                <div className="home__hero-inner-data-in">

                    <div className="home__hero-inner-data-in-img">
                        <div className="data-icon">
                            <i><BsStar/></i>
                        </div>
                        <img src="https://s3-alpha-sig.figma.com/img/334a/fe8d/4e0149ff34b233d323822c4c71857b73?Expires=1695600000&Signature=qtowyGqvdxZlC-6gpifgZhElIovFyoHkc4PzumloXvhINr9HoDDm9V1VxdbjJUK2pAnOmqJzosobkXaQbkNi2-yQBP1kcVVYfiEcDToVWmlJnDHuYdYDuwUJyw3huc1A0VnLa0WaJoX6FWIUC5EwHFgaZf66e-H12iGELeQneZAn8kMbcr3VtT9uoPodRQaPtxV2w4mlru23vMKmn8cJEZY0HcUt97noWjwYKwmZpXta-qTCEoFqrEi4~li1pWtd8YjdqEENvExy6DbVFWzHM8MeaelAOOzldNcePw51H3szTMmNM409DvosIj77M1vLM0Kgdpzy4yEJaGjvHwrblw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="home__hero-inner-data-in-text">


                            <h5>Webster University</h5>
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries... </p><span className="link">Read more</span>
                        </div>
                        <div className="home__hero-inner-data-in-text-in">
                            <span >Рейтинг : 125 место (US Ratings)</span>
                            <span className="inner-span">Качество обучения :<svg xmlns="http://www.w3.org/2000/svg" width="130" height="28" viewBox="0 0 130 28" fill="none">
                                <path d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M115.049 2.92705C115.348 2.00574 116.652 2.00574 116.951 2.92705L118.919 8.98278C119.053 9.3948 119.437 9.67376 119.87 9.67376H126.237C127.206 9.67376 127.609 10.9134 126.825 11.4828L121.674 15.2254C121.323 15.4801 121.176 15.9314 121.31 16.3435L123.278 22.3992C123.577 23.3205 122.523 24.0866 121.739 23.5172L116.588 19.7746C116.237 19.5199 115.763 19.5199 115.412 19.7746L110.261 23.5172C109.477 24.0866 108.423 23.3205 108.722 22.3992L110.69 16.3435C110.824 15.9314 110.677 15.4801 110.326 15.2254L105.175 11.4828C104.391 10.9134 104.794 9.67376 105.763 9.67376H112.13C112.563 9.67376 112.947 9.3948 113.081 8.98278L115.049 2.92705Z" fill="#F2C94C" />
                                <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L50.9187 8.98278C51.0526 9.3948 51.4365 9.67376 51.8697 9.67376H58.2371C59.2058 9.67376 59.6086 10.9134 58.8249 11.4828L53.6736 15.2254C53.3231 15.4801 53.1764 15.9314 53.3103 16.3435L55.2779 22.3992C55.5773 23.3205 54.5228 24.0866 53.7391 23.5172L48.5878 19.7746C48.2373 19.5199 47.7627 19.5199 47.4122 19.7746L42.2609 23.5172C41.4772 24.0866 40.4227 23.3205 40.7221 22.3992L42.6897 16.3435C42.8236 15.9314 42.6769 15.4801 42.3264 15.2254L37.1751 11.4828C36.3914 10.9134 36.7942 9.67376 37.7629 9.67376H44.1303C44.5635 9.67376 44.9474 9.3948 45.0813 8.98278L47.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M81.0489 2.92705C81.3483 2.00574 82.6517 2.00574 82.9511 2.92705L84.9187 8.98278C85.0526 9.3948 85.4365 9.67376 85.8697 9.67376H92.2371C93.2058 9.67376 93.6086 10.9134 92.8249 11.4828L87.6736 15.2254C87.3231 15.4801 87.1764 15.9314 87.3103 16.3435L89.2779 22.3992C89.5773 23.3205 88.5228 24.0866 87.7391 23.5172L82.5878 19.7746C82.2373 19.5199 81.7627 19.5199 81.4122 19.7746L76.2609 23.5172C75.4772 24.0866 74.4227 23.3205 74.7221 22.3992L76.6897 16.3435C76.8236 15.9314 76.6769 15.4801 76.3264 15.2254L71.1751 11.4828C70.3914 10.9134 70.7942 9.67376 71.7629 9.67376H78.1303C78.5635 9.67376 78.9474 9.3948 79.0813 8.98278L81.0489 2.92705Z" fill="#F2C94C" />
                            </svg></span>
                            <span>Цена за один год : $24,000</span>
                        </div>


                    </div>
                    <div className="home__hero-inner-data-in-img">
                        <div className="data-icon">
                            <i><BsStar /></i>
                        </div>
                        <img src="https://s3-alpha-sig.figma.com/img/334a/fe8d/4e0149ff34b233d323822c4c71857b73?Expires=1695600000&Signature=qtowyGqvdxZlC-6gpifgZhElIovFyoHkc4PzumloXvhINr9HoDDm9V1VxdbjJUK2pAnOmqJzosobkXaQbkNi2-yQBP1kcVVYfiEcDToVWmlJnDHuYdYDuwUJyw3huc1A0VnLa0WaJoX6FWIUC5EwHFgaZf66e-H12iGELeQneZAn8kMbcr3VtT9uoPodRQaPtxV2w4mlru23vMKmn8cJEZY0HcUt97noWjwYKwmZpXta-qTCEoFqrEi4~li1pWtd8YjdqEENvExy6DbVFWzHM8MeaelAOOzldNcePw51H3szTMmNM409DvosIj77M1vLM0Kgdpzy4yEJaGjvHwrblw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="home__hero-inner-data-in-text">
                            <h5>Webster University</h5>
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries... </p><span className="link">Read more</span>
                        </div>
                        <div className="home__hero-inner-data-in-text-in">
                            <span>Рейтинг : 125 место (US Ratings)</span>
                            <span className="inner-span">Качество обучения :<svg xmlns="http://www.w3.org/2000/svg" width="130" height="28" viewBox="0 0 130 28" fill="none">
                                <path d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M115.049 2.92705C115.348 2.00574 116.652 2.00574 116.951 2.92705L118.919 8.98278C119.053 9.3948 119.437 9.67376 119.87 9.67376H126.237C127.206 9.67376 127.609 10.9134 126.825 11.4828L121.674 15.2254C121.323 15.4801 121.176 15.9314 121.31 16.3435L123.278 22.3992C123.577 23.3205 122.523 24.0866 121.739 23.5172L116.588 19.7746C116.237 19.5199 115.763 19.5199 115.412 19.7746L110.261 23.5172C109.477 24.0866 108.423 23.3205 108.722 22.3992L110.69 16.3435C110.824 15.9314 110.677 15.4801 110.326 15.2254L105.175 11.4828C104.391 10.9134 104.794 9.67376 105.763 9.67376H112.13C112.563 9.67376 112.947 9.3948 113.081 8.98278L115.049 2.92705Z" fill="#F2C94C" />
                                <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L50.9187 8.98278C51.0526 9.3948 51.4365 9.67376 51.8697 9.67376H58.2371C59.2058 9.67376 59.6086 10.9134 58.8249 11.4828L53.6736 15.2254C53.3231 15.4801 53.1764 15.9314 53.3103 16.3435L55.2779 22.3992C55.5773 23.3205 54.5228 24.0866 53.7391 23.5172L48.5878 19.7746C48.2373 19.5199 47.7627 19.5199 47.4122 19.7746L42.2609 23.5172C41.4772 24.0866 40.4227 23.3205 40.7221 22.3992L42.6897 16.3435C42.8236 15.9314 42.6769 15.4801 42.3264 15.2254L37.1751 11.4828C36.3914 10.9134 36.7942 9.67376 37.7629 9.67376H44.1303C44.5635 9.67376 44.9474 9.3948 45.0813 8.98278L47.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M81.0489 2.92705C81.3483 2.00574 82.6517 2.00574 82.9511 2.92705L84.9187 8.98278C85.0526 9.3948 85.4365 9.67376 85.8697 9.67376H92.2371C93.2058 9.67376 93.6086 10.9134 92.8249 11.4828L87.6736 15.2254C87.3231 15.4801 87.1764 15.9314 87.3103 16.3435L89.2779 22.3992C89.5773 23.3205 88.5228 24.0866 87.7391 23.5172L82.5878 19.7746C82.2373 19.5199 81.7627 19.5199 81.4122 19.7746L76.2609 23.5172C75.4772 24.0866 74.4227 23.3205 74.7221 22.3992L76.6897 16.3435C76.8236 15.9314 76.6769 15.4801 76.3264 15.2254L71.1751 11.4828C70.3914 10.9134 70.7942 9.67376 71.7629 9.67376H78.1303C78.5635 9.67376 78.9474 9.3948 79.0813 8.98278L81.0489 2.92705Z" fill="#F2C94C" />
                            </svg></span>
                            <span>Цена за один год : $24,000</span>
                        </div>
                    </div>
                    <div className="home__hero-inner-data-in-img">
                        <div className="data-icon">
                            <i><BsStar /></i>
                        </div>
                        <img src="https://s3-alpha-sig.figma.com/img/334a/fe8d/4e0149ff34b233d323822c4c71857b73?Expires=1695600000&Signature=qtowyGqvdxZlC-6gpifgZhElIovFyoHkc4PzumloXvhINr9HoDDm9V1VxdbjJUK2pAnOmqJzosobkXaQbkNi2-yQBP1kcVVYfiEcDToVWmlJnDHuYdYDuwUJyw3huc1A0VnLa0WaJoX6FWIUC5EwHFgaZf66e-H12iGELeQneZAn8kMbcr3VtT9uoPodRQaPtxV2w4mlru23vMKmn8cJEZY0HcUt97noWjwYKwmZpXta-qTCEoFqrEi4~li1pWtd8YjdqEENvExy6DbVFWzHM8MeaelAOOzldNcePw51H3szTMmNM409DvosIj77M1vLM0Kgdpzy4yEJaGjvHwrblw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="home__hero-inner-data-in-text">
                            <h5>Webster University</h5>
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries... </p><span className="link">Read more</span>
                        </div>
                        <div className="home__hero-inner-data-in-text-in">
                            <span>Рейтинг : 125 место (US Ratings)</span>
                            <span className="inner-span">Качество обучения :<svg xmlns="http://www.w3.org/2000/svg" width="130" height="28" viewBox="0 0 130 28" fill="none">
                                <path d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M115.049 2.92705C115.348 2.00574 116.652 2.00574 116.951 2.92705L118.919 8.98278C119.053 9.3948 119.437 9.67376 119.87 9.67376H126.237C127.206 9.67376 127.609 10.9134 126.825 11.4828L121.674 15.2254C121.323 15.4801 121.176 15.9314 121.31 16.3435L123.278 22.3992C123.577 23.3205 122.523 24.0866 121.739 23.5172L116.588 19.7746C116.237 19.5199 115.763 19.5199 115.412 19.7746L110.261 23.5172C109.477 24.0866 108.423 23.3205 108.722 22.3992L110.69 16.3435C110.824 15.9314 110.677 15.4801 110.326 15.2254L105.175 11.4828C104.391 10.9134 104.794 9.67376 105.763 9.67376H112.13C112.563 9.67376 112.947 9.3948 113.081 8.98278L115.049 2.92705Z" fill="#F2C94C" />
                                <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L50.9187 8.98278C51.0526 9.3948 51.4365 9.67376 51.8697 9.67376H58.2371C59.2058 9.67376 59.6086 10.9134 58.8249 11.4828L53.6736 15.2254C53.3231 15.4801 53.1764 15.9314 53.3103 16.3435L55.2779 22.3992C55.5773 23.3205 54.5228 24.0866 53.7391 23.5172L48.5878 19.7746C48.2373 19.5199 47.7627 19.5199 47.4122 19.7746L42.2609 23.5172C41.4772 24.0866 40.4227 23.3205 40.7221 22.3992L42.6897 16.3435C42.8236 15.9314 42.6769 15.4801 42.3264 15.2254L37.1751 11.4828C36.3914 10.9134 36.7942 9.67376 37.7629 9.67376H44.1303C44.5635 9.67376 44.9474 9.3948 45.0813 8.98278L47.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M81.0489 2.92705C81.3483 2.00574 82.6517 2.00574 82.9511 2.92705L84.9187 8.98278C85.0526 9.3948 85.4365 9.67376 85.8697 9.67376H92.2371C93.2058 9.67376 93.6086 10.9134 92.8249 11.4828L87.6736 15.2254C87.3231 15.4801 87.1764 15.9314 87.3103 16.3435L89.2779 22.3992C89.5773 23.3205 88.5228 24.0866 87.7391 23.5172L82.5878 19.7746C82.2373 19.5199 81.7627 19.5199 81.4122 19.7746L76.2609 23.5172C75.4772 24.0866 74.4227 23.3205 74.7221 22.3992L76.6897 16.3435C76.8236 15.9314 76.6769 15.4801 76.3264 15.2254L71.1751 11.4828C70.3914 10.9134 70.7942 9.67376 71.7629 9.67376H78.1303C78.5635 9.67376 78.9474 9.3948 79.0813 8.98278L81.0489 2.92705Z" fill="#F2C94C" />
                            </svg></span>
                            <span>Цена за один год : $24,000</span>
                        </div>
                    </div>
                    <div className="home__hero-inner-data-in-img">
                        <div className="data-icon">
                            <i><BsStar /></i>
                        </div>
                        <img src="https://s3-alpha-sig.figma.com/img/334a/fe8d/4e0149ff34b233d323822c4c71857b73?Expires=1695600000&Signature=qtowyGqvdxZlC-6gpifgZhElIovFyoHkc4PzumloXvhINr9HoDDm9V1VxdbjJUK2pAnOmqJzosobkXaQbkNi2-yQBP1kcVVYfiEcDToVWmlJnDHuYdYDuwUJyw3huc1A0VnLa0WaJoX6FWIUC5EwHFgaZf66e-H12iGELeQneZAn8kMbcr3VtT9uoPodRQaPtxV2w4mlru23vMKmn8cJEZY0HcUt97noWjwYKwmZpXta-qTCEoFqrEi4~li1pWtd8YjdqEENvExy6DbVFWzHM8MeaelAOOzldNcePw51H3szTMmNM409DvosIj77M1vLM0Kgdpzy4yEJaGjvHwrblw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="home__hero-inner-data-in-text">
                            <h5>Webster University</h5>
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries... </p><span className="link">Read more</span>
                        </div>
                        <div className="home__hero-inner-data-in-text-in">
                            <span>Рейтинг : 125 место (US Ratings)</span>
                            <span className="inner-span">Качество обучения :<svg xmlns="http://www.w3.org/2000/svg" width="130" height="28" viewBox="0 0 130 28" fill="none">
                                <path d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M115.049 2.92705C115.348 2.00574 116.652 2.00574 116.951 2.92705L118.919 8.98278C119.053 9.3948 119.437 9.67376 119.87 9.67376H126.237C127.206 9.67376 127.609 10.9134 126.825 11.4828L121.674 15.2254C121.323 15.4801 121.176 15.9314 121.31 16.3435L123.278 22.3992C123.577 23.3205 122.523 24.0866 121.739 23.5172L116.588 19.7746C116.237 19.5199 115.763 19.5199 115.412 19.7746L110.261 23.5172C109.477 24.0866 108.423 23.3205 108.722 22.3992L110.69 16.3435C110.824 15.9314 110.677 15.4801 110.326 15.2254L105.175 11.4828C104.391 10.9134 104.794 9.67376 105.763 9.67376H112.13C112.563 9.67376 112.947 9.3948 113.081 8.98278L115.049 2.92705Z" fill="#F2C94C" />
                                <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L50.9187 8.98278C51.0526 9.3948 51.4365 9.67376 51.8697 9.67376H58.2371C59.2058 9.67376 59.6086 10.9134 58.8249 11.4828L53.6736 15.2254C53.3231 15.4801 53.1764 15.9314 53.3103 16.3435L55.2779 22.3992C55.5773 23.3205 54.5228 24.0866 53.7391 23.5172L48.5878 19.7746C48.2373 19.5199 47.7627 19.5199 47.4122 19.7746L42.2609 23.5172C41.4772 24.0866 40.4227 23.3205 40.7221 22.3992L42.6897 16.3435C42.8236 15.9314 42.6769 15.4801 42.3264 15.2254L37.1751 11.4828C36.3914 10.9134 36.7942 9.67376 37.7629 9.67376H44.1303C44.5635 9.67376 44.9474 9.3948 45.0813 8.98278L47.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M81.0489 2.92705C81.3483 2.00574 82.6517 2.00574 82.9511 2.92705L84.9187 8.98278C85.0526 9.3948 85.4365 9.67376 85.8697 9.67376H92.2371C93.2058 9.67376 93.6086 10.9134 92.8249 11.4828L87.6736 15.2254C87.3231 15.4801 87.1764 15.9314 87.3103 16.3435L89.2779 22.3992C89.5773 23.3205 88.5228 24.0866 87.7391 23.5172L82.5878 19.7746C82.2373 19.5199 81.7627 19.5199 81.4122 19.7746L76.2609 23.5172C75.4772 24.0866 74.4227 23.3205 74.7221 22.3992L76.6897 16.3435C76.8236 15.9314 76.6769 15.4801 76.3264 15.2254L71.1751 11.4828C70.3914 10.9134 70.7942 9.67376 71.7629 9.67376H78.1303C78.5635 9.67376 78.9474 9.3948 79.0813 8.98278L81.0489 2.92705Z" fill="#F2C94C" />
                            </svg></span>
                            <span>Цена за один год : $24,000</span>
                        </div>
                    </div>
                    <div className="home__hero-inner-data-in-img">
                        <div className="data-icon">
                            <i><BsStar /></i>
                        </div>
                        <img src="https://s3-alpha-sig.figma.com/img/334a/fe8d/4e0149ff34b233d323822c4c71857b73?Expires=1695600000&Signature=qtowyGqvdxZlC-6gpifgZhElIovFyoHkc4PzumloXvhINr9HoDDm9V1VxdbjJUK2pAnOmqJzosobkXaQbkNi2-yQBP1kcVVYfiEcDToVWmlJnDHuYdYDuwUJyw3huc1A0VnLa0WaJoX6FWIUC5EwHFgaZf66e-H12iGELeQneZAn8kMbcr3VtT9uoPodRQaPtxV2w4mlru23vMKmn8cJEZY0HcUt97noWjwYKwmZpXta-qTCEoFqrEi4~li1pWtd8YjdqEENvExy6DbVFWzHM8MeaelAOOzldNcePw51H3szTMmNM409DvosIj77M1vLM0Kgdpzy4yEJaGjvHwrblw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="home__hero-inner-data-in-text">
                            <h5>Webster University</h5>
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries... </p><span className="link">Read more</span>
                        </div>
                        <div className="home__hero-inner-data-in-text-in">
                            <span>Рейтинг : 125 место (US Ratings)</span>
                            <span className="inner-span">Качество обучения :<svg xmlns="http://www.w3.org/2000/svg" width="130" height="28" viewBox="0 0 130 28" fill="none">
                                <path d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M115.049 2.92705C115.348 2.00574 116.652 2.00574 116.951 2.92705L118.919 8.98278C119.053 9.3948 119.437 9.67376 119.87 9.67376H126.237C127.206 9.67376 127.609 10.9134 126.825 11.4828L121.674 15.2254C121.323 15.4801 121.176 15.9314 121.31 16.3435L123.278 22.3992C123.577 23.3205 122.523 24.0866 121.739 23.5172L116.588 19.7746C116.237 19.5199 115.763 19.5199 115.412 19.7746L110.261 23.5172C109.477 24.0866 108.423 23.3205 108.722 22.3992L110.69 16.3435C110.824 15.9314 110.677 15.4801 110.326 15.2254L105.175 11.4828C104.391 10.9134 104.794 9.67376 105.763 9.67376H112.13C112.563 9.67376 112.947 9.3948 113.081 8.98278L115.049 2.92705Z" fill="#F2C94C" />
                                <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L50.9187 8.98278C51.0526 9.3948 51.4365 9.67376 51.8697 9.67376H58.2371C59.2058 9.67376 59.6086 10.9134 58.8249 11.4828L53.6736 15.2254C53.3231 15.4801 53.1764 15.9314 53.3103 16.3435L55.2779 22.3992C55.5773 23.3205 54.5228 24.0866 53.7391 23.5172L48.5878 19.7746C48.2373 19.5199 47.7627 19.5199 47.4122 19.7746L42.2609 23.5172C41.4772 24.0866 40.4227 23.3205 40.7221 22.3992L42.6897 16.3435C42.8236 15.9314 42.6769 15.4801 42.3264 15.2254L37.1751 11.4828C36.3914 10.9134 36.7942 9.67376 37.7629 9.67376H44.1303C44.5635 9.67376 44.9474 9.3948 45.0813 8.98278L47.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M81.0489 2.92705C81.3483 2.00574 82.6517 2.00574 82.9511 2.92705L84.9187 8.98278C85.0526 9.3948 85.4365 9.67376 85.8697 9.67376H92.2371C93.2058 9.67376 93.6086 10.9134 92.8249 11.4828L87.6736 15.2254C87.3231 15.4801 87.1764 15.9314 87.3103 16.3435L89.2779 22.3992C89.5773 23.3205 88.5228 24.0866 87.7391 23.5172L82.5878 19.7746C82.2373 19.5199 81.7627 19.5199 81.4122 19.7746L76.2609 23.5172C75.4772 24.0866 74.4227 23.3205 74.7221 22.3992L76.6897 16.3435C76.8236 15.9314 76.6769 15.4801 76.3264 15.2254L71.1751 11.4828C70.3914 10.9134 70.7942 9.67376 71.7629 9.67376H78.1303C78.5635 9.67376 78.9474 9.3948 79.0813 8.98278L81.0489 2.92705Z" fill="#F2C94C" />
                            </svg></span>
                            <span>Цена за один год : $24,000</span>
                        </div>
                    </div>
                    <div className="home__hero-inner-data-in-img">
                        <div className="data-icon">
                            <i><BsStar /></i>
                        </div>
                        <img src="https://s3-alpha-sig.figma.com/img/334a/fe8d/4e0149ff34b233d323822c4c71857b73?Expires=1695600000&Signature=qtowyGqvdxZlC-6gpifgZhElIovFyoHkc4PzumloXvhINr9HoDDm9V1VxdbjJUK2pAnOmqJzosobkXaQbkNi2-yQBP1kcVVYfiEcDToVWmlJnDHuYdYDuwUJyw3huc1A0VnLa0WaJoX6FWIUC5EwHFgaZf66e-H12iGELeQneZAn8kMbcr3VtT9uoPodRQaPtxV2w4mlru23vMKmn8cJEZY0HcUt97noWjwYKwmZpXta-qTCEoFqrEi4~li1pWtd8YjdqEENvExy6DbVFWzHM8MeaelAOOzldNcePw51H3szTMmNM409DvosIj77M1vLM0Kgdpzy4yEJaGjvHwrblw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="home__hero-inner-data-in-text">
                            <h5>Webster University</h5>
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries... </p><span className="link">Read more</span>
                        </div>
                        <div className="home__hero-inner-data-in-text-in">
                            <span>Рейтинг : 125 место (US Ratings)</span>
                            <span className="inner-span">Качество обучения :<svg xmlns="http://www.w3.org/2000/svg" width="130" height="28" viewBox="0 0 130 28" fill="none">
                                <path d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M115.049 2.92705C115.348 2.00574 116.652 2.00574 116.951 2.92705L118.919 8.98278C119.053 9.3948 119.437 9.67376 119.87 9.67376H126.237C127.206 9.67376 127.609 10.9134 126.825 11.4828L121.674 15.2254C121.323 15.4801 121.176 15.9314 121.31 16.3435L123.278 22.3992C123.577 23.3205 122.523 24.0866 121.739 23.5172L116.588 19.7746C116.237 19.5199 115.763 19.5199 115.412 19.7746L110.261 23.5172C109.477 24.0866 108.423 23.3205 108.722 22.3992L110.69 16.3435C110.824 15.9314 110.677 15.4801 110.326 15.2254L105.175 11.4828C104.391 10.9134 104.794 9.67376 105.763 9.67376H112.13C112.563 9.67376 112.947 9.3948 113.081 8.98278L115.049 2.92705Z" fill="#F2C94C" />
                                <path d="M47.0489 2.92705C47.3483 2.00574 48.6517 2.00574 48.9511 2.92705L50.9187 8.98278C51.0526 9.3948 51.4365 9.67376 51.8697 9.67376H58.2371C59.2058 9.67376 59.6086 10.9134 58.8249 11.4828L53.6736 15.2254C53.3231 15.4801 53.1764 15.9314 53.3103 16.3435L55.2779 22.3992C55.5773 23.3205 54.5228 24.0866 53.7391 23.5172L48.5878 19.7746C48.2373 19.5199 47.7627 19.5199 47.4122 19.7746L42.2609 23.5172C41.4772 24.0866 40.4227 23.3205 40.7221 22.3992L42.6897 16.3435C42.8236 15.9314 42.6769 15.4801 42.3264 15.2254L37.1751 11.4828C36.3914 10.9134 36.7942 9.67376 37.7629 9.67376H44.1303C44.5635 9.67376 44.9474 9.3948 45.0813 8.98278L47.0489 2.92705Z" fill="#F2C94C" />
                                <path d="M81.0489 2.92705C81.3483 2.00574 82.6517 2.00574 82.9511 2.92705L84.9187 8.98278C85.0526 9.3948 85.4365 9.67376 85.8697 9.67376H92.2371C93.2058 9.67376 93.6086 10.9134 92.8249 11.4828L87.6736 15.2254C87.3231 15.4801 87.1764 15.9314 87.3103 16.3435L89.2779 22.3992C89.5773 23.3205 88.5228 24.0866 87.7391 23.5172L82.5878 19.7746C82.2373 19.5199 81.7627 19.5199 81.4122 19.7746L76.2609 23.5172C75.4772 24.0866 74.4227 23.3205 74.7221 22.3992L76.6897 16.3435C76.8236 15.9314 76.6769 15.4801 76.3264 15.2254L71.1751 11.4828C70.3914 10.9134 70.7942 9.67376 71.7629 9.67376H78.1303C78.5635 9.67376 78.9474 9.3948 79.0813 8.98278L81.0489 2.92705Z" fill="#F2C94C" />
                            </svg></span>
                            <span>Цена за один год : $24,000</span>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <Home__Hero_inner_footer />
    </>
    
  )
}

export default Home__Search