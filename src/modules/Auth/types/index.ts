// Login
export interface ILogin {
  username: string
  password: string
}

// Phone
export interface IPhone {
  phone: string
}

// User (auth)
export interface IUser {
  first_name: string
  last_name: string
  username: string
  photo: string
  birth_date: string
  phone: string
  email: string
}

// Redux auth state
export interface IAuthState {
  user: IUser | null
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}
