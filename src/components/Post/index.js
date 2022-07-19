import styles from './Post.module.scss';

const Post = () => {
    return (
        <div className={styles.inner}>
            <div className={styles.info}>
                <p className={styles.data}>27 MAY</p>
                <p className={styles.mail}>@samurai2099</p>
            </div>
            <div className={styles.content}>
                <a className={styles.title} href="/">15 Disadvantages Of Freedom And How You Can Workaround It.</a>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <ul className={styles.tags}>
                    <li>#meditation</li>
                    <li>#mentalpeace</li>
                </ul>
            </div>
        </div>
    );
}

export default Post;