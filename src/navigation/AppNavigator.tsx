import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import type { AppTabParams } from "./navigation.types";

const FeedScreen = () => (
	<View>
		<Text>Feed</Text>
	</View>
);
const BookmarksScreen = () => (
	<View>
		<Text>Bookmarks</Text>
	</View>
);
const ProfileScreen = () => (
	<View>
		<Text>Profile</Text>
	</View>
);

const Stack = createBottomTabNavigator<AppTabParams>();

export default function AppNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Feed" component={FeedScreen} />
			<Stack.Screen name="Bookmarks" component={BookmarksScreen} />
			<Stack.Screen name="Profile" component={ProfileScreen} />
		</Stack.Navigator>
	);
}
