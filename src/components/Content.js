import data from '../data';
import { CountryInfo } from './CountryInfo';
import { H1 } from './H1'
import { ImageLarge } from './ImageLarge';

const france = data.find((c) => c.name === 'France');
const title = 'Find your country';

const Content = () => (
	<main className="main">
		<H1 text={title}></H1>
		<ImageLarge url={france.countryImg}/>
		<CountryInfo countryFlag={france.countryFlag} country={france.country} capital={france.capital} />
		<div className="card__medium__wrapper">
			<div className="card__medium" />
			<div className="card__medium" />
		</div>
	</main>
);

export default Content;
