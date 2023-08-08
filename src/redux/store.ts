import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice';
import categoriesSlice from './slices/categoriesSlice';
import selectedProductSlice from './slices/selectedProductSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    selectedProduct: selectedProductSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;