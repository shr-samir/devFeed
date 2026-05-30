import axios from "axios";
import type { ApiError } from "@/shared/types";
import { ERROR_MESSAGE } from "../constants/error-message";

export function formatError(error: unknown): ApiError {
	if (axios.isAxiosError(error)) {
		return {
			status: error.response?.status || 500,
			message: error.response?.data.message || ERROR_MESSAGE.default,
		};
	}

	return {
		status: 500,
		message: ERROR_MESSAGE.unknown,
	};
}
