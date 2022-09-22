import React from 'react';

import Sidebar from '../Sidebar';
import Posts from '../Posts';
import Loader from '../Loader';

import styles from './Blog.module.scss';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { blogSelector } from '../../redux/slices/blogSlices';

import axios from 'axios';

const Blog = ({ isAuth, user }) => {
  const [posts, setPosts] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  const { trending } = useSelector(blogSelector);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLoader(true);
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('https://62d964d85d893b27b2e556a2.mockapi.io/posts');
        setPosts(data);
        setLoader(false);
      } catch {
        setLoader(false);
        alert('Oh no... Try later:)');
        navigate('/*');
      }
    };
    fetchPosts();
  }, [navigate, trending]);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <Sidebar isAuth={isAuth} user={user} />
      <div className={styles.content}>
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
