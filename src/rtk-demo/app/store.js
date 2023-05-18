const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/incecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

// const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
module.exports = store;
// import { configureStore } from "@reduxjs/toolkit";
// import cakeReducer from '../features/cake/cakeSlice'

// export const store = configureStore({
//     reducer: {
//         cake: cakeReducer
//     }
// })