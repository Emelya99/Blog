import styles from '../Auth.module.scss';

import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(console.log).catch(console.error);
  };

  return (
    <form>
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <div className={styles.formBottom}>
        <button>Login</button>
        <p>
          don't have an account?
          <br />
          <Link to="/auth/register">sign-up</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
