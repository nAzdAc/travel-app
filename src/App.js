import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import { Country } from './pages/Country';
import 'materialize-css';
import { AuthPage } from './pages/AuthPage';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path={'/'} exact component={AuthPage} />
					<Route path={'/main'} component={Main} />
          <Route path={'/country'} component={() => <Country name="Italy"/>} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
