import axios from "../../../api/axios"
import { ICheckUser, IRegister, IUser } from "../types/index"

// Register user
const register = async (userData: IRegister): Promise<IUser> => {
  const response = await axios.post("/users/register/", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

// Check user
const checkUser = async (userData: ICheckUser): Promise<ICheckUser> => {
  const response = await axios.post("/users/check-user/", userData)

  return response.data
}

const authService = {
  register,
  checkUser,
}

export default authService
