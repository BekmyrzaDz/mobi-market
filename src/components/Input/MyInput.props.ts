import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  name: string
  icon?: string
  passwordIcon?: string
  toggleShowPassword?: () => void
}
