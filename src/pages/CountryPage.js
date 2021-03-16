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
import { routes } from '../utils/routes';

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
  color: #FF6B35;
  margin: 5px 0;
`;

export const CountryPage = ({ name }) => {
	const [ countryWeather, setCountryWeather ] = useState({});
  const [ countryRate, setCountryRate ] = useState({});
	const { loading, request } = useHttp();
	const { token } = useContext(AuthContext)

	const countryData = data.find((c) => c.name === name);
	const countryTitle = `${countryData.name}, ${countryData.capital}`;
	const countryDescription = countryData.description;

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

  useEffect(() => {
    fetchWeather()
  }, [fetchWeather])

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
			<Footer />
		</CountryStyled>
	);
};
