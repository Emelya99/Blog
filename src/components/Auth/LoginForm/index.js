import React from 'react';

import styles from '../Auth.module.scss';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userSlice';
import { auth } from '../../../firebase';
import { NotificContext } from '../../../App';

const LoginForm = () => {
  const [dataError, setDataError] = React.useState('');
  const { setNotific, setNotificContent } = React.useContext(NotificContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password).catch((err) =>
        setDataError(err.message),
      );

      if (user) {
        dispatch(
          setUser({
            name: auth.currentUser.displayName,
            email: auth.currentUser.email,
            token: auth.currentUser.accessToken,
            id: auth.currentUser.uid,
          }),
        );
        navigate('/');
        setNotific(true);
        setNotificContent(true);
      } else {
        setNotific(true);
        setNotificContent(false);
      }
    } catch (err) {
      setNotific(true);
      setNotificContent(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required email'),
    password: Yup.string().required('Required password'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={({ email, password }) => {
        handleLogin(email, password);
      }}
      validationSchema={validationSchema}>
      {({ values, handleSubmit, errors, touched }) => (
        <Form>
          <div className={styles.inputBox}>
            <Field
              className={touched.email && errors.email ? 'error' : ''}
              type="email"
              name="email"
              value={values.email}
              placeholder="Enter your email"
              autoComplete="off"
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
          <div className={styles.inputBox}>
            <Field
              className={touched.password && errors.password ? 'error' : ''}
              type="password"
              name="password"
              value={values.password}
              placeholder="Enter password"
              autoComplete="off"
            />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <div className={styles.formBottom}>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <p>
              don't have an account?
              <br />
              <Link to="/auth/register">sign-up</Link>
            </p>
          </div>
          <div className={styles.dataError}>{dataError && <p>{dataError}</p>}</div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
