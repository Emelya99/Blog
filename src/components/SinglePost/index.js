import React from 'react';
import axios from 'axios';

import styles from './SinglePost.module.scss';

import Loader from '../Loader';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSinglePost } from '../../redux/slices/singlePostSlice';

const SinglePost = () => {
  const [loader, setLoader] = React.useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, userName, dataDay, dataMonth, dataYear, text } = useSelector(
    (state) => state.singlePost.post,
  );

  React.useEffect(() => {
    setLoader(true);
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`https://62d964d85d893b27b2e556a2.mockapi.io/posts/${id}`);
        let views = data.views + 1;
        axios.put(`https://62d964d85d893b27b2e556a2.mockapi.io/posts/${id}`, {
          views: views,
        });
        dispatch(setSinglePost(data));
      } catch {
        alert('error');
        navigate('/');
      } finally {
        setLoader(false);
      }
    };
    fetchPost();
  }, [id, navigate, dispatch]);

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      {title && (
        <div className={styles.wrapper}>
          <Link className={styles.btnBack} to="/">
            Back
          </Link>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.info}>
            <p>written by {userName}</p>
            <p>
              on {dataDay} {dataMonth} {dataYear}
            </p>
          </div>
          <p className={styles.text}>
            <span>{text.substr(0, 1)}</span>
            {text.substr(1)}
          </p>
        </div>
      )}
    </>
  );
};

export default SinglePost;
