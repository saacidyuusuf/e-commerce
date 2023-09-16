import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {createStore} from 'redux'
import AppReducer from "../context/AppReducer";

const persistConfig = {
  key: "root", // Key for the root of the state object
  storage,
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };