import { AnchorHTMLAttributes, DetailedHTMLProps } from "react"
import styles from "./index.module.scss"
import cn from "classnames"

export interface AnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  underline?: boolean
}

export const Anchor = ({ className, children, underline, ...props }: AnchorProps) => {
  const aClass = cn(styles.a, className, { [styles.underline]: underline })
  return (
    <a className={aClass} {...props}>
      {children}
    </a>
  )
}
