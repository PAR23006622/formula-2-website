import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from './about.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.global}>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Welcome to my Formula 2 Analytics page</h1>
          <p className={styles.description}>
            My name is <strong>Ben Parkinson</strong>, and I am currently a university student. This website is my independent project for one of my units.
          </p>
          <h2 className={styles.subtitle}>Project Motivation</h2>
          <p className={styles.description}>
            I have recently been interested about the Formula motorsports, and I wanted to create a platform that provides detailed analytics for the Formula 2 series. This project is the result of my interest in both data analysis and Formula motorsports.
          </p>
          <h2 className={styles.subtitle}>Project Details</h2>
          <p className={styles.description}>
            Creating this website was very challenging. Given the limited time frame I had to work with, some aspects of the website may not be as polished as those on professional websites. However, I have dedicated a significant amount of time and effort to ensure that the content is informative and engaging.
          </p>
          <h2 className={styles.subtitle}>Enjoy the Experience</h2>
          <p className={styles.description}>
            I hope you find the analytics and insights provided here useful and enjoyable. Your feedback and support are greatly appreciated as they help me learn and improve my skills.
          </p>
          <p className={styles.description}>
            <strong>Thank you for visiting!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
