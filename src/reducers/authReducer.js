export const authReducer = (state, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return {
				...state,
				loggedIn: true,
				token: action.token,
				id: action.id,
				username: action.username,
				tokenExpiry: action.tokenExpiry,
			};
		case 'USER_LOGOUT':
			return {
				...state,
				loggedIn: false,
				token: null,
				id: null,
				username: '',
				tokenExpiry: null,
			};
		default:
			break;
	}
};
