import React from 'react';
import styles from './Blog.module.scss';
import Sidebar from '../Sidebar';
import Posts from '../Posts';
import axios from 'axios';
import CreatePost from '../CreatePost';

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  const [loader, setLoader] = React.useState(false);
  const [create, setCreate] = React.useState(false);
  const [trending, setTrending] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://625187db2dc339451d2ef136.mockapi.io/post')
      .then(response => {
        return setPosts(response.data);
      })
  }, [])

  React.useEffect(() => {
    setLoader(true);
    axios.get('https://625187db2dc339451d2ef136.mockapi.io/post')
      .then(response => {
        return setPosts(response.data);
      })
      setTimeout(() => {
        setLoader(false)
      }, 300);
      
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
        {create ?
          <CreatePost />
          :
          <Posts
            posts={posts}
            trending={trending}
            loader={loader}
          />
        }
      </div>
    </div>
  );
}

export default Blog;