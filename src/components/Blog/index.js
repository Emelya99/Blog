import React from 'react';

import Posts from '../Posts';
import Loader from '../Loader';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPosts } from '../../redux/slices/blogSlice';

import axios from 'axios';

const Blog = () => {
  const [loader, setLoader] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setLoader(true);
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('https://62d964d85d893b27b2e556a2.mockapi.io/posts');
        dispatch(setPosts(data));
        setLoader(false);
      } catch {
        setLoader(false);
        alert('Oh no... Try later:)');
        navigate('/*');
      }
    };
    fetchPosts();
  }, [navigate, dispatch]);

  if (loader) {
    return <Loader />;
  }

  return <Posts />;
};

export default Blog;
