import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice';
import categoriesSlice from './slices/categoriesSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;