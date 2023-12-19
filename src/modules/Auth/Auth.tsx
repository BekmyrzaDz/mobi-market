import { ChangeEvent, useState } from "react"
import { Form, Formik } from "formik"
import clsx from "clsx"
import { eye } from "../../assets"
import styles from "./Auth.module.scss"
import { Input } from "../../components"
import { loginState } from "./State/State"
import { loginSchema } from "./Schema/Validation"

export const Auth = () => {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  // function onSubmit(values: ILogin) {
  //   dispatch(login(values))
  // }
  function onSubmit() {
    console.log("Request")
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
                // passwordIcon={eye}
                label="Имя пользователя"
                placeholder="Имя пользователя"
                username={username}
                inputValue={username}
                onChangeHandle={handleUsernameChange}
              />
              <Input
                className={clsx(styles.passInput)}
                name="password"
                type="password"
                id="password"
                // passwordIcon={eye}
                label="Пароль"
                placeholder="Пароль"
                password={password}
                inputValue={password}
                onChangeHandle={handlePasswordChange}
              />
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  )
}
