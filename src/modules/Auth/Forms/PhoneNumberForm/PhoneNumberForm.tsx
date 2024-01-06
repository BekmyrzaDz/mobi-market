import { Formik, Form } from "formik"
import clsx from "clsx"
import InputMask from "react-input-mask"
import { phoneState } from "../../State/State"
import { phoneSchema } from "../../Schema/Validation"
import { Button } from "../../../../components"
import { hugeIcon } from "../../../../assets"
import { IPhone } from "../../types"
import styles from "./PhoneNumberForm.module.scss"

export const PhoneNumberForm = () => {
  function onSubmit(values: IPhone) {
    console.log("Phone submited")
    const cleanedPhoneNumber = values.phone.replace(/\(|\)/g, "")
    console.log({
      phone: cleanedPhoneNumber,
    })
  }

  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Введите номер телефона</h3>
      <img className={styles.modalIcon} src={hugeIcon} alt="phone icon" />
      <p className={styles.modalPhoneTitle}>Введите номер телефона</p>
      <p className={styles.modalPhoneText}>
        Мы отправим вам СМС с кодом подтверждения
      </p>
      <Formik
        initialValues={phoneState}
        validationSchema={phoneSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
        validateOnChange={true}
      >
        {({ handleSubmit, values, handleChange, touched, errors }) => {
          console.log(values)

          return (
            <Form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formWrapper}>
                <InputMask
                  className={styles.formWrapperInput}
                  name="phone"
                  mask="0(999) 999 999"
                  value={values.phone}
                  onChange={handleChange}
                  placeholder="0(000) 000 000"
                />
                {touched.phone && errors.phone ? (
                  <div className={styles.formWrapperInputError}>
                    {errors.phone}
                  </div>
                ) : null}
              </div>
              <Button
                className={clsx({
                  [styles.formButtonDefault]: true,
                  [styles.formButton]: touched.phone && !errors.phone,
                })}
                type="submit"
              >
                Далее
              </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
