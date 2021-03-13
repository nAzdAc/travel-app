export const CountryInfo = ({ countryFlag, country, capital }) => (
	<div className="main__country__info">
		<div className="flag__wrapper">
			<img className="flag" src={countryFlag} alt={country} />
		</div>
		<h3 className="country-capital">{`${country}, ${capital}`}</h3>
	</div>
);

