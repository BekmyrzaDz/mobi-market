import { FC } from "react"
import { useField } from "formik"
import InputMask from "react-input-mask"
import clsx from "clsx"
import { InputProps } from "./input.props"
import styles from "./Input.module.scss"

const PhoneInput: FC<InputProps> = ({ className, mask, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <InputMask
        className={clsx(styles.input)}
        {...field}
        value={meta.value}
        mask={mask}
        onChange={field.onChange}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default PhoneInput
