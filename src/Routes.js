import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Topbar from './components/common/Topbar';
import Auth from './components/Auth/Auth';
import Logout from './components/Auth/Logout';
import Feed from './components/Feed/Feed';
import NewChallenge from './components/Challenge/NewChallenge';
import ChallengeView from './components/Challenge/ChallengeView';

function Routes() {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path='/' component={Auth} exact />
				<Route path='/feed' component={Feed} exact />
				<Route path='/challenge/:id' component={ChallengeView} exact />
				<Route path='/challenge' component={NewChallenge} exact />
				<Route path='/logout' component={Logout} exact />
			</Switch>
		</Router>
	);
}

export default Routes;
