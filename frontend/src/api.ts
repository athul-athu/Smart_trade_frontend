import axios from 'axios';

// Use deployed backend directly for all environments.
const API_BASE = 'https://smart-trade-backend-o6eq.onrender.com';
axios.defaults.baseURL = API_BASE;
axios.defaults.withCredentials = true;
