import styles from './Posts.module.scss';
import PostItem from '../PostItem';

const Posts = ({ posts = [], trending, loader }) => {

    function byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    return (
        <>
            {
                loader ? <div className={styles.loader}>Loading...</div> :
                    <>
                        <h1 className={styles.title}>{trending ? "Trending" : "Latest"}</h1>
                        {trending ?
                            posts.sort(byField('views')).slice(0).reverse().map(item => {
                                return <PostItem key={item.id} item={item} />
                            })
                            :
                            posts.slice(0).reverse().map(item => {
                                return <PostItem key={item.id} item={item} />
                            })
                        }
                    </>
            }
        </>
    );
}

export default Posts;