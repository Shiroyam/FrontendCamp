import { Button, Modal } from "@cloudcamp/uikit"
import { ReactComponent as SuccessSvg } from "./success.svg"
import { useNavigate } from "react-router-dom"
import styles from "./index.module.scss"

export const ModalSuccess = ({
  state,
  stateAction,
}: {
  state: boolean
  stateAction: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const handleClose = () => {
    stateAction(false)
  }

  const navigate = useNavigate()

  return (
    <Modal className={styles.modal} isOpen={state} onClose={handleClose}>
      <div className={styles.title}>Форма успешно отправлена</div>
      <SuccessSvg />
      <Button onClick={() => navigate("/")} id="button-to-main" variant="filled">
        На главную
      </Button>
    </Modal>
  )
}
