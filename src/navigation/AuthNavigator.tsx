import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { AuthStackParams } from "./navigation.types";

const LoginScreen = () => (
	<SafeAreaView>
		<Text>Login</Text>
	</SafeAreaView>
);
const RegisterScreen = () => (
	<View>
		<Text>Register</Text>
	</View>
);

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
}
