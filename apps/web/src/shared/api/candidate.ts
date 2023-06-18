import { AxiosPromise } from "axios"
import { apiInstance } from "./base"
import { RegistrationSchema } from "shared/schema"

export const createDataCandidate = (data: RegistrationSchema): AxiosPromise => {
  return apiInstance.post("/content/v1/bootcamp/frontend", data)
}
