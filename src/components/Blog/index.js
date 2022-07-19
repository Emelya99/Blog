import React from 'react';
import styles from './Blog.module.scss';
import Sidebar from '../Sidebar';
import Posts from '../Posts';
import axios from 'axios';
import CreatePost from '../CreatePost';

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const [create, setCreate] = React.useState(false);
  const [trending, setTrending] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://625187db2dc339451d2ef136.mockapi.io/post')
      .then(response => {
        return setPosts(response.data);
      })
  }, [])

  React.useEffect(() => {
    axios.get('https://625187db2dc339451d2ef136.mockapi.io/post')
      .then(response => {
        return setPosts(response.data);
      })
  }, [trending])

  return (
    <div className={styles.wrapper}>
      <Sidebar
        trending={trending}
        setTrending={setTrending}
        create={create}
        setCreate={setCreate}
        setPosts={setPosts}
      />
      <div className={styles.content}>
        { create ? <CreatePost /> : <Posts posts={posts} trending={trending}  />}
      </div>
    </div>
  );
}

export default Blog;