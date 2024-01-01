import * as Yup from "yup"

// Register Schema
const usernameRules = /^[a-zA-Zа-яА-Я\s]+$/
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Слишком короткое имя!")
    .max(50, "Слишком длинное имя!")
    .matches(usernameRules, { message: "Неверный логин или почта" })
    .required("Обязательное поле"),
  email: Yup.string()
    .email("Неверный логин или почта")
    .required("Обязательное поле"),
  password: Yup.string()
    .min(8, "Пароль должен содержать не менее 8 символов")
    .matches(passwordRules, {
      message: "Пожалуйста создайте более надежный пароль",
    })
    .required("Обязательное поле"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
    .required("Обязательное поле"),
})
