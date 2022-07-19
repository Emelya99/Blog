import styles from './Posts.module.scss';
import Post from '../Post';

const Posts = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Latest</h1>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;