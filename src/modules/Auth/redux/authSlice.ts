import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { login, phone } from "./asyncActions"
import { IAuthState, IUser, IUserId } from "../types/index"

// Get user from localStorage
const userString = localStorage.getItem("user")
let user
if (userString !== null) {
  user = JSON.parse(userString) as IUser
}

// Get user id from localStorage
const userIdString = localStorage.getItem("id")
let userId
if (userIdString !== null) {
  userId = JSON.parse(userIdString) as IUserId
}

const initialState: IAuthState = {
  user: user ? user : null,
  userId: userId ? userId : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.user = null
      })
      .addCase(phone.pending, (state) => {
        state.isLoading = true
      })
      .addCase(phone.fulfilled, (state, action: PayloadAction<IUserId>) => {
        state.isLoading = false
        state.isSuccess = true
        state.userId = action.payload
      })
      .addCase(phone.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.userId = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
