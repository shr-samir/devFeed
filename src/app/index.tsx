import { Button } from "@/shared/components/ui/Button";
import Screen from "@/shared/components/ui/Screen";
import { Text } from "@/shared/components/ui/Text";

export default function App() {
	return (
		<Screen style={{ display: "flex", justifyContent: "center" }}>
			<Text variant="heading">DevFeed</Text>
			<Text variant="caption">Day 1 complete</Text>
			<Button label="Get Started on new application" onPress={() => {}} />
		</Screen>
	);
}
