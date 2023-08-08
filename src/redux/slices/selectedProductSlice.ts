import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataLoading, IProduct } from "../../@types/types";
import { PRODUCTS_URL } from "../../utils/constants";

interface IInitialState {
  selectedProduct: IProduct,
  loading: IDataLoading
}

export interface IParams {
  productId: string
}

const initialState: IInitialState = {
  selectedProduct: {
    name: '',
    description: '',
    price: 0,
    discount: 0,
    subcategory: '',
    category: '',
    image: '',
    id: ''
  },
  loading: {
    status: true,
    success: false,
    error: false,
    message: '',
  }
}

export const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      console.log('set')
    },
    cleanSelectedProduct: (state) => {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.selectedProduct = initialState.selectedProduct;
      state.loading.status = true;
      state.loading.success = false;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.selectedProduct = action.payload;
      state.loading.status = false;
      state.loading.success = true;
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading.success = false;
      state.loading.status = false;
      state.loading.error = true;
      if (action.error.message) {
        state.loading.message = action.error.message;
      }
    })
  }
})

export const fetchProductById = createAsyncThunk('selectedProduct/fetchProductInfo', async ({ productId }: IParams) => {
  try {
    const res = await fetch(`${PRODUCTS_URL}?id=${productId}`);
    if (res.ok) {
      const selectedProductData = await res.json();
      return selectedProductData[0];
    } else {
      throw new Error(res.statusText)
    }
  } catch (err) {
    return Promise.reject(err);
  }
})


export const { setSelectedProduct, cleanSelectedProduct } = selectedProductSlice.actions;

export default selectedProductSlice.reducer;