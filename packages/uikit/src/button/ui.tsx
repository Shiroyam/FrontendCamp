import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import cn from "classnames"
import styles from "./index.module.scss"

type Variant = "outline" | "filled"

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: Variant
}

export const Button = ({ className, children, variant = "filled", ...props }: ButtonProps) => {
  const buttonClass = cn(styles.button, styles[variant], className)

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}
