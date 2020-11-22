export const authReducer = (state, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return {
				...state,
				logged_in: true,
				token: action.token,
			};
		case 'USER_LOGOUT':
			return {
				...state,
				logged_in: false,
				token: null,
			};
		default:
			break;
	}
};
