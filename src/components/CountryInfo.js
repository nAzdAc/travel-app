import { H3 } from './H3';

export const CountryInfo = ({ countryFlag, country, capital }) => (
	<div className="main__country__info">
		<div className="flag__wrapper">
			<img className="flag" src={countryFlag} alt={country} />
		</div>
		<H3 text={`${country}, ${capital}`} />
	</div>
);
