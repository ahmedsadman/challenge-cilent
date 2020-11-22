import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
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
				<ProtectedRoute path='/feed' component={Feed} exact />
				<ProtectedRoute
					path='/challenge/:id'
					component={ChallengeView}
					exact
				/>
				<ProtectedRoute
					path='/challenge'
					component={NewChallenge}
					exact
				/>
				<ProtectedRoute path='/logout' component={Logout} exact />
			</Switch>
		</Router>
	);
}

export default Routes;
