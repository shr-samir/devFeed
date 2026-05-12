export const colors = {
	primary: "#6366f1",
	secondary: "#448085",
	danger: "#ef4444",
	success: "#22c55e",
	bg: {
		default: "#0f0f0f",
		card: "#1a1a1a",
		input: "#242424",
	},
	text: {
		primary: "#f5f5f5",
		secondary: "#9ca3af",
		muted: "#4b5563",
		foreground: "#000",
		background: "#fff",
	},
	border: "#2a2a2a",
} as const;

export const spacing = {
	xs: 4,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 48,
} as const;

export const radius = {
	sm: 6,
	md: 12,
	lg: 20,
	full: 9999,
} as const;

export const fontSize = {
	xs: 11,
	sm: 13,
	md: 15,
	lg: 18,
	xl: 22,
	xxl: 28,
} as const;
