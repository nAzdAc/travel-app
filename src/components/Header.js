import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';

export const Header = () => {
	const history = useHistory();
	const auth = useContext(AuthContext);

	function logoutHandler(event) {

		// event.preventDefault();
		// auth.logout();
		// history.push();
	}
	return (
		<header className="header">
			<div className="logo">
				<img className="logo-img" src={images.logo} alt="logo" />
			</div>
			<div className="search">search</div>
			<div className="language">
				<select>
					<option>EN</option>
					<option>BLR</option>
					<option>RU</option>
				</select>
			</div>
			<div className="authorization">
				<NavLink className="link"
				to={'/'}
				onClick={logoutHandler}>
					Logout
				</NavLink>
			</div>
		</header>
	);
};
