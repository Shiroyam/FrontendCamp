import * as yup from "yup"

export const aboutSchema = yup.object({
  about: yup.string().max(200, "Максимум символов").required("Поле обязательно"),
})

export type About = yup.InferType<typeof aboutSchema>
