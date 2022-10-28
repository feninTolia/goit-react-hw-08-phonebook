import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import css from 'pages/SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <>
      <div className={css.wrapper}>
        <div>
          <NavLink to="/" end className={css.navItem}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={css.navItem}>
            PhoneBook
          </NavLink>
        </div>

        <div>
          {token ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/register" className={css.navItem}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={css.navItemMarked}>
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SharedLayout;
