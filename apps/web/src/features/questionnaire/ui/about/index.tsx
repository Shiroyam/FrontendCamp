import { Button, Textarea } from "@cloudcamp/uikit"
import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "shared/hooks"
import { candidateModel } from "entities/candidate"
import { aboutSchema, candidateSchema } from "shared/schema"
import { ChangeEvent } from "react"
import { useState } from "react"
import { ModalError, ModalSuccess } from "../modal"
import styles from "./index.module.scss"

interface AdvantageFormProps {
  actionStep: number
  handleStepChange: (step: number) => void
}

export const AboutForm = ({ actionStep, handleStepChange }: AdvantageFormProps) => {
  const dispatch = useAppDispatch()
  const [successState, setSuccessState] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const { mutate } = candidateModel.createCandidateAsync()
  const { data } = useAppSelector((state) => state.candidate)
  const { about } = data

  const formik = useFormik({
    initialValues: {
      about,
    },
    validationSchema: aboutSchema,
    onSubmit: () => {
      try {
        candidateSchema.validateSync(data)
        mutate(data, {
          onSuccess: (data) => {
            if (data.status === 200) {
              setSuccessState(true)
              dispatch(candidateModel.clearForm())
            }
          },
          onError: () => {
            setErrorState(true)
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  })

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const fieldName = event.target.name
    const fieldValue = event.target.value
    formik.setFieldValue(fieldName, fieldValue)
    dispatch(candidateModel.setAboutForm({ about: event.target.value }))
  }

  return (
    <>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div>About</div>
        <Textarea
          id="field-about"
          name="about"
          errorText={formik.errors.about}
          error={formik.touched.about && Boolean(formik.errors.about)}
          value={formik.values.about}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <Button id="button-back" onClick={() => handleStepChange(actionStep - 1)} variant="outline">
            Назад
          </Button>
          <Button id="button-send" type="submit" variant="filled">
            Отправить
          </Button>
        </div>
      </form>
      <ModalSuccess state={successState} stateAction={setSuccessState} />
      <ModalError state={errorState} stateAction={setErrorState} />
    </>
  )
}
