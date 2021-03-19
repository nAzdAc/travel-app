import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';
import { SelectLang } from './select';
import { useDict } from '../hooks/useDict';

export const HeaderCountry = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  function logoutHandler(event) {
    event.preventDefault();
    auth.logout();
    history.push();
  }

  const getTranslation = useDict();

  return (
    <header className="header_country">
      <NavLink className="link" to={'/main'}>
        <div className="logo">
          <img className="logo-img" src={images.logo} alt="logo" />
        </div>
      </NavLink>
      <div className="language">
        <SelectLang />
      </div>
      <div className="authorization">
        <NavLink className="link" to={'/'} onClick={logoutHandler}>
          {getTranslation('logOut')}
        </NavLink>
      </div>
    </header>
  );
};
