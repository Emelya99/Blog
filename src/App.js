import React from 'react';
import './index.scss';
import styles from './App.module.scss';
import Login from './components/Login';
import Blog from './components/Blog';
import SinglePost from './components/SinglePost';
import ErrorPage from './components/ErrorPage';
import Notific from './components/Notific';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);
  const [notific, setNotific] = React.useState(false);
  const [notificContent, setNotificContent] = React.useState(true);

  React.useEffect(() => {
    axios.get(`https://62d964d85d893b27b2e556a2.mockapi.io/users/3`).then((response) => {
      return setUser(response.data);
    });
  }, []);

  React.useEffect(() => {
    user && setIsAuth(user.auth);
  }, [user]);

  React.useEffect(() => {
    notific &&
      setTimeout(() => {
        setNotific(false);
      }, 3000);
  }, [notific]);

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
          <Route
            path="/login"
            element={<Login setNotific={setNotific} setNotificContent={setNotificContent} />}
          />
          <Route path="/" element={<Blog isAuth={isAuth} setIsAuth={setIsAuth} user={user} />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;
