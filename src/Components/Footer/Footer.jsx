import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
        <div className={styles.FooterLinks}>
            <div className={styles.logo}>
                <h2>Grandora</h2>
                <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>
        </div>
            <div className={styles.FooterLinks}>
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Contact Us</p>
                <p>Rooms</p>
                <p>Services</p>
            </div>
            <div className={styles.FooterLinks}>
                <h3>City Branches</h3>
                <p>Bharat</p>
                <p>California</p>
                <p>Florida</p>
                <p>New York</p>
            </div>
            <div className={styles.FooterLinks}>
                <h3>Contact Us</h3>
                <p>Phone: <span>+91 234 567 890</span></p>
                <p>Email: <span>info@grandora.com</span></p>
                <p>Address: <span>123 Main Street, Mumbai, India</span></p>
            </div>
    </footer>
    )
}

export default Footer
