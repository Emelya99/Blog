import styles from './Notific.module.scss';

import Icons from '../Icons';

const Notific = ({ title, text, color }) => {
  return (
    <div className={styles.box} style={{ background: color }}>
      <p>
        <span>{title}</span>
        {text}
      </p>
      <div className={styles.iconContainer}>
        <Icons name="notific" />
      </div>
    </div>
  );
};

export default Notific;
