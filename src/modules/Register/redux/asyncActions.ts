import { toast } from "react-toastify"
import { createAsyncThunk } from "@reduxjs/toolkit"
import authService from "../services/authService"
import { AxiosError } from "axios"
import { ICheckUser, IRegister, IUser } from "../types/index"

// Register Action
export const register = createAsyncThunk<
  IUser,
  IRegister,
  { rejectValue: string }
>("register/register", async (userData: IRegister, thunkAPI) => {
  try {
    const response = await authService.register(userData)
    if (response) {
      toast.success("Вы успешно зарегистрированы")
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

// Check User Action
export const checkUser = createAsyncThunk<
  ICheckUser,
  ICheckUser,
  { rejectValue: string }
>("auth/checkUser", async (userData: ICheckUser, thunkAPI) => {
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
