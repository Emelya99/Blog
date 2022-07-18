import styles from '../Form.module.scss';

const LoginForm = ({ onClickLoginOrSign }) => {
    return (
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
                    don't have an account?<br />
                    <a href="/" onClick={onClickLoginOrSign}>sign-up</a>
                </p>
            </div>
        </form>
    )
}

export default LoginForm;