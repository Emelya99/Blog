import React from 'react';
import SignUpForm from './Form/SignUpForm';
import LoginForm from './Form/LoginForm';

import styles from './Login.module.scss';

import loginBg from './login-bg.jpg';

const Login = () => {
    const [login, setLogin] = React.useState(false);

    return (
        <section className={styles.login}>
            <div className={styles.image}>
                <h3 className={styles.title}>Sign Up</h3>
                <img src={loginBg} alt="background login"/>
            </div>
            <div className={styles.content}>
                <div className={styles.inner}>
                    { login ? <LoginForm /> : <SignUpForm /> }
                </div>
            </div>
        </section>
    )
}

export default Login;