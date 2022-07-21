import React from 'react';
import './index.scss';
import Login from './components/Login';
import Blog from './components/Blog';
import SinglePost from './components/SinglePost';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <main>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Blog isAuth={isAuth} setIsAuth={setIsAuth}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/:id' element={<SinglePost />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;