import { createSlice } from "@reduxjs/toolkit"

interface IInitialState {
  form: {
    [key: string] : string
  },
  payment: string;
}

const initialState: IInitialState = {
  form: {},
  payment: ''
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    savePersonalData: (state, action) => {
      state.form = action.payload;
    },
  },
})


export const { savePersonalData } = formSlice.actions;

export default formSlice.reducer;