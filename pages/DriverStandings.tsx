import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Sidebar from '../components/Sidebar';
import DriverChartComponent from '../components/DriverChartComponent';
import Footer from '../components/Footer';
import styles from './Standings.module.css';

const DriverStandings: React.FC = () => {
  return (
    <div className={styles.global}>
      <Analytics /> <SpeedInsights/>
      <div className={styles.container}>
        <Sidebar />
          <div className={styles.container}>
            <DriverChartComponent />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default DriverStandings;
