import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import images from '../assets/images';
import { AuthContext } from '../context/AuthContext';
import '../../src/search.css';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const searchClient = algoliasearch('YIT6C1K5J5', '93905f6f171e09927bb50b998b8141a5');

export const Header = () => {
	const history = useHistory();
	const auth = useContext(AuthContext);

	function logoutHandler(event) {

		// event.preventDefault();
		// auth.logout();
		// history.push();
	}
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
						// submit={<img src={images.search} alt="search-icon"/>}
						// className="searchbox"
						translations={{
						placeholder: 'search...',
						}}
					/>
				</div>
				</div>
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
			<div className="container"> 
				<div className="search-panel__results">
						<Configure hitsPerPage={8} />
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
        <article>
        {props.hit.name}
        </article>
    );
}
  
Hit.propTypes = {
hit: PropTypes.object.isRequired,
};