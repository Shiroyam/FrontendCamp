import * as yup from "yup"

export const advantageSchema = yup.object().shape({
  advantages: yup
    .array()
    .of(yup.string().trim().min(1, "Минимум один символ").required("Поле обязательно"))
    .min(1, "Минимум один символ")
    .required("Поле обязательно"),
  checkbox: yup
    .array()
    .of(yup.number().min(1, "Минимум один символ").required("Поле обязательно"))
    .min(1, "Минимум один символ")
    .required("Поле обязательно"),
  radio: yup.number().min(1, "Минимум один символ").required("Поле обязательно"),
})

export type Advantage = yup.InferType<typeof advantageSchema>
