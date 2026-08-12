import React from "react";
import styles from "./Aminities.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import img1 from "../../assets/pool.jpg";
import img2 from "../../assets/gym.jpg";
import img3 from "../../assets/rest.jpg";

const Amenities = () => {
    return (
        <div className={`${styles.aminities_wrapper} section`}>
            <small className="section_Heading">Luxury Amenities </small>
            <h2 className="section_Title">Our Best <span>Amenities</span></h2>

            <Swiper
                className={styles.swiper}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                speed={2000}
                modules={[Autoplay]}
            > 
                <SwiperSlide>
                    <div className={styles.amenities_item}>
                        <img src={img1} alt="amenities-img" />

                        <div className={styles.content}>
                            <h2>Swimming Pool</h2>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, doloremque.</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.amenities_item}>
                        <img src={img2} alt="amenities-img" />

                        <div className={styles.content}>
                            <h2>Gym & Fitness Center</h2>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, quibusdam.</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.amenities_item}>
                        <img src={img3} alt="amenities-img" />

                        <div className={styles.content}>
                            <h2>Restro & Bar</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, id.</p>
                            <button>Book Now !</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Amenities;
