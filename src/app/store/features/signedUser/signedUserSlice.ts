
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type SignedUser } from "@/app/api/types";

const initialSignedUserState: SignedUser = {
  name: '',
  photo: ''
}

export const signedUserSlice = createSlice({
  name: "signedUser",
  initialState: initialSignedUserState,
  reducers: {
    signInUser: (state, action: PayloadAction<SignedUser>) => {
      state.name = action.payload.name;
      state.photo = action.payload.photo;
    },
    signOutUser: (state) => {
      state.name = ''
      state.photo = ''
    }
  },
})

export const { signInUser, signOutUser } = signedUserSlice.actions
