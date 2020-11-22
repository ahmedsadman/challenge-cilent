import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Logout(props) {
	const { dispatch } = useContext(AuthContext);
	useEffect(() => {
		dispatch({ type: 'USER_LOGOUT' });
		props.history.push('/');
	}, []);

	return null;
}

export default Logout;
