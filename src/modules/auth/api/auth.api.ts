import api from "@/shared/lib/api";
import { formatError } from "@/shared/lib/api.error";

export const authApi = {
	login: async (email: string, password: string) => {
		try {
			const res = await api.post("/auth/login", { email, password });
			return res.data;
		} catch (error) {
			throw formatError(error);
		}
	},

	register: async (username: string, email: string, password: string) => {
		try {
			const res = await api.post("/auth/register", {
				username,
				email,
				password,
			});
			return res.data;
		} catch (error) {
			throw formatError(error);
		}
	},
};
