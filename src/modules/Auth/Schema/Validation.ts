import * as Yup from "yup"

// Login Schema
export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Слишком короткое имя!")
    .max(50, "Слишком длинное имя!")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(8, "Пароль должен содержать не менее 8 символов")
    .required("Обязательное поле"),
})
