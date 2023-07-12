import { configureStore, type ConfigureStoreOptions } from "@reduxjs/toolkit";
import {
  type TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

import { reducer } from "./rootReducer";

const configureStoreDefaultOptions: ConfigureStoreOptions = { reducer };

export const makeReduxStore = (
    options: ConfigureStoreOptions = configureStoreDefaultOptions
) => {
    return configureStore(options);
}

export const reduxStore = configureStore({
    reducer,
})
export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
