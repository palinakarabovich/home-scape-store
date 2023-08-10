import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_URL } from "../../utils/constants";
import { IDataLoading, IProduct } from "../../@types/types";

interface IInitialState {
  products: Array<IProduct>,
  categories: Array<string>,
  loadingSale: IDataLoading
}

const initialState: IInitialState = {
  products: [],
  categories: [],
  loadingSale: {
    status: true,
    success: false,
    error: false,
    message: '',
  }
}

export interface IParams {
  subcategory: string
}

export const saleSlice = createSlice({
  name: 'sale',
  initialState,
  reducers: {
    filterProductsOnSale: (state, action) => {
      const filtretedProducts = state.products.filter((p) => p.subcategory === action.payload)
      state.products = filtretedProducts;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsOnSale.pending, (state) => {
      state.products = [];
      state.loadingSale.status = true;
      state.loadingSale.success = false;
    });
    builder.addCase(fetchProductsOnSale.fulfilled, (state, action) => {
      if(action.payload.subcategory !== '') {
        state.products = action.payload.productsData.filter((p: IProduct) => p.discount > 0).filter((p: IProduct) => p.subcategory === action.payload.subcategory)
      } else {
        state.products = action.payload.productsData.filter((p: IProduct) => p.discount > 0);
      }
      state.categories = action.payload.productsData.filter((p: IProduct) => p.discount > 0).map((p: IProduct) => p.subcategory)
      state.loadingSale.status = false;
      state.loadingSale.success = true;
    });
    builder.addCase(fetchProductsOnSale.rejected, (state, action) => {
      state.loadingSale.success = false;
      state.loadingSale.status = false;
      state.loadingSale.error = true;
      if (action.error.message) {
        state.loadingSale.message = action.error.message;
      }
    })
  }
})

export const fetchProductsOnSale = createAsyncThunk('sale/fetchProductsOnSale', async ({ subcategory }: IParams) => {
  try {
    const res = await fetch(`${PRODUCTS_URL}`);
    if (res.ok) {
      const productsData = await res.json();
      return {
        productsData,
        subcategory
      };
    } else {
      throw new Error(res.statusText)
    }
  } catch (err) {
    return Promise.reject(err);
  }
})


export const { filterProductsOnSale } = saleSlice.actions;

export default saleSlice.reducer;