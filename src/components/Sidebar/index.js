import React from 'react';

import styles from './Sidebar.module.scss';

import Icons from '../Icons';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { blogSelector, setTrending, setSearchValue } from '../../redux/slices/blogSlices';

const Sidebar = () => {
  const [profileColor, setProfileColor] = React.useState('');
  const [profile, setProfile] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const dispatch = useDispatch();
  const isAuth = false;

  const { trending, searchValue } = useSelector(blogSelector);

  React.useEffect(() => {
    const colors = [
      '#f44336',
      '#e91e63',
      '#2196f3',
      '#6EEB83',
      '#03a9f4',
      '#00bcd4',
      '#cddc39',
      '#ffc107',
      '#ff9800',
      '#ff5722',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setProfileColor(randomColor);
  }, []);

  const onClickProfile = () => {
    setProfile((prevState) => !prevState);
  };

  const onClickTrending = (e) => {
    dispatch(setTrending(!trending));
    e.preventDefault();
  };

  const onClickSearch = (e) => {
    setSearch(!search);
    e.preventDefault();
  };

  const onChangeInput = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const onClickRemoveSearch = () => {
    dispatch(setSearchValue(''));
    setSearch(!search);
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <Link className={styles.logo} to="/">
          <Icons name="logo" />
        </Link>
        <div className={styles.avatar} style={{ background: isAuth ? profileColor : 'grey' }}>
          <p style={{ color: isAuth ? '#000' : '#FFF' }} onClick={onClickProfile}>
            {isAuth ? 'D' : '?'}
            {/* user.userName.substr(0, 1) */}
          </p>
          {profile && (
            <div className={styles.avatarBox}>
              {isAuth ? <Link to="/">Logout</Link> : <Link to="/login">Login</Link>}
            </div>
          )}
        </div>
        <div className={styles.search}>
          <a href="/" onClick={onClickSearch}>
            <Icons name="search" />
            search
          </a>
          {search && (
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={onChangeInput}
              />
              <div className={styles.closeSearchBox} onClick={onClickRemoveSearch}>
                <Icons name="close" />
              </div>
            </div>
          )}
        </div>
        <div className={styles.trending}>
          {trending ? (
            <a href="/" onClick={onClickTrending}>
              <Icons name="fire" />
              latest
            </a>
          ) : (
            <a href="/" onClick={onClickTrending}>
              <Icons name="trending" />
              trending
            </a>
          )}
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
};

export default Sidebar;
