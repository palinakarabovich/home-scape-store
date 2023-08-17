import { createSlice } from "@reduxjs/toolkit"
import { IDelivery, IPayment } from "../../@types/types";
import { deliveries } from "../../assets/deliveries";
import { payments } from "../../assets/paymentMethods";

interface IInitialState {
  form: {
    [key: string]: string
  },
  payment: IPayment;
  delivery: IDelivery;
}

const initialState: IInitialState = {
  form: {},
  payment: {
    name: '',
    images: []
  },
  delivery: {
    name: '',
    duration: '',
    price: 0
  }
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    savePersonalData: (state, action) => {
      state.form = action.payload;
    },
    saveDelivery: (state, action) => {
      state.delivery = deliveries[action.payload];
    },
    savePaymentMethod: (state, action) => {
      state.payment = payments[action.payload];
    }
  },
})


export const { savePersonalData, saveDelivery, savePaymentMethod } = formSlice.actions;

export default formSlice.reducer;