import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
        <footer className={styles.footer}>
            <div className={styles.section}>
                <h2>About</h2>
                <p>Our website is dedicated to providing the latest insights and analytics in the world of motorsports.</p>
            </div>
            <div className={styles.section}>
                <h2>Legal</h2>
                <p>All content © 2024. All rights reserved.</p>
                <p>Terms of Service | Privacy Policy</p>
            </div>
            <div className={styles.section}>
                <h2>Contact</h2>
                <p>Email: info@example.com</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
