import { useField } from "formik"
import { FC } from "react"
import { InputProps } from "./MyInput.props"
import { clsx } from "clsx"

import styles from "./MyInput.module.scss"

export const Input: FC<InputProps> = ({
  className,
  label,
  passwordIcon,
  toggleShowPassword,
  error,
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <input
        className={clsx(styles.input, {
          [styles.inputError]: error,
        })}
        {...props}
        {...field}
        placeholder={props.placeholder}
        value={meta.value}
        onChange={field.onChange}
      />
      <label
        className={clsx(styles.label, {
          [styles.highlight]: meta.value,
          [styles.labelError]: meta.value && error,
        })}
        htmlFor={props.name}
      >
        {label}
      </label>
      {passwordIcon ? (
        <img
          src={passwordIcon}
          alt="eye"
          className={styles.showHide}
          onClick={toggleShowPassword}
        />
      ) : null}
      {meta.touched && meta.error ? (
        <small className={styles.error}>{meta.error}</small>
      ) : null}
    </div>
  )
}
