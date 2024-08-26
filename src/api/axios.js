import axios from 'axios';
// import { APPLICATION_BASE_API } from '../services/ApiEndPoints';

const BASE_URL = "https::www.goole.com";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    // withCredentials: true
});