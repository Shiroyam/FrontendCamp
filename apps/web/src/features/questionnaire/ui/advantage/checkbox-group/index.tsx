import { Checkbox } from "@cloudcamp/uikit"
import styles from "./index.module.scss"

interface CheckboxGroupProps {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  values: number[]
  errors?: string | string[] | undefined
  touched?: boolean | undefined
  field: (field: string, value: number[]) => void
}

const checkboxData = [
  { id: "field-checkbox-group-option-1", value: 1, label: "1" },
  { id: "field-checkbox-group-option-2", value: 2, label: "2" },
  { id: "field-checkbox-group-option-3", value: 3, label: "3" },
]

export const CheckboxGroup = ({ name, values, errors, touched, field }: CheckboxGroupProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: checkedValue, checked } = event.target
    const numberValue = Number(checkedValue)

    if (checked) {
      field(name, [...values, numberValue])
    } else {
      field(
        name,
        values.filter((_, index) => index !== numberValue)
      )
    }
  }

  return (
    <fieldset className={styles.checkbox}>
      <legend>Checkbox group</legend>
      {checkboxData.map(({ label, value, id }) => (
        <Checkbox
          key={id}
          id={id}
          checked={values.includes(value)}
          onChange={handleChange}
          label={label}
          value={value}
          name={name}
          className={styles.item}
        />
      ))}
      <div className={styles.error}>{touched && Boolean(errors) ? errors : null}</div>
    </fieldset>
  )
}
