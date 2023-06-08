import { DetailedHTMLProps, SelectHTMLAttributes, useState } from "react"
import { Arrow } from "./svg"
import cn from "classnames"
import styles from "./index.module.scss"

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  placeholder: string
}

export const Select = ({ children, className, placeholder, ...props }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }

  const selectClass = cn(styles.select, className)
  const arrowClass = cn(styles.svg, { [styles.rotate]: isOpen })

  return (
    <div className={styles.wrapper}>
      <select
        defaultValue={placeholder}
        className={selectClass}
        onClick={handleSelectClick}
        onBlur={() => setIsOpen(false)}
        {...props}
      >
        <option value={placeholder} className={styles.placeholder} disabled hidden>
          {placeholder}
        </option>
        {children}
      </select>
      <Arrow className={arrowClass} />
    </div>
  )
}
