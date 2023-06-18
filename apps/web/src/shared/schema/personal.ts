import * as yup from "yup"

export const personalSchema = yup.object().shape({
  nickname: yup.string().max(30, "error max").required("error required"),
  name: yup.string().max(50, "error max").required("error required"),
  surname: yup.string().max(50, "error max").required("error required"),
  sex: yup.string().ensure().required(" is required!"),
})

export type Personal = yup.InferType<typeof personalSchema>
