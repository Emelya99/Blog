import React from 'react';

import styles from '../Auth.module.scss';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slices/userSlice';
import { auth } from '../../../firebase';
import { NotificContext } from '../../../App';

const SignUpForm = () => {
  const [dataError, setDataError] = React.useState('');
  const { setNotific, setNotificContent } = React.useContext(NotificContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (email, password, name) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
        setDataError(err.message),
      );
      await updateProfile(auth.currentUser, { displayName: name }).catch((err) => console.log(err));

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
    name: Yup.string().required('Required name'),
    email: Yup.string().email('invalid email').required('Required email'),
    password: Yup.string().min(6, 'Must be at least 6 characters').required('Required password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), 'Passwords do not match'])
      .min(6, 'Must be at least 6 characters')
      .required('Required confirm password'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      onSubmit={({ email, password, name }) => {
        handleRegister(email, password, name);
      }}
      validationSchema={validationSchema}>
      {({ values, handleSubmit, errors, touched }) => (
        <Form>
          <div className={styles.inputBox}>
            <Field
              className={touched.name && errors.name ? 'error' : ''}
              type="text"
              name="name"
              value={values.name}
              placeholder="Enter your name"
              autoComplete="off"
            />
            {touched.name && errors.name && <p>{errors.name}</p>}
          </div>
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
          <div className={styles.inputBox}>
            <Field
              className={touched.confirmPassword && errors.confirmPassword ? 'error' : ''}
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              placeholder="Confirm password"
              autoComplete="off"
            />
            {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </div>
          <div className={styles.formBottom}>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <p>
              already have an account?
              <br />
              <Link to="/auth/login">log-in</Link>
            </p>
          </div>
          <div className={styles.dataError}>{dataError && <p>{dataError}</p>}</div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
