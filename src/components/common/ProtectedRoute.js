import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function ProtectedRoute({ component: Component, ...rest }) {
	const { authData } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (
					authData.loggedIn &&
					Date.now() / 1000 < authData.tokenExpiry
				)
					return <Component {...props} />;
				else return <Redirect to='/' />;
			}}
		/>
	);
}

export default ProtectedRoute;
