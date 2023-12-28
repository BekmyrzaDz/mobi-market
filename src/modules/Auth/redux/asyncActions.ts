import { toast } from "react-toastify"
import { createAsyncThunk } from "@reduxjs/toolkit"
import authService from "../services/authService"
import { AxiosError } from "axios"
import { ILogin, IRegister, IUser } from "../types/index"

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

// Register Action
export const register = createAsyncThunk<
  IUser,
  IRegister,
  { rejectValue: string }
>("auth/register", async (userData: IRegister, thunkAPI) => {
  try {
    const response = await authService.register(userData)
    if (response) {
      toast.success("Вы успешно вошли в систему")
    }
    return response
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      toast.error("Неверный логин или почта")
      return thunkAPI.rejectWithValue(error.message)
    }
    throw error
  }
})
