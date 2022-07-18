import React from 'react';
import SignUpForm from './Form/SignUpForm';
import LoginForm from './Form/LoginForm';
import Notific from '../Notific';

import styles from './Login.module.scss';

import loginBg from './login-bg.jpg';

const Login = () => {
    const [login, setLogin] = React.useState(false);
    const [notofic, setNotific] = React.useState(false);
    const [notificContent, setNotificContent] = React.useState(true);

    const onClickLoginOrSign = (e) => {
        e.preventDefault();
        setLogin(!login);
    }

    return (
        <section className={styles.login}>
            <div className={styles.notificContainer}>
                {notofic &&
                    <Notific
                        title={notificContent ? "SUCCESS" : "FAILED"}
                        text={notificContent ? "You can Log-in now." : "Sign-up failed. Please try again."}
                        color={notificContent ? "#6EEB83" : "#FF5E5B"}
                    />
                }
            </div>
            <div className={styles.image}>
                <h3 className={styles.title}>{login ? "Login" : "Sign Up"}</h3>
                <img src={loginBg} alt="background login" />
            </div>
            <div className={styles.content}>
                <div className={styles.inner}>
                    {login ?
                        <LoginForm
                            onClickLoginOrSign={onClickLoginOrSign}
                        /> :
                        <SignUpForm
                            onClickLoginOrSign={onClickLoginOrSign}
                        />
                    }
                </div>
            </div>
        </section>
    )
}

export default Login;