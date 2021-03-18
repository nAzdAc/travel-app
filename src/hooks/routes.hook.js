import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AuthPage } from '../pages/AuthPage';
import { CountryPage } from '../pages/CountryPage'

export const useRoutes = (isAuthenticated) => {
	if (isAuthenticated) {
		return (
			<Switch>
				<Route path="/main" exact>
					<MainPage />
				</Route>
				<Route path="/country/:name/:capital&:code">
					<CountryPage />
				</Route>
				<Redirect to="/main" />
			</Switch>
		);
	}

	return (
		<Switch>
			<Route path="/" exact>
				<AuthPage />
			</Route>
			<Redirect to="/" />
		</Switch>
	);
};
