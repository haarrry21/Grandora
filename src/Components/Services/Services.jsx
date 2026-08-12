import React from "react";
import servicesCss from "../Services/Services.module.css";

const Services = () => {
    return (
        <div id="services" className={`${servicesCss.Services_wrapper} section`}>
            <small className="section_heading">Our Services</small>
            <h2 className="section_title">Excellence with Our <span>Services</span></h2>
                <div className={servicesCss.Services_cards}>
                    <div className={servicesCss.card}>
                        <i className="ri-hotel-line"></i>
                        <h3>Basic Facilities</h3>
                        <p> - Reception/Front Desk</p>
                        <p> - Housekeeping</p>
                        <p> - Room Service</p>
                        <p> - WiFi & Parking</p>
                    </div>
                    <div className={servicesCss.card}>
                        <i className="ri-hotel-bed-line"></i>
                        <h3>Room Aminities</h3>
                        <p> - Air Conditioning</p>
                        <p> - Flat-screen TV</p>
                        <p> - Mini Bar</p> 
                        <p> - Private Pool</p>
                    </div>
                    <div className={servicesCss.card}>
                        <i className="ri-goblet-line"></i>
                        <h3>Dining Options</h3>
                        <p> - Restaurant & Cafe</p>
                        <p> - In-room Dining</p>
                        <p> - Bar & Lounge</p>
                        <p> - Special Dietary Options</p>
                    </div>
                    <div className={servicesCss.card}>
                        <i className="ri-sun-line"></i>
                        <h3>Wellness & Leisure</h3>
                        <p> - Spa & Massage</p>
                        <p> - Swimming Pool</p>
                        <p> - Gym & Fitness Center</p>
                        <p> - Yoga & Meditation</p>
                    </div>
                </div>        
        </div>
    )
}

export default Services;