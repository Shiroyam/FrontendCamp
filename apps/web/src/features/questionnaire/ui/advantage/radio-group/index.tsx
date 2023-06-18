import { Radio } from "@cloudcamp/uikit"
import styles from "./index.module.scss"

interface RadioGroupProps {
  name: string
  onChange: (e: React.ChangeEvent) => void
  errors?: string | string[] | undefined
  touched?: boolean | undefined
  values: number
}

const radioData = [
  { id: "* ID: field-radio-group-option-1", value: 1, label: "1" },
  { id: "* ID: field-radio-group-option-2", value: 2, label: "2" },
  { id: "* ID: field-radio-group-option-3", value: 3, label: "3" },
]

export const RadioGroup = ({ name, onChange, errors, touched, values }: RadioGroupProps) => {
  return (
    <fieldset className={styles.radio}>
      <legend>Radio group</legend>
      {radioData.map(({ label, value, id }) => (
        <Radio
          key={id}
          id={id}
          name={name}
          checked={values == value}
          value={value}
          onChange={onChange}
          className={styles.item}
          label={label}
        />
      ))}
      <div className={styles.error}>{touched && Boolean(errors) ? errors : null}</div>
    </fieldset>
  )
}
