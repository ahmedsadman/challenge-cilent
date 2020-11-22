const baseURL = 'http://localhost:3001';

export const api = {
	login: `${baseURL}/auth/login`,
	register: `${baseURL}/auth/register`,
	getUser: (id) => `${baseURL}/user/${id}`,
};
