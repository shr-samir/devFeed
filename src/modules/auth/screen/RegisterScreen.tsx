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

export default function RegisterScreen() {
	const dispatch = useAppDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<AuthStackParams>>();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [error, setError] = useState<ApiError | null>(null);

	async function onRegister() {
		if (!email || !password || !username) {
			return setError({
				status: 403,
				message: "All fields are required",
			});
		}
		try {
			const response = await authApi.register(username, email, password);
			const { user, token } = response;
			dispatch(setAuth({ user, token }));
		} catch (error) {
			setError(formatError(error));
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inner}>
				{/* Header */}
				<Text style={styles.title}>Register</Text>
				<Text style={styles.subtitle}>
					Already have an account?{" "}
					<Text
						style={styles.link}
						onPress={() => navigation.navigate("Login")}
					>
						Login
					</Text>
				</Text>

				{/* Inputs */}
				<View style={styles.inputGroup}>
					<TextInput
						style={styles.input}
						value={username}
						onChangeText={setUsername}
						textContentType="username"
						placeholder="Enter your username"
						placeholderTextColor={colors.text.muted}
						autoCapitalize="none"
					/>
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

				{/* Error */}
				{error?.message && <Text style={styles.error}>{error.message}</Text>}

				{/* Login Button */}
				<Button onPress={onRegister}>
					<Text>Register</Text>
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
		gap: spacing.md,
		marginBottom: spacing.sm,
		display: "flex",
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
	error: {
		color: colors.danger,
		fontSize: fontSize.sm,
		marginBottom: spacing.sm,
		textAlign: "center",
	},
});
