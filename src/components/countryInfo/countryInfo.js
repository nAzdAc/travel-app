import './countryInfo.css';

const countryInfo = (props) => {
  return (
    <div className="main__country__info">
        <div className="flag__wrapper">
            <img
                className="flag"
                src={props.countryFlag}
                alt={props.country}
            />
        </div>
        <h3 className="country-capital">{`${props.country}, ${props.capital}`}</h3>
    </div>
  );
}

export default countryInfo;
