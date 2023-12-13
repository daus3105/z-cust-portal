import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Users } from "@/app/api/types";

const initialUsersState: Users = {
  users: []
}

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    setUsers: (state, action: PayloadAction<Users>) => {
      state.users = action.payload.users;
    },
    sortBy: (state, action: PayloadAction<[]>) => {

    }
  },
})

export const { setUsers, sortBy } = usersSlice.actions