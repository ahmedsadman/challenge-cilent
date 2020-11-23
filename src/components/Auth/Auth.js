import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../config/api';
import Centered from '../common/Centered';
import Form from './Form';

function Auth(props) {
	const { dispatch, authData } = useContext(AuthContext);

	// check if login is required
	useEffect(() => {
		const { loggedIn, tokenExpiry } = authData;
		const currentTime = Date.now() / 1000;
		if (loggedIn && currentTime < tokenExpiry) props.history.push('/feed');
		else dispatch({ type: 'USER_LOGOUT' });
	}, []);

	const getUser = async (userId) => {
		const response = await axios.get(api.getUser(userId));
		return response.data;
	};

	const loginUser = async (email, password) => {
		try {
			const response = await axios.post(api.login, {
				email,
				password,
			});
			const { access_token } = response.data;
			const decoded = jwt_decode(access_token);
			const user = await getUser(decoded['identity']);

			dispatch({
				type: 'USER_LOGIN',
				logged_in: true,
				token: access_token,
				username: user.name,
				id: user.id,
				tokenExpiry: decoded['exp'],
			});

			props.history.push('/feed');
		} catch (e) {
			alert('User invalid/Unexpected Error');
			console.log(e.response);
		}
	};

	const registerUser = async (name, email, password) => {
		try {
			const response = await axios.post(api.register, {
				name,
				email,
				password,
			});
			console.log(response.data);
			alert('User created. You can login now');
		} catch (e) {
			alert('Unexpected Error occured');
		}
	};

	return (
		<Centered>
			<Form loginUser={loginUser} registerUser={registerUser} />
		</Centered>
	);
}

export default Auth;
