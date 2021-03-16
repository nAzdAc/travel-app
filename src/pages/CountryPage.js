import React, { useEffect, useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ImageLarge } from '../components/ImageLarge';
import { H1 } from '../components/H1';
import { TextMedium } from '../components/TextMedium';
import { TextColor } from '../components/TextColor';
import data from '../data';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

const CountryStyled = styled.div``;
const RatingWrapperStyled = styled.div`display: flex;`;
const AddInfoWrapperStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const WeatherWrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
`;

const getResource = async (url) => {
	const res = await axios.get(`${url}`);
	return res.data;
};

const getWeatherApi = (cityName) =>
	`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d24b900fdfd48da2c4f4dcae7fc4fb18`;

const getWeatherIcon = (name) => `http://openweathermap.org/img/w/${name}.png`;

export const CountryPage = ({ name }) => {
	const [ countryWeather, setCountryWeather ] = useState({});
	const { loading, request } = useHttp();
	const { token } = useContext(AuthContext)

	const countryData = data.find((c) => c.name === name);
	const countryTitle = `${countryData.name}, ${countryData.capital}`;
	const countryDescription = countryData.description;

	// useEffect(() => {
	// 	let mounted = true;
	// 	console.log(countryData)
	// 	getResource(getWeatherApi(countryData.capital)).then((data) => {
	// 		if (mounted) {
	// 			setCountryWeather((prev) => ({ ...prev, data }));
	// 			console.log(countryWeather)
	// 			console.log(data)
	// 		}
	// 		console.log(countryWeather)
	// 	});
	// 	return () => (mounted = false);
	// }, []);
  
  const fetchWeather = useCallback(
		async () => {
      console.log('feactWeather')
			try {
				const data = await request(`http://localhost:8080/country?country=${countryData.name}&capital=${countryData.capital}`, 'GET', null, {
					Authorization: `Bearer ${token}`
				});
				console.log(data)
				const {wind, pressure, temperature, humidity, altText, icon } = data.weather
				console.log(data.weather)
				setCountryWeather(data)
			} catch (e) {}
		},
		[ token, request ]
	);

  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])

	return (
		<CountryStyled>
			<Header />
			<ImageLarge url={countryData.imageUrl} />
			<RatingWrapperStyled>
				<H1 text={countryTitle} />
				<div>rating</div>
			</RatingWrapperStyled>
			<TextMedium text={countryDescription} />
			<AddInfoWrapperStyled>
				<WeatherWrapperStyled>
					<div>
						{/* <img alt={countryWeather.weather[0].main} src={getWeatherIcon(countryWeather.weather[0].icon)} /> */}
					</div>
					{/* <TextColor text={`Temp: ${countryWeather.main.temp} °F`} /> */}
					{/* <TextColor text={`Wind: ${countryWeather.wind.speed} mph`} /> */}
				</WeatherWrapperStyled>
				<WeatherWrapperStyled>
					<TextColor text="0.84 EUR" />
					<TextMedium text="for 1 USD" />
				</WeatherWrapperStyled>
				<WeatherWrapperStyled>
					<TextColor text={new Date().toLocaleTimeString()} />
					<TextColor text={new Date().toLocaleDateString()} />
					<TextMedium text={countryData.capital} />
				</WeatherWrapperStyled>
			</AddInfoWrapperStyled>
			<Footer />
		</CountryStyled>
	);
};
