import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';
// import { lang } from '../const/lang';
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../store/langslice';

export const Header = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeLang(e.target.value));
    console.log(e.target.value);
  };

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
        <select onChange={onChange}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="ru">RU</option>
        </select>
      </div>
      <div className="authorization">
        <NavLink className="link" to={'/'} onClick={logoutHandler}>
          Logout
          {/* {lang.en.logIn} */}
        </NavLink>
      </div>
    </header>
  );
};
