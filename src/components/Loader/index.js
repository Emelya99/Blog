import React from 'react';

import styles from './Loader.module.scss';

import LoaderGif from './loader.gif';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <img src={LoaderGif} alt="loader" />
    </div>
  );
};

export default Loader;
