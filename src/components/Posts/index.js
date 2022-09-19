import styles from './Posts.module.scss';
import PostItem from '../PostItem';

const Posts = ({ posts = [], trending, loader, searchValue }) => {
  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  return (
    <>
      {loader ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        <>
          <div className={styles.header}>
            <h1 className={styles.title}>{trending ? 'Trending' : 'Latest'}</h1>
            <div className={styles.search}>
              {searchValue && (
                <p>
                  Search by:<span>{searchValue}</span>
                </p>
              )}
            </div>
          </div>
          {trending
            ? posts
                .sort(byField('views'))
                .slice(0)
                .reverse()
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item) => {
                  return <PostItem key={item.id} item={item} />;
                })
            : posts
                .slice(0)
                .reverse()
                .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                .map((item) => {
                  return <PostItem key={item.id} item={item} />;
                })}
        </>
      )}
    </>
  );
};

export default Posts;
