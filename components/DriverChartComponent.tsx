import React from 'react';
import { Bar, Line, Pie, Radar, PolarArea, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { lineChartData, pieChartData, barChartData, lineChartOptions, commonOptions, f2Drivers2024ChartData, radarChartData, polarAreaChartData, doughnutChartData } from './chartData';
import styles from '../pages/Standings.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, RadialLinearScale);

const LineChartComponent: React.FC = () => (
  <div className={styles.chartRow}>
    <h1 className={styles.title}>Line Chart</h1>
    <Line data={lineChartData} options={lineChartOptions} height={400} />
  </div>
);

const BarChartComponent: React.FC = () => (
  <div className={styles.chartRow}>
    <h1 className={styles.title}>Bar Chart</h1>
    <Bar data={barChartData} options={commonOptions} height={400} />
  </div>
);

const PieChartComponent: React.FC = () => (
  <div className={styles.chartRow}>
    <h1 className={styles.title}>Pie Chart</h1>
    <Pie data={pieChartData} />
  </div>
);

const F2Drivers2024ChartComponent: React.FC = () => (
  <div className={styles.chartRow}>
    <h1 className={styles.title}>Formula 2 2024 Drivers Points</h1>
    <Line data={f2Drivers2024ChartData} options={lineChartOptions} height={400} />
  </div>
);

const RadarChartComponent: React.FC = () => (
  <div className={styles.chartRow}>
    <h1 className={styles.title}>Radar Chart</h1>
    <Radar data={radarChartData} options={commonOptions} height={400} />
  </div>
);

const PolarAreaChartComponent: React.FC = () => (
  <div className={styles.chartRow}>
    <h1 className={styles.title}>Polar Area Chart</h1>
    <PolarArea data={polarAreaChartData} options={commonOptions} height={400} />
  </div>
);

const DoughnutChartComponent: React.FC = () => (
  <div className={styles.chartRow}>
    <h1 className={styles.title}>Doughnut Chart</h1>
    <Doughnut data={doughnutChartData} options={commonOptions} height={400} />
  </div>
);

const DriverChartComponent: React.FC = () => {
  return (
    <>
      <LineChartComponent />
      <BarChartComponent />
      <PieChartComponent />
      <F2Drivers2024ChartComponent />
      <RadarChartComponent /> 
      <PolarAreaChartComponent /> 
      <DoughnutChartComponent />
    </>
  );
};

export default DriverChartComponent;
