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

		event.preventDefault();
		auth.logout();
		history.push();
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
        <NavLink to={encodeURI(`/country/${props.hit.name}/${props.hit.capital}&${props.hit.currencies[0].code}`)}>
					<img src={props.hit.flag} className="country-img" alt="img"></img>
					<div className="country">
						<span><img className="country-flag" src={props.hit.flag} alt="img"></img></span>
						<span className="country-title">{props.hit.name}, {props.hit.capital}</span>
					</div>
        </NavLink>
    );
}
  
Hit.propTypes = {
hit: PropTypes.object.isRequired,
};

// const spaceToUnderscore = (expresion) =>{
// 	let newExprestion = ''
// 	if (expresion.includes(' ')){;
// 		for (let char of expresion) {
// 			if(char === ' '){
// 				char = '_'
// 			}
// 			newExprestion += char
// 		}
// 		return newExprestion
// 	}else{
// 		return expresion
// 	}
	
// }

// const fetchCountryMainInfo = useCallback(async () => {
  //   return await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCountryMainInfo(data[0]);
  //       console.log(countryMainInfo);
  //     });
  // }, [name]);