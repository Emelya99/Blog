import styles from './PostItem.module.scss';

const PostItem = ({item}) => {
    return (
        <div className={styles.inner}>
            <div className={styles.info}>
                <p className={styles.data}>
                    <span>{item.dataDay}</span>
                    {item.dataMonth.substr(0, 3)}
                </p>
                <p className={styles.mail}>@{item.userName}</p>
            </div>
            <div className={styles.content}>
                <a className={styles.title} href="/">{item.title}</a>
                <p className={styles.text}>{item.text}</p>
                <ul className={styles.tags}>
                    {item.tags.map((tag, index) => {
                        return <li key={index}>#{tag}</li>
                    })}
                </ul>
            </div>
            <p className={styles.views}>{item.views} - views</p>
        </div>
    );
}

export default PostItem;