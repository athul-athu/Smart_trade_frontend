import axios from 'axios';

// Production: use relative /api (Vercel rewrites proxy to backend). Dev: use backend URL directly.
const API_BASE = import.meta.env.DEV ? 'https://smart-trade-backend-o6eq.onrender.com' : '';
axios.defaults.baseURL = API_BASE;
axios.defaults.withCredentials = true;
