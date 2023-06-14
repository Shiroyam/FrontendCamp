import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

export interface CheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}

export const Checkbox = ({ className, label, ...props }: CheckboxProps) => {
  const checkboxClass = cn(styles.checkbox, className)

  return (
    <div className={styles.wrapper}>
      <input className={checkboxClass} type="checkbox" {...props} />
      {label ? <label className={styles.label}>{label}</label> : null}
    </div>
  )
}
