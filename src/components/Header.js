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
import { useHttp } from '../hooks/http.hook';

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
  // const [countryImg, setCountryImg] = useState();
	// const pageLength = 5; // number of objects per page			
	// let lon ="-15.40669"; // place longitude
	// let lat = "28.28713"; // place latitude
	// let offset = 0; // offset from first object in the list
	// let count = 0; // total objects count
	// const firstLoad = () => {
	// 	apiGet(
	// 		"radius",
	// 		`radius=1000&limit=${pageLength}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
	// 	).then(function(data) {
	// 		offset = 0;
	// 		console.log(data)
		
	// 	});
	// }


	// const fetchData = async () => {
	// 	let name = props.hit.capital;
  //   apiGet("geoname", "name=" + name).then(function(data) {
	// 		let message = "Name not found";
	// 		if (data.status == "OK") {
	// 			lon = data.lon;
	// 			lat = data.lat;
	// 			console.log(data)
	// 		}
	// 		// firstLoad()
	// 	});

	// 	}

			//  useEffect( () => {fetchData()},[]);

    return (
        <a className="country-link" href="{props.hit.name}">
					<img src={props.hit.flag} className="country-img"></img>
					<div className="country">
						<span><img className="country-flag" src={props.hit.flag}></img></span>
						<span className="country-title">{props.hit.name}, {props.hit.capital}</span>
					</div>
        </a>
    );
}
  
Hit.propTypes = {
hit: PropTypes.object.isRequired,
};

const apiKey = "5ae2e3f221c38a28845f05b6d03a8c16da44b986d76a13df718bebe0";

function apiGet(method, query) {
	return new Promise(function(resolve, reject) {
		var otmAPI =
			"https://api.opentripmap.com/0.1/en/places/" +
			method +
			"?apikey=" +
			apiKey;
		if (query !== undefined) {
			otmAPI += "&" + query;
		}
		fetch(otmAPI)
			.then(response => response.json())
			.then(data => resolve(data))
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});
	});
}


