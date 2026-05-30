// App.tsx
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootNavigator from "@/navigation/RootNavigator";
import { queryClient } from "@/shared/lib/queryClient";
import { persistor, store } from "@/store";

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<QueryClientProvider client={queryClient}>
					<RootNavigator />
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}
