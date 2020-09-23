import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Routes from '../App/routes';
import Breadcrumbs from '../Components/Breadcrumbs';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Breadcrumbs />
				{Routes.map((route, index) => {
					return <Route key={index} path={route.path} exact component={route.component} />;
				})}
				<Redirect to='/panel/solicitation' />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
