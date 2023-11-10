import axios from "axios";

const apiPort = "5000";
const localApi = `http://localhost:${apiPort}/api`;
const externaApi = null;

const api = axios.create({
    baseURL: localApi
});

export default api;