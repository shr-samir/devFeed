import type { User } from "@/shared/types/user";

export type ApiError = {
	status: number;
	message: string;
};

export type AuthResponse = {
	user: User;
	token: string;
};
