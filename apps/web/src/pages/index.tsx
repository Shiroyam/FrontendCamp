import { Route, Routes } from "react-router-dom"
import { routeConfig } from "./route"

export const Routing = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  )
}
