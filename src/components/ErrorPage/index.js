import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>We couldn't find this page</p>
        <Link className="btn" to="/">Back Home</Link>
    </div>
  );
}

export default ErrorPage;