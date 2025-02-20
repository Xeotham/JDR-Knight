import axios from 'axios';

const API_BASE_URL = 'https://knight-jdr-systeme.fr/fr/api';

// Fetch modules from the external API
export const fetchModules = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/module`);
		return response.data;
	} catch (error) {
		console.error('Error fetching modules:', error);
		throw error;
	}
};

// Fetch weapons from the external API
export const fetchWeapons = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/weapons`);
		return response.data;
	} catch (error) {
		console.error('Error fetching weapons:', error);
		throw error;
	}
};

// Fetch armors from the external API
export const fetchArmors = async () => {
	try {
		const response = await axios.get(`${API_BASE_URL}/armors`);
		return response.data;
	} catch (error) {
		console.error('Error fetching armors:', error);
		throw error;
	}
};