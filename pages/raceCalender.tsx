import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Sidebar from '../components/Sidebar';
import styles from './index.module.css';

const raceCalender: React.FC = () => {
  return (
    <div className={styles.global}>
    <Analytics /> <SpeedInsights/>
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Race Calender</h1>
        <p className={styles.description}>
          Temp
        </p>
      </div>
    </div>
    </div>
  );
};

export default raceCalender;
