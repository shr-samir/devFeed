import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { AuthStackParams } from "@/navigation/navigation.types";
import { Button, Text } from "@/shared/components/ui";
import { colors, fontSize, radius, spacing } from "@/shared/constants/theme";
import { useAppDispatch } from "@/shared/hooks/hooks.redux";
import { formatError } from "@/shared/lib/api.error";
import type { ApiError } from "@/shared/types";
import { setAuth } from "@/store/slices/auth.slice";
import { authApi } from "../api/auth.api";

export default function LoginScreen() {
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<AuthStackParams>>();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<ApiError | null>(null);

	async function onLogin() {
		if (!email || !password) {
			return setError({
				status: 403,
				message: "Invalid Credentials",
			});
		}
		try {
			const response = await authApi.login(email, password);
			const { user, token } = response;
			dispatch(setAuth({ user, token }));
		} catch (error) {
			setError(formatError(error));
		}
	}

	async function onGoogleLogin() {
		console.log("Need to integrate google");
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inner}>
				{/* Header */}
				<Text style={styles.title}>Login</Text>
				<Text style={styles.subtitle}>
					Don't have an account?{" "}
					<Text
						style={styles.link}
						onPress={() => navigation.navigate("Register")}
					>
						Sign Up
					</Text>
				</Text>

				{/* Inputs */}
				<View style={styles.inputGroup}>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={setEmail}
						textContentType="emailAddress"
						placeholder="Enter your email address"
						placeholderTextColor={colors.text.muted}
						keyboardType="email-address"
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						value={password}
						onChangeText={setPassword}
						textContentType="password"
						placeholder="Enter your password"
						placeholderTextColor={colors.text.muted}
						secureTextEntry
					/>
				</View>

				{/* Forgot Password */}
				<View style={styles.row}>
					<Text style={styles.link}>Forgot Password?</Text>
				</View>

				{/* Error */}
				{error?.message && <Text style={styles.error}>{error.message}</Text>}

				{/* Login Button */}
				<Button onPress={onLogin}>
					<Text style={styles.buttonText}>Login</Text>
				</Button>

				{/* Divider */}
				<View style={styles.dividerRow}>
					<View style={styles.dividerLine} />
					<Text style={styles.dividerText}>Or Continue With</Text>
					<View style={styles.dividerLine} />
				</View>

				{/* Google Button */}
				<Button variant="secondary" onPress={onGoogleLogin}>
					<Text>Login with Google</Text>
				</Button>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bg.default,
	},
	inner: {
		flex: 1,
		paddingHorizontal: spacing.lg,
		justifyContent: "center",
	},
	title: {
		fontSize: fontSize.xxl,
		fontWeight: "700",
		color: colors.text.primary,
		textAlign: "center",
		marginBottom: spacing.xs,
	},
	subtitle: {
		fontSize: fontSize.sm,
		color: colors.text.secondary,
		textAlign: "center",
		marginBottom: spacing.xl,
	},
	link: {
		color: colors.primary,
		fontWeight: "600",
	},
	inputGroup: {
		gap: spacing.sm,
		marginBottom: spacing.sm,
	},
	input: {
		backgroundColor: colors.bg.input,
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: radius.md,
		paddingHorizontal: spacing.md,
		paddingVertical: spacing.md,
		fontSize: fontSize.md,
		color: colors.text.primary,
	},
	row: {
		alignItems: "flex-end",
		marginBottom: spacing.lg,
	},
	error: {
		color: colors.danger,
		fontSize: fontSize.sm,
		marginBottom: spacing.sm,
		textAlign: "center",
	},
	button: {
		backgroundColor: colors.primary,
		borderRadius: radius.md,
		paddingVertical: spacing.md,
		alignItems: "center",
		marginBottom: spacing.lg,
	},
	buttonText: {
		color: colors.text.primary,
		fontSize: fontSize.md,
		fontWeight: "700",
	},
	dividerRow: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: spacing.lg,
		gap: spacing.sm,
	},
	dividerLine: {
		flex: 1,
		height: 1,
		backgroundColor: colors.border,
	},
	dividerText: {
		color: colors.text.secondary,
		fontSize: fontSize.sm,
	},
	socialButton: {
		borderWidth: 1,
		borderColor: colors.border,
		borderRadius: radius.md,
		paddingVertical: spacing.md,
		alignItems: "center",
		backgroundColor: colors.bg.card,
	},
	socialButtonText: {
		color: colors.text.primary,
		fontSize: fontSize.md,
		fontWeight: "600",
	},
});
