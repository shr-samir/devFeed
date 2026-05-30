import type React from "react";
import { Text as RNText, type TextStyle } from "react-native";
import { colors, fontSize } from "@/shared/constants/theme";

type Variant = "heading" | "body" | "caption";

type Props = {
	variant?: Variant;
	children: React.ReactNode;
	style?: TextStyle;
	onPress?: () => void;
};

export default function Text({
	variant = "body",
	children,
	style,
	onPress,
}: Props) {
	return (
		<RNText style={[styles[variant], style]} onPress={onPress}>
			{children}
		</RNText>
	);
}

const styles: Record<Variant, TextStyle> = {
	heading: {
		fontSize: fontSize.xl,
		color: colors.text.foreground,
		fontWeight: "700",
	},
	body: {
		fontSize: fontSize.md,
		color: colors.text.primary,
		fontWeight: "400",
	},
	caption: {
		fontSize: fontSize.sm,
		color: colors.text.secondary,
		fontWeight: "400",
	},
};
