import React from 'react';
import SignUpForm from './Form/SignUpForm';
import LoginForm from './Form/LoginForm';
import TitleBox from '../TitleBox';

import styles from './Login.module.scss';

import loginBg from './login-bg.jpg';

const Login = ({setNotific, setNotificContent}) => {
    const [login, setLogin] = React.useState(false);

    const onClickLoginOrSign = (e) => {
        setLogin(!login);
        e.preventDefault();
    }

    return (
        <section className={styles.login}>
            <div className={styles.notificContainer}>
            </div>
            <div className={styles.image}>
                <h3 className={styles.title}>{login ? "Login" : "Sign Up"}</h3>
                <img src={loginBg} alt="background login" />
            </div>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <div className={styles.titleBox}>
                        <TitleBox
                            title="Welcome"
                            desc={login ? "Let's log you in quickly" : "Let's sign you up quickly"}
                        />
                    </div>
                    {login ?
                        <LoginForm
                            onClickLoginOrSign={onClickLoginOrSign}
                        /> :
                        <SignUpForm
                            setNotific={setNotific}
                            setNotificContent={setNotificContent}
                            onClickLoginOrSign={onClickLoginOrSign}
                        />
                    }
                </div>
            </div>
        </section>
    )
}

export default Login;