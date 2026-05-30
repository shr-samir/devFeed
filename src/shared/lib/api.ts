import axios, { AxiosError } from "axios";
import { store } from "@/store";
import { logout } from "@/store/slices/auth.slice";
import { env } from "./env";

const api = axios.create({
	baseURL: env.apiUrl,
	timeout: 30000,
});

api.interceptors.request.use((config) => {
	const { auth } = store.getState();
	const token = auth.token;

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error instanceof AxiosError && error.response?.status === 401) {
			store.dispatch(logout());
		}

		return Promise.reject(error);
	},
);

export default api;
