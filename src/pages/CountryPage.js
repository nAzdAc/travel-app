import React, { useEffect, useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { HeaderCountry } from '../components/HeaderCountry';
import { ImageLarge } from '../components/ImageLarge';
import { H1 } from '../components/H1';
import { TextMedium } from '../components/TextMedium';
import { TextColor } from '../components/TextColor';
import data from '../data';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import {routes} from '../utils/routes'
import { useParams } from 'react-router-dom';
import { H2 } from '../components/H2';
import { YMaps,Map } from 'react-yandex-maps';
import '../../src/map.css';

const CountryStyled = styled.div``;
const RatingWrapperStyled = styled.div`display: flex;`;
const AddInfoWrapperStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const YMapsStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const WeatherWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
  margin-bottom: 10px;
`;

const RateStyled = styled.p`
	font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: #FF6B35;
  margin: 5px 0;
`;

const apiKey = "5ae2e3f221c38a28845f05b6d03a8c16da44b986d76a13df718bebe0";

export const CountryPage = (props) => {
	const {name} = useParams();
	const [ countryWeather, setCountryWeather ] = useState({});
  const [ countryRate, setCountryRate ] = useState({});
	const [countryMainInfo, setCountryMainInfo] = useState({});
	const { loading, request } = useHttp();
	const { token } = useContext(AuthContext)

	const countryData = data.find((c) => c.name === name);
	const countryTitle = `${countryData.name}, ${countryData.capital}`;
	const countryDescription = countryData.description;

	let lon = 0;
	let lat = 0;

  const fetchWeather = useCallback(
		async () => {
			try {
				const data = await request(`${routes.country}?country=${countryData.name}&capital=${countryData.capital}&currencyCode=${countryData.currency}`, 'GET', null, {
					Authorization: `Bearer ${token}`
				});
				setCountryWeather(data.weather);
        setCountryRate(data.currency);
			} catch (e) {}
		},
		[ token, request ]
	);
	const fetchCountriMainInfo = async () => {
    return await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then(response => response.json())
      .then(data => {
				setCountryMainInfo(data[0]) 
        console.log(countryMainInfo)
       });}

	

	const fetchCapitalCoordinate = async () => {
		apiGet("geoname", "name=" + countryMainInfo.capital).then(function(data) {
			let message = "Name not found";
			if (data.status === "OK") {
				lon = data.lon;
				lat = data.lat;
				console.log(data)
			}
			// firstLoad()
		});
	}

  useEffect(() => {
		fetchCountriMainInfo()
    fetchWeather()
		fetchCapitalCoordinate()
		

  }, [fetchWeather, name])

	return (
		<CountryStyled>
			<HeaderCountry />
			<ImageLarge url={countryData.imageUrl} />
			<RatingWrapperStyled>
				<H1 text={countryTitle} />
				<div>rating</div>
			</RatingWrapperStyled>
			<TextMedium text={countryDescription} />
			<AddInfoWrapperStyled>
				<WeatherWrapperStyled>
					<div>
						<img alt={countryWeather.altText} src={countryWeather.icon} />
					</div>
					<TextColor text={countryWeather.temperature} />
					<TextColor text={countryWeather.wind} />
				</WeatherWrapperStyled>
				<WeatherWrapperStyled>
					<RateStyled>{countryRate.BYN}</RateStyled>
					<RateStyled>{countryRate.EUR}</RateStyled>
          <RateStyled>{countryRate.USD}</RateStyled>
				</WeatherWrapperStyled>
				<WeatherWrapperStyled>
					<TextColor text={new Date().toLocaleTimeString()} />
					<TextColor text={new Date().toLocaleDateString()} />
          <RateStyled>{countryData.capital}</RateStyled>
				</WeatherWrapperStyled>
			</AddInfoWrapperStyled>
			<H2 text='Расположение'></H2>
			<YMaps>
      <div className="map-conteiner">
        <Map className="map" defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </div>
    </YMaps>
			<Footer />
		</CountryStyled>
	);
};

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
