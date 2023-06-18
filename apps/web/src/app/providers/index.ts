import compose from "compose-function"
import { withRouter } from "./with-router"
import { withRedux } from "./with-redux"
import { withQuery } from "./with-query"
import { withPersist } from "./with-persist"

export const withProviders = compose(withRouter, withRedux, withQuery, withPersist)
