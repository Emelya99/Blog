import React from 'react';
import './index.scss';
// import Login from './components/Login';
import Blog from './components/Blog';

const App = () => {
  const [isAuth, setIsAuth] = React.useState(true);

  return (
    <main>
      <div className='container'>
        <Blog
          isAuth={isAuth}
          setIsAuth={setIsAuth}
        />
        {/* <Login /> */}
        
      </div>
    </main>
  );
}

export default App;