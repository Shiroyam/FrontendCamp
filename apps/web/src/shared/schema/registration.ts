import * as yup from "yup"

const phoneRegExp = /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/

export const registrationSchema = yup.object().shape({
  email: yup.string().email("Не валидно").required("Поле обязательно"),
  phone: yup.string().matches(phoneRegExp, "Некорректный номер телефона").required("Введите номер телефона"),
})

export type Registration = yup.InferType<typeof registrationSchema>
