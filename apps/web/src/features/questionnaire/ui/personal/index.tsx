import { Button, Input, Select } from "@cloudcamp/uikit"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "shared/hooks"
import { candidateModel } from "entities/candidate"
import { personalSchema } from "shared/schema"
import styles from "./index.module.scss"

interface PersonalInfoFormInterface {
  actionStep: number
  handleStepChange: (step: number) => void
}

export const PersonalInfoForm = ({ handleStepChange, actionStep }: PersonalInfoFormInterface) => {
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.candidate)
  const { nickname, name, surname, sex } = data

  const formik = useFormik({
    initialValues: {
      nickname,
      name,
      surname,
      sex,
    },
    validationSchema: personalSchema,
    onSubmit: (values) => {
      dispatch(candidateModel.setPersonalForm(values))
      handleStepChange(actionStep + 1)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.form}>
        <div className={styles.title}>Nickname</div>
        <Input
          id="field-nickname"
          className={styles.input}
          name="nickname"
          error={formik.touched.nickname && Boolean(formik.errors.nickname)}
          errorText={formik.errors.nickname}
          onChange={formik.handleChange}
          value={formik.values.nickname}
          variant="outline"
          placeholder="Placeholder"
        />
      </div>
      <div className={styles.form}>
        <div className={styles.title}>Name</div>
        <Input
          id="field-name"
          className={styles.input}
          name="name"
          error={formik.touched.name && Boolean(formik.errors.name)}
          errorText={formik.errors.name}
          onChange={formik.handleChange}
          value={formik.values.name}
          variant="outline"
          placeholder="Placeholder"
        />
      </div>
      <div className={styles.form}>
        <div className={styles.title}>Surname</div>
        <Input
          id="field-sername"
          className={styles.input}
          name="surname"
          errorText={formik.errors.surname}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          onChange={formik.handleChange}
          value={formik.values.surname}
          variant="outline"
          placeholder="Placeholder"
        />
      </div>
      <div className={styles.select}>
        <div className={styles.title}>Sex</div>
        <Select
          id="field-sex"
          name="sex"
          onChange={formik.handleChange}
          value={formik.values.sex === "" ? undefined : formik.values.sex}
          placeholder="Не выбрано"
        >
          <option id="field-sex-option-man" value="man">
            man
          </option>
          <option id="field-sex-option-woman" value="woman">
            woman
          </option>
        </Select>
      </div>
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
