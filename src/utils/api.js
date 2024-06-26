import axios from "axios";

const api = axios.create({
    baseURL: 'https://serviciosgpoptima.io/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export { api }