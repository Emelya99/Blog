import styles from './Blog.module.scss';
import Sidebar from '../Sidebar';
import Posts from '../Posts';

const Blog = () => {
  return (
    <div className={styles.wrapper}>
          <Sidebar />
          <Posts />
    </div>
  );
}

export default Blog;