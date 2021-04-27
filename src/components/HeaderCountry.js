import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';
import { SelectLang } from './select';
import { useDict } from '../hooks/useDict';

export const HeaderCountry = () => {
	const history = useHistory();
	const { logout, userName, avatar, uploadAvatar } = useContext(AuthContext);

	function logoutHandler(event) {
		event.preventDefault();
		logout();
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
			<div className="upload-wrapper">
				<label htmlFor="file" className="upload">
					Upload Avatar
				</label>
				<input type="file" id="file" accept="image/*" onChange={(event) => uploadAvatar(event.target.files[0])} />
				<NavLink className="link" to={'/'} onClick={logoutHandler}>
					{getTranslation('logOut')}
				</NavLink>
			</div>
			<div className="authorization">
				<img className="avatar" src={avatar} alt="logo" />
				<p>{userName}</p>
			</div>
		</header>
	);
};
