import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import 'materialize-css';
import { AuthPage } from './pages/AuthPage';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path={'/'} exact component={AuthPage} />
					<Route path={'/main'} component={Main} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
