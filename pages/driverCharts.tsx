import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Sidebar from '../components/Sidebar';
import DriverChartComponent from '../components/DriverChartComponent';
import styles from './charts.module.css';

const ChartsPage: React.FC = () => {
  return (
    <div className={styles.global}>
      <Analytics /> <SpeedInsights/>
      <div className={styles.container}>
        <Sidebar />
          <div className={styles.container}>
            <DriverChartComponent />
          </div>
      </div>
    </div>
  );
};

export default ChartsPage;
