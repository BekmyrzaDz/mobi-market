import axios from "axios"
import { ILogin, IUser } from "../types/index"

axios.defaults.baseURL = "http://neobook.online"
const API_URL: string = "/mobi-market/"

// Login user
const login = async (userData: ILogin): Promise<IUser> => {
  const response = await axios.post(API_URL + "login/personal/", userData)

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  login,
}

export default authService
