import styles from './Sidebar.module.scss';
import Icons from '../Icons';

const Sidebar = ({ create, setCreate }) => {

    const onClickCreatePost = (e) => {
        e.preventDefault();
        setCreate(prevState => !prevState)
    }

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
                <div className={styles.avatar}>
                    <p>s</p>
                </div>
                <div className={styles.search}>
                    <a href="/">
                        <Icons name="search" />
                        search
                    </a>
                </div>
                <div className={styles.trending}>
                    <a href="/">
                        <Icons name="trending" />
                        trending
                    </a>
                </div>
                <div className={styles.create}>
                    {create ?
                        <a href="/" onClick={onClickCreatePost}>
                            <Icons name="home" />
                            home
                        </a> :
                        <a href="/" onClick={onClickCreatePost}>
                            <Icons name="create" />
                            create
                        </a>
                    }
                </div>
            </div>
        </div>
    );
}

export default Sidebar;