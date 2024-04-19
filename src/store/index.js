import { configureStore } from '@reduxjs/toolkit'
import windowsReducer from './window/slice'
import calculatorReducer from './calculator/slice'

const persistanceMiddleware = (store) => (next) => (action) => {
    console.log(store.getState())
    console.log(action)
    next(action)
    console.log(store.getState())
}

export const store = configureStore({
    reducer: {
        windows: windowsReducer,
        calculator: calculatorReducer,
    },
    middleware: [persistanceMiddleware]
})