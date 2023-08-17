import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataLoading, IPurchase } from "../../@types/types";
import { stat } from "fs";

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
    setCart: (state, action) => {
      state.purchases = action.payload.purchases;
      state.loading = action.payload.loading;
      state.sum = action.payload.sum;
      state.totalItems = action.payload.totalItems;
    },
    addItemToCart: (state, action) => {
      if (state.purchases.find((p) => p.item.id === action.payload.id)) {
        state.purchases = state.purchases.map((p) => {
          if (p.item.id !== action.payload.id) {
            return p
          } else {
            return {
              item: p.item,
              quantity: p.quantity + 1
            }
          }
        })
      } else {
        state.purchases = [...state.purchases, {
          item: action.payload,
          quantity: 1
        }]
      }
      state.totalItems = state.totalItems + 1;
      state.sum = state.sum + action.payload.price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    increaseQuantity: (state, action) => {
      state.purchases = state.purchases.map((p) => {
        if (p.item.id !== action.payload.id) {
          return p
        } else {
          return {
            item: p.item,
            quantity: p.quantity + 1
          }
        }
      })
      state.sum = state.sum + action.payload.price;
      state.totalItems = state.totalItems + 1;
      localStorage.setItem('cart', JSON.stringify(state))
    },
    decreaseQuantity: (state, action) => {
      state.purchases = state.purchases.map((p) => {
        if (p.item.id !== action.payload.id) {
          return p
        } else {
          return {
            item: p.item,
            quantity: p.quantity - 1
          }
        }
      })
      state.sum = state.sum - action.payload.price;
      state.totalItems = state.totalItems - 1;
      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeItem: (state, action) => {
      state.purchases = state.purchases.filter((p) => p.item.id !== action.payload.id)
      state.sum = state.sum - action.payload.price;
      state.totalItems = state.totalItems - 1;
      localStorage.setItem('cart', JSON.stringify(state))
    }
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
      if (action.error.message) {
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


export const { addItemToCart, setCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;