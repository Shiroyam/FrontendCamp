import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

export interface RadioProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}

export const Radio = ({ label, className, ...props }: RadioProps) => {
  const radioClass = cn(styles.radio, className)

  return (
    <>
      <input className={radioClass} type="radio" {...props} />
      {label ? <label>{label}</label> : null}
    </>
  )
}
