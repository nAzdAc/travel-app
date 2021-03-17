import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';
// import { lang } from '../const/lang';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../store/langslice';
import { langs } from '../const/langs';
import { SelectLang } from './select';

export const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  function logoutHandler(event) {
    console.log('click logout');
    event.preventDefault();
    auth.logout();
    history.push();
  }
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-img" src={images.logo} alt="logo" />
      </div>
      <div className="search">search</div>
      <div className="language">
        <SelectLang />
      </div>
      <div className="authorization">
        <NavLink className="link" to={'/'} onClick={logoutHandler}>
          Logout translate
          {/* {lang.en.logIn} */}
        </NavLink>
      </div>
    </header>
  );
};
