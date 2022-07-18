import styles from './Login.module.scss';

import SignUpForm from './Form/SignUpForm';
// import LoginForm from './Form/LoginForm';

import loginBg from './login-bg.jpg';

const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.image}>
                <h3 className={styles.title}>Sign Up</h3>
                <img src={loginBg} alt="background login"/>
            </div>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <SignUpForm />
                    {/* <LoginForm /> */}
                </div>
            </div>
        </section>
    )
}

export default Login;