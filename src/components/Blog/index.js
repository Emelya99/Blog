import React from 'react';

import Posts from '../Posts';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPosts, setLoader } from '../../redux/slices/blogSlices';

import axios from 'axios';

const Blog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(setLoader(true));
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('https://62d964d85d893b27b2e556a2.mockapi.io/posts');
        dispatch(setPosts(data));
        // dispatch(setLoader(false));
      } catch {
        // dispatch(setLoader(false));
        alert('Oh no... Try later:)');
        navigate('/*');
      }
    };
    fetchPosts();
  }, [navigate, dispatch]);

  return <Posts />;
};

export default Blog;
