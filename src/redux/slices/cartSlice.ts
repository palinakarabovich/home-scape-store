import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDataLoading, IPurchase } from "../../@types/types";
import { countPriceWithDiscount, countPriceWithPromoAndDiscount } from "../../utils/countPrice";
import { stat } from "fs";

interface IInitialState {
  purchases: Array<IPurchase>,
  sum: number,
  totalItems: number,
  loading: IDataLoading,
  isPromo: boolean,
  validPromo: Array<string>
  selectedPromo: string
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
  },
  validPromo: ['family', 'redux'],
  isPromo: false,
  selectedPromo: ''
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
      state.isPromo = action.payload.isPromo;
      state.selectedPromo = action.payload.selectedPromo;
    },
    addItemToCart: (state, action) => {
      let price = 0;
      if (action.payload.hasDiscount && state.isPromo) {
        price = countPriceWithDiscount(action.payload.price, (action.payload.discount + 10))
      } else if (action.payload.hasDiscount) {
        price = countPriceWithDiscount(action.payload.price, action.payload.discount)
      } else if (state.isPromo) {
        price = countPriceWithDiscount(action.payload.price, 10)
      } else {
        price = action.payload.price;
      }
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
          item: {
            ...action.payload,
            price
          },
          quantity: 1
        }]
      }
      state.totalItems = state.totalItems + 1;
      state.sum = state.sum + price;
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
    },
    cleanCart: (state) => {
      state.loading = initialState.loading;
      state.purchases = [];
      state.sum = 0;
      state.totalItems = 0;
      localStorage.removeItem('cart');
      state.isPromo = false;
      state.selectedPromo = '';
    },
    setPromo: (state, action) => {
      const newItems = state.purchases.map((p) => {
        if (p.item.hasDiscount) {
          return {
            ...p,
            item: {
              ...p.item,
              price: Math.floor(countPriceWithPromoAndDiscount(p.item.price, p.item.discount))
            }
          }
        } else {
          return {
            ...p,
            item: {
              ...p.item,
              price: Math.floor(countPriceWithDiscount(p.item.price, 10))
            }
          }
        }
      })
      state.sum = newItems.reduce((acc, cur) => acc + cur.item.price, 0);
      state.purchases = newItems;
      state.isPromo = true;
      state.selectedPromo = action.payload;
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


export const { addItemToCart, setCart, increaseQuantity, decreaseQuantity, removeItem, cleanCart, setPromo } = cartSlice.actions;

export default cartSlice.reducer;