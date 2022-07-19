import styles from './Posts.module.scss';
import PostItem from '../PostItem';

const Posts = ({ posts = []} ) => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Latest</h1>
            {posts.slice(0).reverse().map(item => {
                return <PostItem key={item.id} item={item} />
            })}
        </div>
    );
}

export default Posts;