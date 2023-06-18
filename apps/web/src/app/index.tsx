import { withProviders } from "./providers"
import { Routing } from "pages"
import "./styles/index.scss"

function App() {
  return <Routing />
}

export const ProviderApp = withProviders(App)
