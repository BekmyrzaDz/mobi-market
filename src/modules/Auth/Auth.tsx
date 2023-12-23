import { ChangeEvent, useState } from "react"
import { Form, Formik } from "formik"
import clsx from "clsx"
import { eye } from "../../assets"
import { eyeDisable } from "../../assets"
import styles from "./Auth.module.scss"
import { Button, Input } from "../../components"
import { loginState } from "./State/State"
import { loginSchema } from "./Schema/Validation"
import { ILogin } from "./types"
import { useAppDispatch } from "../../hooks/redux"
import { login } from "./redux/asyncActions"
import { Link } from "react-router-dom"

export const Auth = () => {
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword(!showPassword)

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  function onSubmit(values: ILogin) {
    dispatch(login(values))
  }

  return (
    <div className={styles.auth}>
      <div className={styles.authBg}></div>
      <div className={styles.authForm}>
        <Formik
          initialValues={loginState}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          <div className={styles.formWrapper}>
            <Form className={styles.form}>
              <Input
                className={clsx(styles.input)}
                name="username"
                type="text"
                label="Имя пользователя"
                placeholder="Имя пользователя"
                username={username}
                inputValue={username}
                onChangeHandle={handleUsernameChange}
              />
              <Input
                className={clsx(styles.passInput)}
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                passwordIcon={showPassword ? eye : eyeDisable}
                toggleShowPassword={toggleShowPassword}
                label="Пароль"
                placeholder="Пароль"
                password={password}
                inputValue={password}
                onChangeHandle={handlePasswordChange}
              />
              <Link className={styles.forgotPassLink} to={"/forgot-password"}>
                Забыли пароль
              </Link>
              <Button className={styles.loginButton}>Войти</Button>
              <Button className={styles.signUpButton}>
                <Link to={"/sign-up"}>Зарегистрироваться</Link>
              </Button>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  )
}
