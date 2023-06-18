import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { About, Advantage, Personal, Registration, RegistrationSchema } from "shared/schema"
import { useMutation } from "react-query"
import { candidateApi } from "shared/api"
import { persistor } from "app/store"

interface InitialState {
  data: RegistrationSchema
}

const initialState: InitialState = {
  data: {
    email: "shirooyam@gmail.com",
    phone: "79061099965",
    about: "",
    advantages: ["", "", ""],
    radio: 0,
    checkbox: [],
    nickname: "",
    name: "",
    surname: "",
    sex: "",
  },
}

export const candidateSlice = createSlice({
  name: "candidateForm",
  initialState,
  reducers: {
    setRegistrationForm: (state, { payload }: PayloadAction<Registration>) => {
      state.data.phone = payload.phone
      state.data.email = payload.email
    },
    setAboutForm: (state, { payload }: PayloadAction<About>) => {
      state.data.about = payload.about
    },
    setAdvantagesForm: (state, { payload }: PayloadAction<Advantage>) => {
      state.data.advantages = payload.advantages
      state.data.radio = payload.radio
      state.data.checkbox = payload.checkbox
    },
    setPersonalForm: (state, { payload }: PayloadAction<Personal>) => {
      state.data.nickname = payload.nickname
      state.data.name = payload.name
      state.data.surname = payload.surname
      state.data.sex = payload.sex
    },
    clearForm: (state) => {
      state.data.checkbox = []
      state.data.radio = 0
      state.data.advantages = ["", "", ""]
      state.data.about = ""
      state.data.nickname = ""
      state.data.name = ""
      state.data.surname = ""
      state.data.sex = ""
    },
  },
})

export const { setAboutForm, setPersonalForm, setAdvantagesForm, setRegistrationForm, clearForm } =
  candidateSlice.actions

export const createCandidateAsync = () =>
  useMutation(
    "candidateCreate",
    (body: RegistrationSchema) => {
      persistor.purge()
      return candidateApi.createDataCandidate(body)
    },
    {}
  )
