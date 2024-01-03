import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { checkUser, register } from "./asyncActions"
import { ICheckUser, IRegisterState, IUser } from "../types/index"

// Get user from localStorage
const userString = localStorage.getItem("user")
let user
if (userString !== null) {
  user = JSON.parse(userString) as IUser
}

const initialState: IRegisterState = {
  user: user ? user : null,
  checkUser: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
}

const registerSlice = createSlice({
  name: "register",
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
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.user = null
      })
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        checkUser.fulfilled,
        (state, action: PayloadAction<ICheckUser>) => {
          state.isLoading = false
          state.isSuccess = true
          state.checkUser = action.payload
        }
      )
      .addCase(checkUser.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.checkUser = null
      })
  },
})

export const { reset } = registerSlice.actions
export default registerSlice.reducer
