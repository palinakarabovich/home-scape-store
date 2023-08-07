import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataLoading, IProduct } from "../../@types/types";
import { PRODUCTS_URL } from "../../utils/constants";

interface IInitialState {
  products: {
    [key: string ]: Array<IProduct>,
  },
  loading: IDataLoading
}

export interface IParams {
  query?: string,
  type?: string
}

const initialState: IInitialState = {
  products: {
    furniture: [],
    accessories: []
  },
  loading: {
    status: false,
    error: false,
    message: ''
  }
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log('set')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products.accessories = [];
      state.products.furniture = [];
      state.loading.status = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if(action.payload.type) {
        state.products[action.payload.type] = action.payload.productsData;
      } else {
        state.products['all'] = action.payload.productsData
      }
      state.loading.status = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading.status = false;
      state.loading.error = true;
      if(action.error.message){
        state.loading.message = action.error.message;
      }
    })
  }
})

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (params : IParams) => {
  try {
    const res = await fetch(`${PRODUCTS_URL}?${params.query && params.query}`);
    if (res.ok) {
      const productsData = await res.json();
      return {
        productsData,
        type: params.type
      };
    } else {
      throw new Error(res.statusText)
    }
  } catch (err) {
    return Promise.reject(err);
  }
})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;