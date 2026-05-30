import {
	ActivityIndicator,
	StyleSheet,
	TouchableOpacity,
	type ViewStyle,
} from "react-native";
import { colors, radius, spacing } from "@/shared/constants/theme";

type Variant = "primary" | "secondary" | "danger" | "ghost";

type Props = {
	variant?: Variant;
	loading?: boolean;
	disabled?: boolean;
	onPress: () => void;
	children?: React.ReactNode;
	style?: ViewStyle;
};

export default function Button({
	variant = "primary",
	loading,
	disabled,
	onPress,
	children,
	style,
}: Props) {
	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled || loading}
			style={[
				styles.base,
				variantStyles[variant],
				(disabled || loading) && styles.disabled,
				style,
			]}
		>
			{loading ? <ActivityIndicator color={colors.text.primary} /> : children}
		</TouchableOpacity>
	);
}

const variantStyles: Record<Variant, ViewStyle> = {
	primary: { backgroundColor: colors.primary },
	secondary: { backgroundColor: colors.secondary },
	danger: { backgroundColor: colors.danger },
	ghost: { backgroundColor: "transparent" },
};

const styles = StyleSheet.create({
	base: {
		padding: spacing.md,
		borderRadius: radius.md,
		alignItems: "center",
		justifyContent: "center",
	},
	label: { fontWeight: "600", color: colors.text.primary },
	disabled: { opacity: 0.5 },
});
