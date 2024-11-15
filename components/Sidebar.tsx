import React, { useState, useEffect } from 'react';
import isMobile from 'ismobilejs';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        const mobileCheck = isMobile(window.navigator);
        setIsMobileDevice(mobileCheck.any);
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {isMobileDevice && (
                <button
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={toggleSidebar}
                    aria-label="Toggle sidebar"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            )}
            <div className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}>
                <nav className={styles.nav}>
                    <a href="../" className={styles.link}>Home</a>
                    <a href="../driverCharts" className={styles.link}>Driver Stats</a>
                    <a href="../teamCharts" className={styles.link}>Team Stats</a>
                    <a href="../raceCalender" className={styles.link}>Race Calendar</a>
                    <a href="../about" className={styles.link}>About</a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
