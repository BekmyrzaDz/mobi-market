import { toast } from "react-toastify"
import { createAsyncThunk } from "@reduxjs/toolkit"
import authService from "../services/authService"
import { AxiosError } from "axios"
import { ILogin, IUser } from "../types/index"

// Login Action
export const login = createAsyncThunk<IUser, ILogin, { rejectValue: string }>(
  "auth/login",
  async (userData: ILogin, thunkAPI) => {
    try {
      const response = await authService.login(userData)
      if (response) {
        toast.success("Вы успешно вошли в систему")
      }
      return response
    } catch (error: unknown) {
      if (typeof error === "string") {
        toast.error(error)
        return thunkAPI.rejectWithValue(error)
      }
      if (error instanceof AxiosError) {
        const message =
          error.response?.data?.detail ||
          (error.response &&
            error.response?.data &&
            error.response?.data?.message) ||
          error.message ||
          error.toString()
        toast.error(message)
        return thunkAPI.rejectWithValue(message)
      }
      throw error
    }
  }
)
