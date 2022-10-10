import React from 'react';

import styles from './ScrollTop.module.scss';

import Icons from '../Icons';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const clickScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div className={styles.scrollTop} onClick={clickScrollTop}>
          <Icons name="arrowTop" />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
