import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/driverCharts" legacyBehavior>
          <a className={styles.link}>Driver Charts</a>
        </Link>
        <Link href="/teamCharts" legacyBehavior>
          <a className={styles.link}>Team Charts</a>
        </Link>
        <Link href="/raceCalender" legacyBehavior>
          <a className={styles.link}>Race Calender </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={styles.link}>About</a>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
