import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "@/shared/hooks/hooks.redux";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator() {
	const token = useAppSelector((state) => state.auth.token);

	return (
		<NavigationContainer>
			{!token ? <AuthNavigator /> : <AppNavigator />}
		</NavigationContainer>
	);
}
