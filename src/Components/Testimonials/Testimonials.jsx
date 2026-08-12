import React from 'react'
import styles from "./../Testimonials/Testimonials.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import img1 from "../../assets/testi-03.jpg";
import img2 from "../../assets/testi-04.jpg";
import img3 from "../../assets/testi-02.jpg";

const Testimonials = () => {
  return (
    <div id="testimonials" className={`${styles.testimonials_wrapper} section`}>
            <small className="section_Heading">Testimonials</small>
            <h2 className="section_Title">What Our Clients <span>Says</span></h2>

            <Swiper
                className={styles.swiper}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                breakpoints={{
                    0: {
                        slidesPerView:1
                    },
                    768: {
                        slidesPerView:2
                    }
                }}
                speed={1500}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={styles.testimonial}>
                    <img src={img1} alt="" />
                    <div className={styles.content}>
                    <h3>John Doe <span>manager</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque blanditiis libero id, facilis in sequi nihil. Porro, earum quia!</p>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.testimonial}>
                    <img src={img2} alt="" />
                    <div className={styles.content}>
                    <h3>Samantha <span>sales manager</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt quis in incidunt mollitia similique est omnis optio, dicta molestias!</p>
                    </div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className={styles.testimonial}>
                    <img src={img3} alt="" />
                    <div className={styles.content}>
                    <h3>Preeti <span>manager</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, impedit repellendus accusantium explicabo nostrum esse officia in illo incidunt debitis.</p>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    </div>
  )
}

export default Testimonials
