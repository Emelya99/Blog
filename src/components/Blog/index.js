import React from 'react';
import styles from './Blog.module.scss';
import Sidebar from '../Sidebar';
import Posts from '../Posts';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://625187db2dc339451d2ef136.mockapi.io/post')
      .then(response => {
        return setPosts(response.data);
      })
  }, [])

  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Posts posts={posts} />
    </div>
  );
}

export default Blog;