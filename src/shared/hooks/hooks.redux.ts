import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/index";

export function useAppSelector<T>(selector: (state: RootState) => T): T {
	return useSelector(selector);
}

export function useAppDispatch() {
	return useDispatch();
}
