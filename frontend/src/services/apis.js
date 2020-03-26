import axious from 'axios';

const api = axious.create({
	baseURL: 'http://localhost:3333',
});

export default api;