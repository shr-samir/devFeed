import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import authReducer from "@/store/slices/auth.slice";

const authPersistConfig = {
	key: "auth",
	storage: AsyncStorage,
	whitelist: ["user", "token"],
};

export const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, authReducer),
});
