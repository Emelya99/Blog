import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.scss';

const PostItem = ({ item }) => {
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
                <Link className={styles.title} to={`post/${item.id}`}>{item.title}</Link>
                <p className={styles.text}>
                    {(item.text.length >= 444) ?
                        <>
                            {item.text.substr(0, 444)}
                            <Link to={`post/${item.id}`}>...read more</Link>
                        </>
                        :
                        item.text
                    }
                </p>
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