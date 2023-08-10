import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice';
import categoriesSlice from './slices/categoriesSlice';
import selectedProductSlice from './slices/selectedProductSlice';
import modalSlice from './slices/modalSlice';
import saleSlice from './slices/saleSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    selectedProduct: selectedProductSlice,
    modal: modalSlice,
    sale: saleSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;