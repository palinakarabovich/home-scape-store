import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataLoading } from "../../@types/types";

interface IInitialState {
  loading: IDataLoading
}

const initialState: IInitialState = {
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