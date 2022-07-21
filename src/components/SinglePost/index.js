import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './SinglePost.module.scss';

const SinglePost = () => {
  const {id} = useParams();
  const [ post, setPost ] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://62d964d85d893b27b2e556a2.mockapi.io/posts/${id}`)
      .then(response => {
        return setPost(response.data);
      })
  }, [id])
  

  return (
    <div className={styles.wrapper}>
      { post && (
        <>
        <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.info}>
        <p>written by {post.userName}</p>
        <p>on {post.dataDay} {post.dataMonth} {post.dataYear}</p>
      </div>
      <p className={styles.text}><span>{post.text.substr(0, 1)}</span>{post.text.substr(1)}</p>
        </>
      ) }
    </div>
  );
}

export default SinglePost;