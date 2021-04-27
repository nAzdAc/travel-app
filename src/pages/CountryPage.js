import React, { useEffect, useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { HeaderCountry } from '../components/HeaderCountry';
import { ImageLarge } from '../components/ImageLarge';
import { H1 } from '../components/H1';
import { TextColor } from '../components/TextColor';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';
import { routes } from '../utils/routes';
import { useParams } from 'react-router-dom';
import { H2 } from '../components/H2';
import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';
import '../../src/map.css';
import { SimpleSlider } from '../components/Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../src/slider.css';
import { CountryVideo } from '../components/video';
import moment from 'moment';
import { useDict } from '../hooks/useDict';

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

const WeatherWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
`;

const RateStyled = styled.p`
	font-size: 20px;
	font-weight: bold;
	font-style: italic;
	color: #ff6b35;
	margin: 5px 0;
`;

let dateRegexp = /[+|-]\d\d:\d\d/;

const apiKey = '5ae2e3f221c38a28845f05b6d03a8c16da44b986d76a13df718bebe0';

export const CountryPage = (props) => {
	const { name, capital, code } = useParams();
	const [ countryWeather, setCountryWeather ] = useState({});
	const [ attractionsList, setAttractionsList ] = useState([]);
	const [ countryRate, setCountryRate ] = useState({});
	const [ imageUrl, setImageUrl ] = useState('');
	const [ timeZone, setTimeZone ] = useState('UTC+03:00');
	const [ time, setTime ] = useState(moment());
	const { request } = useHttp();
	const { token } = useContext(AuthContext);
	const [ coordinate, setCoordinate ] = useState({ lat: 55.75, lon: 37.57 });
	const countryTitle = `${name}, ${capital}`;
	const getTranslation = useDict();

	const fetchWeather = useCallback(
		async () => {
			try {
				const data = await request(
					`${routes.country}?country=${name}&capital=${capital}&currencyCode=${code}`,
					'GET',
					null,
					{
						Authorization: `Bearer ${token}`
					}
				);
				console.log(data);
				setTimeZone(data.timeZone.match(dateRegexp)[0]);
				setImageUrl(data.imageUrl);
				setCountryWeather(data.weather);
				setCountryRate(data.currency);
			} catch (e) {}
		},
		[ token, request, capital, code, name ]
	);

	const firstLoad = useCallback(
		async () => {
			let attractionsId = [];
			const data = await apiGet(
				'radius',
				`radius=1000&limit=${3}&offset=${0}&lon=${coordinate.lon}&lat=${coordinate.lat}&rate=2&format=json`
			);
			const promisesArr = data.map((item) =>
				apiGet('xid/' + item.xid).then((data) => {
					attractionsId.push(data);
				})
			);
			Promise.all(promisesArr).then(() => {
				setAttractionsList(attractionsId);
			});
		},
		[ coordinate.lon, coordinate.lat ]
	);

	const fetchCapitalCoordinate = useCallback(
		async () => {
			apiGet('geoname', 'name=' + capital).then(function(data) {
				if (data.status === 'OK') {
					setCoordinate({ lat: data.lat, lon: data.lon });
					firstLoad();
				}
			});
		},
		[ capital, firstLoad ]
	);
	useEffect(
		() => {
			fetchCapitalCoordinate();
		},
		[ fetchCapitalCoordinate ]
	);

	useEffect(
		() => {
			fetchWeather();
		},
		[ fetchWeather ]
	);

	useEffect(() => {
		setInterval(() => {
			setTime(moment());
		}, 1000);
		return () => {
			clearInterval();
		};
	}, []);

	return (
		<CountryStyled>
			<HeaderCountry />
			<ImageLarge url={imageUrl} />
			<RatingWrapperStyled>
				<H1 text={countryTitle} />
			</RatingWrapperStyled>
			<CountryVideo country={name} />
			<AddInfoWrapperStyled>
				<WeatherWrapperStyled>
					<div className="weather-icon-wrap">
						<img
							alt={countryWeather.altText}
							src={countryWeather.weatherIconURL || 'http://openweathermap.org/img/w/03d.png'}
						/>
					</div>
					<TextColor text={countryWeather.temperature} />
					<TextColor text={countryWeather.wind} />
					<TextColor text={countryWeather.pressure} />
					<TextColor text={countryWeather.humidity} />
				</WeatherWrapperStyled>
				<WeatherWrapperStyled>
					<RateStyled>{countryRate.BYN}</RateStyled>
					<RateStyled>{countryRate.EUR}</RateStyled>
					<RateStyled>{countryRate.USD}</RateStyled>
				</WeatherWrapperStyled>
				<WeatherWrapperStyled>
					<TextColor text={time.utcOffset(`${timeZone}`).format('DD.MM.YYYY HH:mm:ss')} />
				</WeatherWrapperStyled>
			</AddInfoWrapperStyled>
			<H2 text={getTranslation('attractions')} />
			<SimpleSlider attractions={attractionsList} />
			<H2 text={getTranslation('location')} />
			<YMaps>
				<div className="map-conteiner">
					<Map className="map" defaultState={{ center: [ coordinate.lat, coordinate.lon ], zoom: 9 }}>
						<Placemark geometry={[ coordinate.lat, coordinate.lon ]} />
						<FullscreenControl />
					</Map>
				</div>
			</YMaps>
			<Footer />
		</CountryStyled>
	);
};

function apiGet(method, query) {
	return new Promise(function(resolve, reject) {
		var otmAPI = 'https://api.opentripmap.com/0.1/en/places/' + method + '?apikey=' + apiKey;
		if (query !== undefined) {
			otmAPI += '&' + query;
		}
		fetch(otmAPI).then((response) => response.json()).then((data) => resolve(data)).catch(function(err) {
			console.log('Fetch Error :-S', err);
		});
	});
}
