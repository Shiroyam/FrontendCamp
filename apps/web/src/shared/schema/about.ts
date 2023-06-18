import * as yup from "yup"

export const aboutSchema = yup.object({
  about: yup.string().max(200, "max error").required("required error"),
})

export type About = yup.InferType<typeof aboutSchema>
