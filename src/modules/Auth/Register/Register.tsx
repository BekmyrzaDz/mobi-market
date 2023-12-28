import { Form, Formik } from "formik"
import clsx from "clsx"
import styles from "./Register.module.scss"
import { Button, Input } from "../../../components"
import { registerState } from "../State/State"
import { registerSchema } from "../Schema/Validation"
import { IRegister } from "../types"
import { useAppDispatch } from "../../../hooks/redux"
import { register } from "../redux/asyncActions"
import { arrowLeft } from "../../../assets"
import { useNavigate } from "react-router-dom"

export const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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
              <Button className={styles.arrowBtn} onClick={() => navigate(-1)}>
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
                <Input
                  className={clsx(styles.input)}
                  name="username"
                  type="text"
                  label="Имя пользователя"
                  placeholder="Имя пользователя"
                />
                <Input
                  className={clsx(styles.passInput)}
                  name="email"
                  type="email"
                  id="email"
                  label="Почта"
                  placeholder="Почта"
                />
                <Button
                  className={clsx({
                    [styles.registerDefaultButton]: true,
                    [styles.registerButton]:
                      !errors.username &&
                      !errors.email &&
                      touched.username &&
                      touched.email,
                  })}
                  type="submit"
                  disabled={!isValid}
                >
                  Далее
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
