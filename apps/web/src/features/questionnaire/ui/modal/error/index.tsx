import { Button, Modal } from "@cloudcamp/uikit"
import { ReactComponent as ErrorSvg } from "./error.svg"
import { ReactComponent as CrossSvg } from "./cross.svg"
import styles from "./index.module.scss"

export const ModalError = ({
  state,
  stateAction,
}: {
  state: boolean
  stateAction: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleClose = () => {
    stateAction(false)
  }

  return (
    <Modal className={styles.modal} closeOnClickOutside={true} isOpen={state} onClose={handleClose}>
      <div className={styles.title}>Ошибка</div>
      <CrossSvg onClick={handleClose} className={styles.cross} />
      <ErrorSvg className={styles.error} />
      <Button id="button-close" className={styles.button} onClick={handleClose} variant="filled">
        Закрыть
      </Button>
    </Modal>
  )
}
