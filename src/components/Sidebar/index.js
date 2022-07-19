import styles from './Sidebar.module.scss';
import Icons from '../Icons';

const Sidebar = () => {
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
                    <a href="/">
                        <Icons name="create" />
                        create
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;