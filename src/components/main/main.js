import './main.css';
import CountryInfo from '../countryInfo/countryInfo';
import data from '../../data';

const france = data.find(c => c.country === 'France');

const main = () => {
  return (
    <main className="main">
        <h1 className="main-title">
            Find your country
        </h1>
        <div className="main__img_big__wrapper">
            <img
                className="img_big"
                src={france.countryImg}
                alt="paris"
            />
        </div>
        <CountryInfo countryFlag={france.countryFlag} country={france.country} capital={france.capital}/>
        <div className="card__medium__wrapper">
            <div className="card__medium">

            </div>
            <div className="card__medium">

            </div>
        </div>
    </main>
  );
}

export default main;
