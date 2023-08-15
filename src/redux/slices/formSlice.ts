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
    setValue: (state, action) => {
      state.form[action.payload.type] = action.payload.value;
    },
  },
})


export const { setValue } = formSlice.actions;

export default formSlice.reducer;