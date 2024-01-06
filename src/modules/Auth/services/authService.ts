import axios from "../../../api/axios"
import { ILogin, IPhone, IUser, IUserId } from "../types/index"

// Login user
const login = async (userData: ILogin): Promise<IUser> => {
  const response = await axios.post("/users/login/", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

// Phone number
const phone = async (userData: IPhone): Promise<IUserId> => {
  const response = await axios.post("/users/forgot-password/", userData)

  if (response.data) {
    localStorage.setItem("id", JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  login,
  phone,
}

export default authService
