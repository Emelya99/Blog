import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Outlet />
      </div>
      <Sidebar />
    </div>
  );
};

export default MainLayout;
