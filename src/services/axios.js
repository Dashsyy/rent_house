import Vue from 'vue';
import axios from 'axios';
import { handleError } from './handleError.js';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
class Request {
	async post({ url, data }) {
		return this._request({ url, method: 'post', data });
	}

	async get({ url, params }) {
		return this._request({ url, method: 'get', params });
	}

	async put({ url, data }) {
		return this._request({ url, method: 'put', data });
	}

	async delete({ url, data }) {
		return this._request({ url, method: 'delete', data });
	}

	async _request({ url, method, params = null, data = null, headers }) {		
		if (!headers) {
			headers = {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-APP-LANGUAGE': Vue.$cookies.get('local-flexible'),
				'X-SITE-ID' : Vue.$cookies.get('selected_site_id') + ''
			};
		}

		const token = Vue.$cookies.get('token');
		if (token) {
			headers['Authorization'] = `Bearer ${token}`;
		}
		try {
			const response = await axios({
				url,
				method,
				headers,
				data,
				params
			});
			return response;
		} catch (error) {
			const errorResponse = Vue.$cookies.get('error');
			if (errorResponse === 'false' || errorResponse === null) {
				Vue.$cookies.set('error', 'true');
				if (
					!error.status ||
					!error.response ||
					(error.response && typeof error.response.status === 'undefined')
				) {
					handleError(error.response);
				} else {
					handleError(error.response.status);
				}
			}
			setTimeout(() => {
				Vue.$cookies.remove('error');
			}, 3000);
			throw error;
		}
	}
}

export default Request;
