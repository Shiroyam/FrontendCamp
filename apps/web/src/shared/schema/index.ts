export * from "./about"
export * from "./advantage"
export * from "./registration"
export * from "./personal"

import { type About, aboutSchema } from "./about"
import { type Advantage, advantageSchema } from "./advantage"
import { type Personal, personalSchema } from "./personal"
import { type Registration, registrationSchema } from "./registration"

const combinedSchema = aboutSchema.concat(advantageSchema).concat(personalSchema).concat(registrationSchema)

export const candidateSchema = combinedSchema
export type RegistrationSchema = About & Advantage & Personal & Registration
