import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styles from './InformationPage.module.css';

const TeamStandings: React.FC = () => {
  return (
    <div className={styles.global}>
    <Analytics /> <SpeedInsights/>
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Team Charts</h1>
        <p className={styles.description}>
          Temp
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TeamStandings;
