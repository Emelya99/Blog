import React from 'react';
import CreatePostForm from '../CreatePostForm';
import styles from './CreatePost.module.scss';

const CreatePost = () => {
  const [formAccept, setFormAccept] = React.useState(false);
  return (
    <>
      {formAccept ? (
        <div className={styles.accept}>
          <h2 className="title">Congratulations 😎</h2>
          <p>Your post will be added</p>
        </div>
      ) : (
        <CreatePostForm setFormAccept={setFormAccept} />
      )}
    </>
  );
};

export default CreatePost;
