import { persistor } from "../store"
import { PersistGate } from "redux-persist/integration/react"

export const withPersist = (component: () => React.ReactNode) => () =>
  <PersistGate persistor={persistor}>{component()}</PersistGate>
