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
      if (error instanceof AxiosError) {
        toast.error("Неверный логин или пароль")
        return thunkAPI.rejectWithValue(error.message)
      }
      throw error
    }
  }
)

// Check User Action
export const checkUser = createAsyncThunk<
  ILogin,
  ILogin,
  { rejectValue: string }
>("auth/checkUser", async (userData: ILogin, thunkAPI) => {
  try {
    const response = await authService.checkUser(userData)
    if (response) {
      toast.error("Данный пользователь уже зарегистрирован")
    }
    return response
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message)
    }
    throw error
  }
})
