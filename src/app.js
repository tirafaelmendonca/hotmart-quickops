import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Routes from './routes';
import { TopBar, WorkSpace } from './Components';

const App = () => {
	return (
		<div className='app'>
			<TopBar />
			<BrowserRouter>
				<Switch>
					<WorkSpace>
						{Routes.map((route, index) => {
							return <Route key={index} path={route.path} exact component={route.component} />;
						})}
						<Route exact path='/' render={() => <Redirect to='/panel/solicitation' />} />
					</WorkSpace>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
