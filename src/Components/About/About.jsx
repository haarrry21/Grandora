import React from "react";
import aboutCss from "./About.module.css";
import aboutImg from "../../assets/about.png";

function About() {
    return (
        <div id="about" className={`${aboutCss.about_wrapper} section`}>
            <div className={aboutCss.about_img}>
                <img src={aboutImg} alt="About Us" />
            </div>
            
            <div className={aboutCss.about_content}>
                <small className="section_heading">The Grandora Story</small>
                <h2 className="section_title">Where Elegance Meets Culinary <span>Excellence</span></h2>
                <p>Grandora is a culinary destination that combines the finest ingredients with innovative techniques to create an unforgettable dining experience.</p>

                <div className={aboutCss.Cards}>
                    <p>260+ <span>Awards</span></p>
                    <p>1000+ <span>Happy Customers</span></p>
                    <p>150+ <span>Events Hosted</span></p>
                </div>
            </div>

        </div>


    )

}

export default About;