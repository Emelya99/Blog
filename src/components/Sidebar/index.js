import React from 'react';

import styles from './Sidebar.module.scss';

import Icons from '../Icons';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { blogSelector, setTrending, setSearchValue } from '../../redux/slices/blogSlice';

const Sidebar = () => {
  const [profileColor, setProfileColor] = React.useState('');
  const [profile, setProfile] = React.useState(false);
  const [search, setSearch] = React.useState(false);

  const inputRef = React.useRef();
  const profileRef = React.useRef();
  const searchRef = React.useRef();

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

  React.useEffect(() => {
    const onClickOutside = (e) => {
      if (!e.path.includes(profileRef.current)) {
        setProfile(false);
      }
      if (!e.path.includes(searchRef.current)) {
        setSearch(false);
      }
    };

    document.body.addEventListener('click', onClickOutside);

    return () => {
      document.body.removeEventListener('click', onClickOutside);
    };
  });

  const onClickProfile = () => {
    setProfile((prevState) => !prevState);
  };

  const onClickTrending = () => {
    dispatch(setTrending(!trending));
  };

  const onClickSearch = () => {
    setSearch(!search);
  };

  const onChangeInput = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const onClickRemoveSearch = () => {
    dispatch(setSearchValue(''));
    inputRef.current.focus();
  };

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <Link className={styles.logo} to="/">
          <Icons name="logo" />
        </Link>
        <div
          className={styles.avatar}
          style={{ background: isAuth ? profileColor : 'grey' }}
          ref={profileRef}>
          <p style={{ color: isAuth ? '#000' : '#FFF' }} onClick={onClickProfile}>
            {isAuth ? 'D' : '?'}
            {/* user.userName.substr(0, 1) */}
          </p>
          {profile && (
            <div className={styles.avatarBox}>
              <Link to="/">{isAuth ? 'Logout' : 'Login'}</Link>
            </div>
          )}
        </div>
        <div className={styles.search} ref={searchRef}>
          <Link to="/" onClick={onClickSearch}>
            <Icons name="search" />
            search
          </Link>
          {search && (
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={onChangeInput}
                ref={inputRef}
              />
              <div className={styles.closeSearchBox} onClick={onClickRemoveSearch}>
                <Icons name="close" />
              </div>
            </div>
          )}
        </div>
        <div className={styles.trending}>
          <Link to="/" onClick={onClickTrending}>
            {trending ? (
              <>
                <Icons name="fire" />
                latest
              </>
            ) : (
              <>
                <Icons name="trending" />
                trending
              </>
            )}
          </Link>
        </div>
        <div className={styles.create}>
          <Link to="/create-post">
            <Icons name="create" />
            create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
