import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"
import { countChars } from "./counter"
import styles from "./index.module.scss"
import cn from "classnames"

export interface TextareaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: boolean
  errorText?: string
}

export const Textarea = ({ error, errorText, className, value, ...props }: TextareaProps) => {
  const textareaClass = cn(styles.textarea, className, { [styles.error]: error })

  const count = countChars(value)

  return (
    <div className={styles.wrapper}>
      <div className={styles["error-container"]}>
        <textarea className={textareaClass} {...props} />
        <div className={styles.count}>{count}</div>
      </div>
      {error ? <label className={styles["error-text"]}>{errorText}</label> : null}
    </div>
  )
}
