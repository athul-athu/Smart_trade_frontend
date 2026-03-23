import axios from 'axios';

const DEPLOYED_BACKEND = 'https://smart-trade-backend-o6eq.onrender.com';

// Dev: use empty baseURL so Vite proxy (→ deployed backend) handles /api
// Prod: use full URL (no proxy on Vercel)
const API_BASE = import.meta.env.DEV ? '' : DEPLOYED_BACKEND;
// Override: VITE_API_BASE_URL for local backend, e.g. http://127.0.0.1:8000
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL ?? API_BASE;
