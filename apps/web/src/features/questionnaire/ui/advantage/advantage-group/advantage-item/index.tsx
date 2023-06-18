import { Input } from "@cloudcamp/uikit"
import { ChangeEvent } from "react"
import { ReactComponent as TrashSvg } from "./trash.svg"
import styles from "./index.module.scss"

interface AdvantagesProps {
  id: string
  idRemove: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onDelete: () => void
  value: string
  index: number
  name?: string
  errors?: string | string[] | undefined
  touched?: boolean | undefined
}

export const AdvantageItem = ({
  id,
  idRemove,
  name,
  value,
  onChange,
  onDelete,
  index,
  errors,
  touched,
}: AdvantagesProps) => {
  return (
    <div className={styles.advantage}>
      <Input
        id={id}
        className={styles.input}
        error={touched && Boolean(errors)}
        errorText={Array.isArray(errors) ? errors[index] : errors}
        name={name}
        value={value}
        onChange={onChange}
        variant="outline"
        placeholder="placeholder"
      />
      <TrashSvg id={idRemove} className={styles.svg} onClick={onDelete} />
    </div>
  )
}
