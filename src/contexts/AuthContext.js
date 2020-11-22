import React, { createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
	const initialState = {
		logged_in: false,
		token: null,
	};

	const [authData, dispatch] = useReducer(authReducer, initialState, () => {
		const localData = localStorage.getItem('authData');
		return localData ? JSON.parse(localData) : [];
	});

	// persist data
	useEffect(() => {
		localStorage.setItem('authData', JSON.stringify(authData));
	});

	return (
		<AuthContext.Provider value={{ authData, dispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
};
