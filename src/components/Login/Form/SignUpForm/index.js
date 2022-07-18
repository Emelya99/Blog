import styles from '../Form.module.scss';
import TitleBox from '../../../TitleBox';

const SignUpForm = () => {
    return (
        <>
            <div className={styles.titleBox}>
                <TitleBox
                    title="Welcome"
                    desc="Let's sign you up quickly"
                />
            </div>
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
                        already have an account?<br/>
                        <a href="/">log-in</a>
                    </p>
                </div>
            </form>
        </>
    )
}

export default SignUpForm;