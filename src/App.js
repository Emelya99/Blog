import React from 'react';

import './index.scss';
import styles from './App.module.scss';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import Blog from './components/Blog';
import SinglePost from './components/SinglePost';
import ErrorPage from './components/ErrorPage';
import Notific from './components/Notific';
import CreatePost from './components/CreatePost';
import Loader from './components/Loader';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { blogSelector } from './redux/slices/blogSlice';

export const NotificContext = React.createContext(false);

const App = () => {
  const [notific, setNotific] = React.useState(false);
  const [notificContent, setNotificContent] = React.useState(true);

  const { loader } = useSelector(blogSelector);

  React.useEffect(() => {
    notific &&
      setTimeout(() => {
        setNotific(false);
      }, 3000);
  }, [notific]);

  if (loader) {
    return <Loader />;
  }

  return (
    <NotificContext.Provider value={{ setNotific, setNotificContent }}>
      <main>
        <div className="container">
          <div className={styles.notificContainer}>
            {notific && (
              <Notific
                title={notificContent ? 'SUCCESS' : 'FAILED'}
                text={notificContent ? 'You can Log-in now.' : 'Sign-up failed. Please try again.'}
                color={notificContent ? '#6EEB83' : '#FF5E5B'}
              />
            )}
          </div>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Blog />} />
              <Route path="/create-post" element={<CreatePost />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth/login" element={<LoginForm />} />
              <Route path="/auth/register" element={<SignUpForm />} />
            </Route>
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
    </NotificContext.Provider>
  );
};

export default App;
