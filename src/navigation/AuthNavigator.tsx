import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import LoginScreen from "@/modules/auth/screen/LoginScreen";
import RegisterScreen from "@/modules/auth/screen/RegisterScreen";
import { colors } from "@/shared/constants/theme";
import type { AuthStackParams } from "./navigation.types";

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: colors.bg.default },
				animation: "fade",
			}}
		>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
}
