import { toast } from "react-toastify"
import { createAsyncThunk } from "@reduxjs/toolkit"
import authService from "../services/authService"
import { AxiosError } from "axios"
import { IRegister, IUser } from "../types/index"

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
