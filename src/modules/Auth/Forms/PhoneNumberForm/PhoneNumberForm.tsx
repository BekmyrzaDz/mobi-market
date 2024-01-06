import { Formik, Form } from "formik"
import clsx from "clsx"
// import { InputMask } from "@react-input/mask"
// import InputMask from "react-input-mask"
import { phoneState } from "../../State/State"
import { phoneSchema } from "../../Schema/Validation"
import { Button } from "../../../../components"
import { hugeIcon } from "../../../../assets"
import { IPhone } from "../../types"
import styles from "./PhoneNumberForm.module.scss"
import { useAppDispatch } from "../../../../hooks/redux"
import { phone } from "../../redux/asyncActions"
import { PhoneInput } from "../../components"

export const PhoneNumberForm = () => {
  const dispatch = useAppDispatch()

  function onSubmit(values: IPhone) {
    console.log("Phone submited")
    const cleanedPhoneNumber = values.phone.replace(/[\(\)\s]/g, "")

    const newValues = {
      phone: cleanedPhoneNumber,
    }

    console.log(newValues)

    dispatch(phone(newValues))
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
        {({ handleSubmit, values, handleChange, touched, errors, isValid }) => {
          console.log(values)

          return (
            <Form className={styles.form} onSubmit={handleSubmit}>
              <PhoneInput
                className={styles.formWrapper}
                name="phone"
                mask="0(999) 999 999"
                phone={values.phone}
                onChange={handleChange}
                placeholder="0(000) 000 000"
              />
              <Button
                className={clsx({
                  [styles.formDefaultButton]: true,
                  [styles.formButton]: touched.phone && !errors.phone,
                })}
                type="submit"
                disabled={!isValid}
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
