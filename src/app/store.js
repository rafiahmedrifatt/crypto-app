import { configureStore } from '@reduxjs/toolkit'
import { cryptoAPI } from '../Services/CryptoApi'
import { cryptoNewsApi } from '../Services/CryptoNewsApi'

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(cryptoAPI.middleware, cryptoNewsApi.middleware)
})