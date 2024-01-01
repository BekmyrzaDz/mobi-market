import { combineReducers, configureStore } from "@reduxjs/toolkit"

import authReducer from "../modules/Auth/redux/authSlice"
import registerReducer from "../modules/Register/redux/registerSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
