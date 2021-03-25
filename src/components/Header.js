import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';
import '../../src/search.css';
import algoliasearch from 'algoliasearch';
import { InstantSearch, Hits, SearchBox, Pagination, Configure } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

import { SelectLang } from './select';
import { useDict } from '../hooks/useDict';

const searchClient = algoliasearch('YIT6C1K5J5', '93905f6f171e09927bb50b998b8141a5');

export const Header = () => {
	const history = useHistory();
	const { logout, userName, avatar, uploadAvatar } = useContext(AuthContext);
	function logoutHandler(event) {
		event.preventDefault();
		logout();
		history.push();
	}

	const getTranslation = useDict();

	return (
		<InstantSearch searchClient={searchClient} indexName="countries">
			<header className="header">
				<div className="logo">
					<img className="logo-img" src={images.logo} alt="logo" />
				</div>
				<div className="search">
					<div className="search-panel">
						<SearchBox
							autoFocus
							showLoadingIndicator
							translations={{
								placeholder: getTranslation('search')
							}}
						/>
					</div>
				</div>
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
			<div className="container">
				<div className="search-panel__results">
					<Configure hitsPerPage={9} />
					<Hits hitComponent={Hit} />
					<div className="pagination">
						<Pagination />
					</div>
				</div>
			</div>
		</InstantSearch>
	);
};

function Hit(props) {
	return (
		<NavLink to={encodeURI(`/country/${props.hit.name}/${props.hit.capital}&${props.hit.currencies[0].code}`)}>
			<img src={props.hit.flag} className="country-img" alt="img" />
			<div className="country">
				<span>
					<img className="country-flag" src={props.hit.flag} alt="img" />
				</span>
				<span className="country-title">
					{props.hit.name}, {props.hit.capital}
				</span>
			</div>
		</NavLink>
	);
}

Hit.propTypes = {
	hit: PropTypes.object.isRequired
};
