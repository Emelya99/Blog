import React from 'react';

import './index.scss';
import styles from './App.module.scss';

import Login from './components/Login';
import Blog from './components/Blog';
import SinglePost from './components/SinglePost';
import ErrorPage from './components/ErrorPage';
import Notific from './components/Notific';
import MainLayout from './layouts/MainLayout';
import CreatePost from './components/CreatePost';
import Loader from './components/Loader';

import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { blogSelector } from './redux/slices/blogSlice';

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
          <Route
            path="/login"
            element={<Login setNotific={setNotific} setNotificContent={setNotificContent} />}
          />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
