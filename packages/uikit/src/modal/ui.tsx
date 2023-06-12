import { Portal } from "./portal"
import { useRef } from "react"
import styles from "./index.module.scss"
import cn from "classnames"

export interface ModalProps {
  children?: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
  closeOnClickOutside?: boolean
}

export const Modal = ({ children, className, isOpen, onClose, closeOnClickOutside }: ModalProps) => {
  const modalClass = cn(styles.modal, className)

  const modalRef = useRef<HTMLDivElement>(null)

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current && closeOnClickOutside) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={styles.backdrop} onClick={handleBackdropClick} ref={modalRef}>
        <div className={modalClass} role="alertdialog">
          {children}
        </div>
      </div>
    </Portal>
  )
}
