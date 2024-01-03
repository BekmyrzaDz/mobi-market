// Register
export interface IRegister {
  username: string
  email: string
  password: string
  confirm_password: string
}

// Login
export interface ICheckUser {
  username: string
  email: string
}

// Register (register)
export interface IUser {
  id: number
  email: string
  username: string
  password: string
  confirmPassword: string
}

// Redux register state
export interface IRegisterState {
  user: IUser | null
  checkUser: ICheckUser | null
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
