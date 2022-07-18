import styles from './TitleBox.module.scss';

const TitleBox = ({title, desc}) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{desc}</p>
        </>
    )
}

export default TitleBox;