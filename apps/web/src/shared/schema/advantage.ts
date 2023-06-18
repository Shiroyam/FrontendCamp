import * as yup from "yup"

export const advantageSchema = yup.object().shape({
  advantages: yup
    .array()
    .of(yup.string().trim().min(1).required("error value"))
    .min(1, "error required")
    .required("required"),
  checkbox: yup.array().of(yup.number().min(1).required("error number")).min(1, "error required").required("required"),
  radio: yup.number().min(1, "error required").required("error required"),
})

export type Advantage = yup.InferType<typeof advantageSchema>
