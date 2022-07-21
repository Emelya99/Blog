import styles from './Sidebar.module.scss';
import Icons from '../Icons';
import { Link } from 'react-router-dom';
import React from 'react';

const Sidebar = (
    { trending, setTrending, create, setCreate,
        seach, setSearch, searchValue, setSearchValue,
        isAuth, profile, setProfile, user }
) => {

    const [profileColor, setProfileColor] = React.useState('');

    React.useEffect(() => {
        const colors = [ "#f44336", "#e91e63", "#2196f3", "#6EEB83", "#03a9f4", "#00bcd4", "#cddc39", "#ffc107", "#ff9800", "#ff5722" ];
        const randomColor = colors[Math.floor(Math.random()*colors.length)];
        setProfileColor(randomColor);
    }, [])
    

    const onClickProfile = () => {
        setProfile(prevState => !prevState);
    }

    const onClickTrending = (e) => {
        setTrending(prevState => !prevState);
        create && setCreate(!create);
        e.preventDefault();
    }

    const onClickCreatePost = (e) => {
        setCreate(prevState => !prevState);
        trending && setTrending(!trending);
        seach && setSearch(!seach);
        e.preventDefault();
    }

    const onClickSearch = (e) => {
        setSearch(!seach);
        seach && setSearchValue('');
        create && setCreate(!create);
        e.preventDefault();
    }

    const onChangeInput = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
                <div
                    className={styles.avatar}
                    style={{ background: isAuth ? profileColor : "grey" }}
                >
                    <p style={{ color: isAuth ? "#000" : "#FFF" }} onClick={onClickProfile}>
                        {isAuth ? user.userName.substr(0, 1) : "?"}
                    </p>
                    {profile &&
                        <div className={styles.avatarBox}>
                            {isAuth ? <Link to="/">Logout</Link> : <Link to="/login">Login</Link>}
                        </div>
                    }
                </div>
                <div className={styles.search}>
                    <a href="/" onClick={onClickSearch}>
                        <Icons name="search" />
                        search
                    </a>
                    {seach &&
                        <div className={styles.searchBox}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchValue}
                                onChange={onChangeInput}
                            />
                        </div>
                    }
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
                {isAuth &&
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
                }
            </div>
        </div>
    );
}

export default Sidebar;