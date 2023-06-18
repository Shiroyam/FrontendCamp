import * as yup from "yup"

export const personalSchema = yup.object().shape({
  nickname: yup.string().max(30, "Максимум 30 символов").required("Поле обязательно"),
  name: yup.string().max(50, "Максимум 50 символов").required("Поле обязательно"),
  surname: yup.string().max(50, "Максимум 50 символов").required("Поле обязательно"),
  sex: yup.string().ensure().required("Поле обязательно!"),
})

export type Personal = yup.InferType<typeof personalSchema>
