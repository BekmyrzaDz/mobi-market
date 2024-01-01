// Register
export interface IRegister {
  username: string
  email: string
  password: string
  confirm_password: string
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
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
