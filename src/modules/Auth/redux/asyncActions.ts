import { toast } from "react-toastify"
import { createAsyncThunk } from "@reduxjs/toolkit"
import authService from "../services/authService"
import { AxiosError } from "axios"
import { ILogin, IPhone, IUser, IUserId } from "../types/index"

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

// Phone Action
export const phone = createAsyncThunk<IUserId, IPhone, { rejectValue: string }>(
  "auth/phone",
  async (userData: IPhone, thunkAPI) => {
    try {
      const response = await authService.phone(userData)
      if (response) {
        toast.success("Номер телефона подтвержден")
      }
      return response
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toast.error("Данный номер телефона не зарегистрирован")
        return thunkAPI.rejectWithValue(error.message)
      }
      throw error
    }
  }
)
