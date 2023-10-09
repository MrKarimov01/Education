import React from "react";
import "./Home__Hero-carousel.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Home__Hero_carousel = () => {
    return (
        <>
            <p className="carousel-main-p">Что говорят наши студенты?</p>
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                spaceBetween={50}
                slidesPerView={2.3}
                breakpoints={{
                    10: {
                        spaceBetween: 10,
                        slidesPerView: 1
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 2
                    },
                    1000: {
                        spaceBetween: 50,
                        slidesPerView: 2.3
                    },
                }}
                className="my__swiper"

            >

                <SwiperSlide>
                    <div className="image-content">
                        <div className="image-content-inner">
                            <div className="card-image">
                                <img src="https://s3-alpha-sig.figma.com/img/7df8/2a91/7153a4697b87756e22ad8e19b748d25c?Expires=1696204800&Signature=ZSGAhGODhqcLR5EyPkQ979cnSDpShm5lkcQWSYuT4z-kXe5iFe-eRiIggnd8~qKqo38AOYtGvWSvCxVGUMNsItWprtji4Gay7yZ-a6pYqkQukIgfYmTcVIZJE0tMP78cJyjMVE0b5K928i3qHnNOmGAv96jyMIZGfxNZtKDLkAlvzhYe3suaKRSYtFnyfMh7yErEHgl86Ra-55gGgeffE8oy~fMODb53QZrzKsU3GKlGmKByZbaSs~grIYsOmJcqRKNZZWLtfdR2~2EzCxv3u7L7qLs6lg-E25n933Tdgfas6GmdTEFrj~-EaIe1TLKQo~qmnYd-7QPDHc6Q0VVp4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <div className="image-content-p">
                                <p className="carousel-card-main-p">Nargiza Akhmedova</p>
                                <p className="carousel-card-then2-p">Бакалавр по IT</p>
                                <p className="carousel-card-then-p">Texas State University</p>
                            </div>
                        </div>

                        <div className="image-content-text">
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries.</p>
                        </div>           
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-content">
                        <div className="image-content-inner">
                            <div className="card-image">
                                <img src="https://s3-alpha-sig.figma.com/img/ff17/0720/7d9a88b27dab730190604c5b1e72e1ce?Expires=1696204800&Signature=R7wh3imyQgSYcz9kaERCuD-uDoIfbc6Nxr5xaq6wri5I5GFDW1Q-NZKsTPc3s1~JhgKAHoKtBJxczeAOuApEw1Pio3-G0bmaK9Dlbi2srEj3twkTqJxtqlnFmv6iu-d~JaOy5jHwl3lv~63tdmfBLt7CYoS9KCIzNjP07uvps2C1TQTo0h4GG0jebtLO9qeTYHXQWUvgdDtYfny-Wavuwtaj4iBkV8aNe-c-fqbCsA~OAii543h30Stna8L69fGTVPw4s1NXt-ok-DZDSzbCzgeVWXf60VwXtVhsx9OkypXZT7Q5LasOYSVmBFx1tG-~xPHoj9zdxAlWvtdA2QvxKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <div className="image-content-p">
                                <p className="carousel-card-main-p">Dilshod Nazarov</p>
                                <p className="carousel-card-then2-p">Бакалавр по IT</p>
                                <p className="carousel-card-then-p">Texas State University</p>
                            </div>
                        </div>

                        <div className="image-content-text">
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-content">
                        <div className="image-content-inner">
                            <div className="card-image">
                                <img src="https://s3-alpha-sig.figma.com/img/7665/64a2/ece116b6eaa88a1d826c01b3c0cdc5a3?Expires=1696204800&Signature=DQ3J8A-2l0CxtV6zxht9N1hCNFR6oEZ3Vs0tAI9f4Oc2650~DFx~uJaCymeXazRB4tPOJUNKNWdb-Y47P99FVWepwDRvFZos7dcAb7zPTPK6uPgdV44JQj0De6Zy5TXbsrRsd~TsvMJeXjKMnzf3r~32bBiA80wcsPhyRBRLrM6H7eEk~~gpLXdBBf9xVVprZ5LlY8yBQzKpTfRabaMBGKmisGNAGnIg2SYOfj~BGv0fmUfFoXHRAySl0lppCumDBgKYYdpZNjOE8SdmFUE4cueIJ1ygrTW9vmX3Ee3pNRgS8f3VJ0zNGkO-QIxhKNQw98t1w~vrnRxezUh~UwUDEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <div className="image-content-p">
                                <p className="carousel-card-main-p">Nargiza Akhmedova</p>
                                <p className="carousel-card-then2-p">Бакалавр по IT</p>
                                <p className="carousel-card-then-p">Texas State University</p>
                            </div>
                        </div>

                        <div className="image-content-text">
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-content">
                        <div className="image-content-inner">
                            <div className="card-image">
                                <img src="https://s3-alpha-sig.figma.com/img/7df8/2a91/7153a4697b87756e22ad8e19b748d25c?Expires=1696204800&Signature=ZSGAhGODhqcLR5EyPkQ979cnSDpShm5lkcQWSYuT4z-kXe5iFe-eRiIggnd8~qKqo38AOYtGvWSvCxVGUMNsItWprtji4Gay7yZ-a6pYqkQukIgfYmTcVIZJE0tMP78cJyjMVE0b5K928i3qHnNOmGAv96jyMIZGfxNZtKDLkAlvzhYe3suaKRSYtFnyfMh7yErEHgl86Ra-55gGgeffE8oy~fMODb53QZrzKsU3GKlGmKByZbaSs~grIYsOmJcqRKNZZWLtfdR2~2EzCxv3u7L7qLs6lg-E25n933Tdgfas6GmdTEFrj~-EaIe1TLKQo~qmnYd-7QPDHc6Q0VVp4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <div className="image-content-p">
                                <p className="carousel-card-main-p">Nargiza Akhmedova</p>
                                <p className="carousel-card-then2-p">Бакалавр по IT</p>
                                <p className="carousel-card-then-p">Texas State University</p>
                            </div>
                        </div>

                        <div className="image-content-text">
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image-content">
                        <div className="image-content-inner">
                            <div className="card-image">
                                <img src="https://s3-alpha-sig.figma.com/img/ff17/0720/7d9a88b27dab730190604c5b1e72e1ce?Expires=1696204800&Signature=R7wh3imyQgSYcz9kaERCuD-uDoIfbc6Nxr5xaq6wri5I5GFDW1Q-NZKsTPc3s1~JhgKAHoKtBJxczeAOuApEw1Pio3-G0bmaK9Dlbi2srEj3twkTqJxtqlnFmv6iu-d~JaOy5jHwl3lv~63tdmfBLt7CYoS9KCIzNjP07uvps2C1TQTo0h4GG0jebtLO9qeTYHXQWUvgdDtYfny-Wavuwtaj4iBkV8aNe-c-fqbCsA~OAii543h30Stna8L69fGTVPw4s1NXt-ok-DZDSzbCzgeVWXf60VwXtVhsx9OkypXZT7Q5LasOYSVmBFx1tG-~xPHoj9zdxAlWvtdA2QvxKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            </div>
                            <div className="image-content-p">
                                <p className="carousel-card-main-p">Dilshod Nazarov</p>
                                <p className="carousel-card-then2-p">Бакалавр по IT</p>
                                <p className="carousel-card-then-p">Texas State University</p>
                            </div>
                        </div>

                        <div className="image-content-text">
                            <p>Webster University is a private university with its main campus in Webster Groves, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries, Missouri. It has multiple branch locations across the United States and countries countries.</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>



        </>
    )
}
export default Home__Hero_carousel