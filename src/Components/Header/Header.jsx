import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import headerCss from './Header.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Parallax } from 'swiper/modules';
import 'swiper/css/parallax';

function Header() {
    return (
        <div id="home" className={headerCss.header_wrapper}>
            <Swiper
                className={headerCss.swiper}
                modules={[ Autoplay, Parallax]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                parallax={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                grabCursor={true}
            >
                <SwiperSlide>
                    <div className={`${headerCss.header_wrapper__slide} ${headerCss.slide1}`}>
                        <div className={headerCss.content}>
                            <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small> 
                            <h2 data-swiper-parallax="-400">Enjoy Your <span>Luxury</span> Time with <br /> 
                            <span data-swiper-parallax="-600">Dream</span> Experience
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCss.header_wrapper__slide} ${headerCss.slide2}`}>
                        <div className={headerCss.content}>
                            <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small> 
                            <h2 data-swiper-parallax="-400">Enjoy Your <span>Luxury</span> Time with <br /> 
                            <span data-swiper-parallax="-600">Dream</span> Experience
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCss.header_wrapper__slide} ${headerCss.slide3}`}>
                        <div className={headerCss.content}>
                            <small data-swiper-parallax="-200">Luxury Hotel & Restaurant</small> 
                            <h2 data-swiper-parallax="-400">Enjoy Your <span>Luxury</span> Time with <br /> 
                            <span data-swiper-parallax="-600">Dream</span> Experience
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Header;