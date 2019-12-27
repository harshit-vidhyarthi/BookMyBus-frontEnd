import axios from "axios";

const SERVER_URL = "http://localhost:8080/";
axios.defaults.baseURL = SERVER_URL;

export const getIsLogged = () => localStorage.getItem("isLogged");

export const saveIsLogged = isLogged => localStorage.setItem("isLogged", isLogged);

export const removeIsLogged = () => localStorage.removeItem("isLogged");

export const getJourneys = payload => axios.post(`/bus/detail/`, payload);
export const getCityList = () => axios.get(`/bus/cities/`);
export const userSignup = payload => {
	axios.post(`/user/signup/`, payload);
	saveIsLogged(true);
}

export const userLogin = payload => {
	return axios.post(`/user/login/`, payload);
}

export const userLogout = payload => {
	axios.get(`/user/logout/`);
	removeIsLogged();
}

export const isAuthed = () => {
  return getIsLogged();
};