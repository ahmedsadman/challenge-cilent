const baseURL = 'http://localhost:3001';

export const api = {
	login: `${baseURL}/auth/login`,
	register: `${baseURL}/auth/register`,
	getUser: (id) => `${baseURL}/user/${id}`,
	getFeed: (id, page) => `${baseURL}/user/feed?page=${page}`,
	createChallenge: `${baseURL}/challenge`,
	getChallenge: (id) => `${baseURL}/challenge/${id}`,
	getChallengeSubmissions: (id) => `${baseURL}/challenge/${id}/submissions`,
	createChallengeSubmission: (id) => `${baseURL}/challenge/${id}/submissions`,
};
