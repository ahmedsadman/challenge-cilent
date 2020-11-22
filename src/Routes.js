import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './components/common/Topbar';
import Auth from './components/Auth/Auth';
import Feed from './components/Feed/Feed';

function Routes() {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path='/auth' component={Auth} exact />
				<Route path='/feed' component={Feed} exact />
			</Switch>
		</Router>
	);
}

export default Routes;
