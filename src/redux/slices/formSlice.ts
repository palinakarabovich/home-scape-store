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
  step: number
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
  },
  step: -1
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    startCheckout: (state) => {
      state.step = 1;
    },
    savePersonalData: (state, action) => {
      state.form = action.payload;
      localStorage.setItem('form', JSON.stringify(action.payload))
    },
    saveDelivery: (state, action) => {
      state.delivery = deliveries[action.payload];
      localStorage.setItem('delivery', action.payload)
    },
    savePaymentMethod: (state, action) => {
      state.payment = payments[action.payload];
      localStorage.setItem('payment', action.payload)
    },
    makeStepForward: (state) => {
      state.step = state.step + 1;
    },
    makeStepBack: (state) => {
      state.step = state.step - 1;
    },
    resetForm: (state) => {
      state.delivery = initialState.delivery;
      state.form = initialState.form;
      state.payment = initialState.payment;
      state.step = -1;
      localStorage.removeItem('payment');
      localStorage.removeItem('delivery');
      localStorage.removeItem('form');
    }
  },
})


export const { savePersonalData, saveDelivery, savePaymentMethod, makeStepForward, makeStepBack, startCheckout, resetForm } = formSlice.actions;

export default formSlice.reducer;