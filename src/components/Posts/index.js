import styles from './Posts.module.scss';
import Post from '../Post';

const Posts = ({ posts = []} ) => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Latest</h1>
            {posts.slice(0).reverse().map(item => {
                return <Post key={item.id} item={item} />
            })}
        </div>
    );
}

export default Posts;