import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 8e81a12ec11c6034f0b2694ef6afd1648ac77fb852e3c95c676e6bc7dfc5461b'
	}
});