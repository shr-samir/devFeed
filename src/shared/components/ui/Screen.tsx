import type React from "react";
import { StyleSheet, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, spacing } from "@/shared/constants/theme";

type Props = {
	children: React.ReactNode;
	style?: ViewStyle;
};

export default function Screen({ children, style }: Props) {
	return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
	screen: { flex: 1, backgroundColor: colors.bg.default, padding: spacing.md },
});
