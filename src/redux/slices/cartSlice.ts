import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataLoading, IPurchase } from "../../@types/types";

interface IInitialState {
  purchases: Array<IPurchase>,
  sum: number,
  totalItems: number,
  loading: IDataLoading
}

const initialState: IInitialState = {
  purchases: [],
  sum: 0,
  totalItems: 0,
  loading: {
    status: false,
    error: false,
    success: false,
    message: ''
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.purchases.push({
        item: action.payload,
        quantity: 1
      })
      state.totalItems = state.totalItems + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlaceOrder.pending, (state) => {
      state.loading.status = true;
      state.loading.success = false;

    });
    builder.addCase(fetchPlaceOrder.fulfilled, (state, action) => {

      state.loading.status = false;
      state.loading.success = true;
    });
    builder.addCase(fetchPlaceOrder.rejected, (state, action) => {
      state.loading.success = false;
      state.loading.status = false;
      state.loading.error = true;
      if(action.error.message){
        state.loading.message = action.error.message;
      }
    })
  }
})

export const fetchPlaceOrder = createAsyncThunk('cart/fetchPlaceOrder', async () => {
  // try {
  //   const res = await fetch(CATEGORIES_URL);
  //   if (res.ok) {
  //     const categoriesData = await res.json();
  //     return categoriesData;
  //   } else {
  //     throw new Error(res.statusText)
  //   }
  // } catch (err) {
  //   return Promise.reject(err);
  // }
})


export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;