import React from 'react';
import axios from 'axios';

import styles from './SinglePost.module.scss';

import Loader from '../Loader';

import { Link, useParams, useNavigate } from 'react-router-dom';

const SinglePost = () => {
  const [post, setPost] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    setLoader(true);
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`https://62d964d85d893b27b2e556a2.mockapi.io/posts/${id}`);
        let views = data.views + 1;
        axios.put(`https://62d964d85d893b27b2e556a2.mockapi.io/posts/${id}`, {
          views: views,
        });
        setPost(data);
        setLoader(false);
      } catch {
        setLoader(false);
        alert('error');
        navigate('/');
      }
    };

    fetchPost();
  }, [id, navigate]);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      {post && (
        <>
          <Link className={styles.btnBack} to="/">
            Back
          </Link>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.info}>
            <p>written by {post.userName}</p>
            <p>
              on {post.dataDay} {post.dataMonth} {post.dataYear}
            </p>
          </div>
          <p className={styles.text}>
            <span>{post.text.substr(0, 1)}</span>
            {post.text.substr(1)}
          </p>
        </>
      )}
    </div>
  );
};

export default SinglePost;
