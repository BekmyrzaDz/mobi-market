import axios from "../../../api/axios"
import { ILogin, IRegister, IUser } from "../types/index"

// Login user
const login = async (userData: ILogin): Promise<IUser> => {
  const response = await axios.post("/users/login/", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

// Register user
const register = async (userData: IRegister): Promise<IUser> => {
  const response = await axios.post("/users/register/", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  login,
  register,
}

export default authService
