import styles from '../Form.module.scss';
import TitleBox from '../../../TitleBox';

const LoginForm = () => {
    return (
        <>
            <div className={styles.titleBox}>
                <TitleBox
                    title="Welcome"
                    desc="Let’s log you in quickly"
                />
            </div>
            <form>
                <input
                    type="email"
                    placeholder="Enter your email"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                />
                <div className={styles.formBottom}>
                    <button>
                        Login
                    </button>
                    <p>
                        don't have an account?<br/>
                        <a href="/">sign-up</a>
                    </p>
                </div>
            </form>
        </>
    )
}

export default LoginForm;