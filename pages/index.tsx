import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Sidebar from '../components/Sidebar';
import styles from './InfomrationPage.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.global}>
    <Analytics/> <SpeedInsights/>
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Welcome to My Website</h1>
        <p className={styles.description}>
          This is the welcome page of your website. Feel free to navigate through the sidebar to explore different sections.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Home;
