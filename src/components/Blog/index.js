import React from 'react';
import styles from './Blog.module.scss';
import Sidebar from '../Sidebar';
import Posts from '../Posts';
import axios from 'axios';
import CreatePost from '../CreatePost';

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const [create, setCreate] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://625187db2dc339451d2ef136.mockapi.io/post')
      .then(response => {
        return setPosts(response.data);
      })
  }, [])

  return (
    <div className={styles.wrapper}>
      <Sidebar
        create={create}
        setCreate={setCreate}
      />
      <div className={styles.content}>
        { create ? <CreatePost /> : <Posts posts={posts} />}
      </div>
    </div>
  );
}

export default Blog;