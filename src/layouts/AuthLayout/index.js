import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import TitleBox from '../../components/TitleBox';

import styles from './AuthLayout.module.scss';

import authBg from './auth-bg.jpg';

const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/auth') {
      navigate('/404');
    }
  }, [navigate, pathname]);

  return (
    <section className={styles.auth}>
      <div className={styles.image}>
        <h3 className={styles.title}>{pathname === '/auth/login' ? 'Login' : 'Sign Up'}</h3>
        <img src={authBg} alt="background login" />
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.titleBox}>
            <TitleBox
              title="Welcome"
              desc={
                pathname === '/auth/login'
                  ? 'Let`s log you in quickly'
                  : 'Let`s sign you up quickly'
              }
            />
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
