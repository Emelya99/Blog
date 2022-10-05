import React from 'react';
import CreatePostForm from '../CreatePostForm';
import styles from './CreatePost.module.scss';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [formAccept, setFormAccept] = React.useState(false);
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuth) {
      navigate('/auth/login');
    }
  }, [navigate, isAuth]);

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
