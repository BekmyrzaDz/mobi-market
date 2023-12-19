import { useField } from "formik"
import { FC } from "react"
import { InputProps } from "./MyInput.props"
import { clsx } from "clsx"

import styles from "./MyInput.module.scss"

export const Input: FC<InputProps> = ({
  className,
  label,
  username,
  password,
  onChangeHandle,
  inputValue,
  passwordIcon,
  toggleShowPassword,
  ...props
}) => {
  const [field, meta] = useField(props)

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          {...props}
          {...field}
          placeholder={props.placeholder}
          value={inputValue}
          onChange={onChangeHandle}
        />
        <label
          className={clsx(
            styles.label,
            { [styles.highlight]: username },
            { [styles.highlight]: password }
          )}
          htmlFor={props.name}
        >
          {label}
        </label>
      </div>
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
