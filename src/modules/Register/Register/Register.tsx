import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"
import clsx from "clsx"
import styles from "./Register.module.scss"
import { Button, Input } from "../../../components"
import { registerState } from "../State/State"
import { registerSchema } from "../Schema/Validation"
import { IRegister } from "../types"
import { useAppDispatch } from "../../../hooks/redux"
import { register } from "../redux/asyncActions"
import { arrowLeft, hugeIcon, eye, eyeDisable } from "../../../assets"

export const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const toggleShowPassword = (): void => setShowPassword(!showPassword)

  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const toggleShowConfirmPassword = (): void =>
    setShowConfirmPassword(!showConfirmPassword)

  const [nextForm, setNextForm] = useState<boolean>(false)
  const toggleNextForm = (): void => setNextForm(!nextForm)

  const navigation = () => navigate(-1)

  function onSubmit(values: IRegister) {
    dispatch(register(values))
  }

  return (
    <div className={styles.register}>
      <div className={styles.registerBg}></div>
      <div className={styles.registerFormWrapper}>
        <div className={styles.registerFormTop}>
          <div className={styles.registerFormTopWrap}>
            <div className={styles.btnWrapper}>
              <Button
                className={styles.arrowBtn}
                onClick={nextForm ? toggleNextForm : navigation}
              >
                <img src={arrowLeft} alt="arrow-left icon" />
              </Button>
              <span>Назад</span>
            </div>
            <h3 className={styles.title}>Регистрация</h3>
          </div>
        </div>
        <div className={styles.registerForm}>
          <Formik
            initialValues={registerState}
            validationSchema={registerSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
            validateOnChange={false}
          >
            {({ isValid, errors, touched, handleSubmit }) => (
              <Form className={styles.form} onSubmit={handleSubmit}>
                {!nextForm ? (
                  <>
                    <Input
                      className={clsx(styles.input)}
                      name="username"
                      type="text"
                      label="Имя пользователя"
                      placeholder="Имя пользователя"
                      error={errors.username}
                    />
                    <Input
                      className={clsx(styles.passInput)}
                      name="email"
                      type="email"
                      id="email"
                      label="Почта"
                      placeholder="Почта"
                      error={errors.email}
                    />
                    <Button
                      className={clsx({
                        [styles.registerDefaultButton]: true,
                        [styles.registerButton]:
                          !errors.username &&
                          touched.username &&
                          !errors.email &&
                          touched.email,
                      })}
                      onClick={toggleNextForm}
                    >
                      Далее
                    </Button>
                  </>
                ) : (
                  <>
                    <div className={styles.formTop}>
                      <img
                        className={styles.icon}
                        src={hugeIcon}
                        alt="huge-icon"
                      />
                      <h3 className={styles.formTopTitle}>
                        {touched.password
                          ? "Повторите пароль"
                          : "Придумайте пароль"}
                      </h3>
                      <p className={styles.formTopText}>
                        Минимальная длина — 8 символов. Для надежности пароль
                        должен содержать буквы и цифры.
                      </p>
                    </div>
                    <Input
                      className={clsx(styles.input)}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      passwordIcon={showPassword ? eye : eyeDisable}
                      toggleShowPassword={toggleShowPassword}
                      label="Пароль"
                      placeholder="Пароль"
                      error={errors.password}
                    />
                    <Input
                      className={clsx(styles.passInput)}
                      name="confirm_password"
                      type={showConfirmPassword ? "text" : "password"}
                      passwordIcon={showConfirmPassword ? eye : eyeDisable}
                      toggleShowPassword={toggleShowConfirmPassword}
                      id="confirm_password"
                      label="Повторите пароль"
                      placeholder="Повторите пароль"
                      error={errors.confirm_password}
                    />
                    <Button
                      className={clsx({
                        [styles.registerDefaultButton]: true,
                        [styles.registerButton]:
                          !errors.password && touched.password,
                      })}
                      type="submit"
                      disabled={!isValid}
                    >
                      {!errors.password && touched.password
                        ? "Готово"
                        : "Далее"}
                    </Button>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
