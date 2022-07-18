import styles from '../Form.module.scss';

const SignUpForm = ({ onClickLoginOrSign }) => {
    return (
        <form>
            <input
                type="text"
                placeholder="Enter your name"
            />
            <input
                type="email"
                placeholder="Enter your email"
            />
            <input
                type="password"
                placeholder="Enter password"
            />
            <input
                type="password"
                placeholder="Confirm password"
            />
            <div className={styles.formBottom}>
                <button>
                    Submit
                </button>
                <p>
                    already have an account?<br />
                    <a href="/" onClick={onClickLoginOrSign}>log-in</a>
                </p>
            </div>
        </form>
    )
}

export default SignUpForm;