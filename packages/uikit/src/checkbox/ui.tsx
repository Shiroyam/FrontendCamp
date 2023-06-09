import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

export type CheckboxProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  const checkboxClass = cn(styles.checkbox, className)

  return <input className={checkboxClass} type="checkbox" {...props} />
}
