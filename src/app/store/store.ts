import { configureStore } from "@reduxjs/toolkit";
import { signedUserSlice } from "./features/signedUser/signedUserSlice";
import { usersSlice } from "./features/users/usersSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      signedUser: signedUserSlice.reducer,
      users: usersSlice.reducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
