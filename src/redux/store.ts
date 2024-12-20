import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import testSlice from "./slices/testSlice";
import themeSlice from "./slices/themeSlice";
import homeSlice from "./slices/homeSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["themeReducer"],
  blacklist: ["testReducer"],
};

const reducers = combineReducers({
  testReducer: testSlice,
  themeReducer: themeSlice,
  homeReducer: homeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
          "persist/REGISTER",
        ],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
