import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICategory, ICategoryRoute, IDataLoading } from "../../@types/types";
import { CATEGORIES_URL } from "../../utils/constants";
import { createCategoriesRoutes } from "../../utils/createCategoriesList";

interface IInitialState {
  categories: Array<ICategory>,
  categoriesRoutes: Array<ICategoryRoute>,
  categoriesWithDiscount: Array<string>
  loading: IDataLoading
}

const initialState: IInitialState = {
  categories: [],
  categoriesRoutes: [],
  categoriesWithDiscount: [],
  loading: {
    status: false,
    error: false,
    success: false,
    message: ''
  }
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategoriesWithDiscount: (state, action) => {
      state.categoriesWithDiscount = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading.status = true;
      state.loading.success = false;
      state.categories = [];
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      const routes = createCategoriesRoutes(action.payload)
      state.categoriesRoutes = routes;
      state.loading.status = false;
      state.loading.success = true;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading.success = false;
      state.loading.status = false;
      state.loading.error = true;
      if(action.error.message){
        state.loading.message = action.error.message;
      }
    })
  }
})

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  try {
    const res = await fetch(CATEGORIES_URL);
    if (res.ok) {
      const categoriesData = await res.json();
      return categoriesData;
    } else {
      throw new Error(res.statusText)
    }
  } catch (err) {
    return Promise.reject(err);
  }
})


export const { setCategories, setCategoriesWithDiscount } = categoriesSlice.actions;

export default categoriesSlice.reducer;