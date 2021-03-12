import data from '../data';
import { CountryInfo } from './CountryInfo';

const france = data.find((c) => c.country === 'France');

const Content = () => (
	<main className="main">
		<h1 className="main-title">Find your country</h1>
		<div className="main__img_big__wrapper">
			<img className="img_big" src={france.countryImg} alt="paris" />
		</div>
		<CountryInfo countryFlag={france.countryFlag} country={france.country} capital={france.capital} />
		<div className="card__medium__wrapper">
			<div className="card__medium" />
			<div className="card__medium" />
		</div>
	</main>
);

export default Content;
