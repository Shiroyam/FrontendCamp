import { type RouteObject } from "react-router-dom"
import { MainPage } from "./main"
import { CreatePage } from "./create"

export enum AppRoutes {
  MAIN = "main",
  CREATE = "create",
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CREATE]: "/create",
}

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: routePath[AppRoutes.MAIN],
    element: <MainPage />,
  },

  [AppRoutes.CREATE]: {
    path: routePath[AppRoutes.CREATE],
    element: <CreatePage />,
  },
}
