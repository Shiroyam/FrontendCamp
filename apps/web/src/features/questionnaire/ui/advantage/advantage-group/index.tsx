import { AdvantageItem } from "./advantage-item"
import { ChangeEvent } from "react"
import { Button } from "@cloudcamp/uikit"
import { ReactComponent as PlusSvg } from "./plus.svg"
import styles from "./index.module.scss"

interface AdvantagesGroupProps {
  name: string
  values: string[]
  field: (field: string, value: string[]) => void
  errors: string | string[] | undefined
  touched: boolean | undefined
}

export const AdvantagesGroup = ({ name, values, field, errors, touched }: AdvantagesGroupProps) => {
  const addAdvantage = () => {
    field(name, [...values, ""])
  }

  const removeAdvantage = (index: number) => {
    field(
      name,
      values.filter((_, i) => i !== index)
    )
  }

  const changeAdvantageItem = (event: ChangeEvent<HTMLInputElement>, indexInput: number) => {
    field(
      name,
      values.map((value, index) => {
        if (index === indexInput) {
          return event.target.value
        } else {
          return value
        }
      })
    )
  }

  return (
    <div className={styles.advantage}>
      <div>Advantages</div>
      {values.map((value, index) => {
        return (
          <div key={index}>
            <AdvantageItem
              id={`advantage-item-${index + 1}`}
              idRemove={`advantage-remove-${index + 1}`}
              name={name}
              index={index}
              value={value}
              errors={errors}
              touched={touched}
              onChange={(event) => changeAdvantageItem(event, index)}
              onDelete={() => removeAdvantage(index)}
            />
          </div>
        )
      })}
      <div className={styles.error}>{!Array.isArray(errors) ? errors : null}</div>
      <Button id="button add" className={styles.button} onClick={addAdvantage} variant="outline">
        <PlusSvg className={styles.svg} />
      </Button>
    </div>
  )
}
