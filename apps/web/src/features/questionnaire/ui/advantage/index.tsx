import { RadioGroup } from "./radio-group"
import { CheckboxGroup } from "./checkbox-group"
import { AdvantagesGroup } from "./advantage-group"
import { useFormik } from "formik"
import { Button } from "@cloudcamp/uikit"
import { useAppDispatch, useAppSelector } from "shared/hooks"
import { candidateModel } from "entities/candidate"
import { advantageSchema } from "shared/schema"
import styles from "./index.module.scss"

interface AdvantageFormProps {
  actionStep: number
  handleStepChange: (step: number) => void
}

export const AdvantageForm = ({ actionStep, handleStepChange }: AdvantageFormProps) => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.candidate)
  const { advantages, checkbox, radio } = data

  const formik = useFormik({
    initialValues: {
      advantages,
      checkbox,
      radio,
    },
    validationSchema: advantageSchema,
    onSubmit: (values) => {
      dispatch(candidateModel.setAdvantagesForm(values))
      handleStepChange(actionStep + 1)
    },
  })

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <AdvantagesGroup
        name="advantages"
        errors={formik.errors.advantages}
        touched={formik.touched.advantages}
        values={formik.values.advantages}
        field={formik.setFieldValue}
      />

      <CheckboxGroup
        name="checkbox"
        errors={formik.errors.checkbox}
        touched={formik.touched.checkbox}
        values={formik.values.checkbox}
        field={formik.setFieldValue}
        onChange={formik.handleChange}
      />

      <RadioGroup
        name="radio"
        errors={formik.errors.radio}
        touched={formik.touched.radio}
        onChange={formik.handleChange}
        values={formik.values.radio}
      />

      <div className={styles.buttons}>
        <Button id="button-back" onClick={() => handleStepChange(actionStep - 1)} variant="outline">
          Назад
        </Button>
        <Button id="button-next" type="submit" variant="filled">
          Вперед
        </Button>
      </div>
    </form>
  )
}
