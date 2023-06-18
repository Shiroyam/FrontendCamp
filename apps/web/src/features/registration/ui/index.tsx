import { Button, Input } from "@cloudcamp/uikit"
import { registrationSchema } from "shared/schema"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "shared/hooks"
import { candidateModel } from "entities/candidate"
import InputMask from "react-input-mask"
import styles from "./index.module.scss"

export const RegistrationForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { data } = useAppSelector((state) => state.candidate)
  const { phone, email } = data

  const formik = useFormik({
    initialValues: {
      phone,
      email,
    },
    validationSchema: registrationSchema,
    onSubmit: (values) => {
      dispatch(candidateModel.setRegistrationForm(values))
      navigate("/create?step=0")
    },
  })

  return (
    <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
      <div className={styles.form}>
        <div className={styles.title}>Номер телефона</div>
        <InputMask
          className={styles.input}
          placeholder="Phone"
          name="phone"
          mask="+9(999)999 99 99"
          value={formik.values.phone}
          onChange={formik.handleChange}
        >
          <Input error={formik.touched.phone && Boolean(formik.errors.phone)} errorText={formik.errors.phone} />
        </InputMask>
      </div>
      <div className={styles.form}>
        <div className={styles.title}>Email</div>
        <Input
          className={styles.input}
          name="email"
          error={formik.touched.email && Boolean(formik.errors.email)}
          errorText={formik.errors.email}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
        />
      </div>
      <Button id="button-start" className={styles.button} type="submit">
        Начать
      </Button>
    </form>
  )
}
