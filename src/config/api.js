const baseURL = 'http://localhost:3001';

export const api = {
	login: `${baseURL}/auth/login`,
	register: `${baseURL}/auth/register`,
	getUser: (id) => `${baseURL}/user/${id}`,
	getFeed: (id, page) => `${baseURL}/user/${id}/feed?page=${page}`,
	createChallenge: `${baseURL}/challenge`,
};
