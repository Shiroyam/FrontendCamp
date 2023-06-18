import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { candidateModel } from "entities/candidate"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage"

export const rootReducer = combineReducers({
  candidate: candidateModel.candidateSlice.reducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const storeSetup = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER],
        },
      }),
  })
}

export const store = storeSetup()
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof storeSetup>
export type AppDispatch = AppStore["dispatch"]
