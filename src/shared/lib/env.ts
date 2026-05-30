if (!process.env.EXPO_PUBLIC_API_URL) {
	throw new Error("EXPO_PUBLIC_API_URL is not set");
}

export const env = {
	apiUrl: process.env.EXPO_PUBLIC_API_URL,
};
