import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageReducer";
import menuReducer from "./menuReducer";

const store = configureStore({
  reducer: {
    language: languageReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
