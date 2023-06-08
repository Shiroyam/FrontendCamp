import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

type Variant = "outline" | "filled"

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  variant?: Variant
  error?: boolean
  errorText?: string
}

export const Input = ({ className, error, errorText, variant = "filled", ...props }: InputProps) => {
  const inputClass = cn(styles.input, styles[variant], className, { [styles.error]: error })

  return (
    <div className={styles.wrapper}>
      <input className={inputClass} {...props} />
      {error ? <label className={styles.errorText}>{errorText}</label> : null}
    </div>
  )
}
