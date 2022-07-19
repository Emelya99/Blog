import styles from './Sidebar.module.scss';
import Icons from '../Icons';

const Sidebar = ({ trending, setTrending, create, setCreate }) => {

    const onClickTrending = (e) => {
        setTrending(prevState => !prevState);
        create && setCreate(!create);
        e.preventDefault();
    }

    const onClickCreatePost = (e) => {
        setCreate(prevState => !prevState);
        trending && setTrending(!trending);
        e.preventDefault();
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
                    {trending ?
                        <a href="/" onClick={onClickTrending}>
                            <Icons name="home" />
                            home
                        </a> :
                        <a href="/" onClick={onClickTrending}>
                            <Icons name="trending" />
                            trending
                        </a>
                    }
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