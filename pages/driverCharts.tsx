import React from 'react';
import Sidebar from '../components/Sidebar';
import DriverChartComponent from '../components/DriverChartComponent';
import styles from './charts.module.css';

const ChartsPage: React.FC = () => {
  return (
    <div className={styles.global}>
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
