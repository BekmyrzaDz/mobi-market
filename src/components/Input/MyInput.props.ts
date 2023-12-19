import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  name: string
  username?: string
  password?: string
  inputValue?: string
  onChangeHandle?: any
  icon?: string
  passwordIcon?: string
  toggleShowPassword?: any
}
