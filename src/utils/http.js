import axios from 'axios';
import { URL_BASE } from '$/utils/constants';

const api = axios.create({
	baseURL: URL_BASE
});

const httpRequest = async (_method, url, data, config) => {
	try {
		let response = await api({ method: _method, url, data, config });
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export default httpRequest;
