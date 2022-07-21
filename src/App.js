import React from 'react';
import './index.scss';
import Login from './components/Login';
import Blog from './components/Blog';
import SinglePost from './components/SinglePost';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [user, setUser] = React.useState(null);
  const [isAuth, setIsAuth] = React.useState(false);

  React.useEffect(() => {
    axios.get(`https://62d964d85d893b27b2e556a2.mockapi.io/users/1`)
      .then(response => {
        return setUser(response.data);
      })
  }, [])

  React.useEffect(() => {
    user && setIsAuth(user.auth);
  }, [user])


  return (
    <main>
      <div className='container'>
        <Routes>
          <Route path='/' element={
            <Blog
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              user={user}
            />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/:id' element={<SinglePost />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;