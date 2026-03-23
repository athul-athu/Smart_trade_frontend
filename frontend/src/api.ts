import axios from 'axios';

// Deployed backend: https://smart-trade-backend-o6eq.onrender.com
// In dev, set VITE_API_BASE_URL=http://127.0.0.1:8000 to use local backend
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'https://smart-trade-backend-o6eq.onrender.com';

axios.defaults.baseURL = API_BASE;
