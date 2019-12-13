import axios from "axios";

const SERVER_URL = "http://localhost:8080/";
axios.defaults.baseURL = SERVER_URL;

export const getJourneys = payload => axios.post(`/bus/detail/`, payload);
export const getCityList = () => axios.get(`/bus/cities/`);
