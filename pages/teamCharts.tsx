import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from './index.module.css';

const teamCharts: React.FC = () => {
  return (
    <div className={styles.global}>
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Team Charts</h1>
        <p className={styles.description}>
          Temp
        </p>
      </div>
    </div>
    </div>
  );
};

export default teamCharts;
