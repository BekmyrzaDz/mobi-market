import { useState } from "react"
import { Form, Formik } from "formik"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { eye } from "../../../assets"
import { eyeDisable } from "../../../assets"
import styles from "./Login.module.scss"
import { Button, Input } from "../../../components"
import { loginState } from "../State/State"
import { loginSchema } from "../Schema/Validation"
import { ILogin } from "../types"
import { useAppDispatch } from "../../../hooks/redux"
import { login } from "../redux/asyncActions"

export const Login = () => {
  const dispatch = useAppDispatch()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const toggleShowPassword = (): void => setShowPassword(!showPassword)

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
          enableReinitialize={true}
          validateOnChange={false}
        >
          {({ isValid, errors, touched, handleSubmit }) => (
            <Form className={styles.form} onSubmit={handleSubmit}>
              <Input
                className={clsx(styles.usernameInput)}
                name="username"
                type="text"
                label="Имя пользователя"
                placeholder="Имя пользователя"
                error={errors.username as string}
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
                error={errors.password as string}
              />
              <Link className={styles.forgotPassLink} to={"/forgot-password"}>
                Забыли пароль
              </Link>
              <Button
                className={clsx({
                  [styles.loginDefaultButton]: true,
                  [styles.loginButton]:
                    !errors.username &&
                    !errors.password &&
                    touched.username &&
                    touched.password,
                })}
                type="submit"
                disabled={!isValid}
              >
                Войти
              </Button>
              <Link className={styles.signUpLink} to={"/sign-up"}>
                <Button className={styles.signUpButton}>
                  Зарегистрироваться
                </Button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
