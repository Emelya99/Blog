import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
