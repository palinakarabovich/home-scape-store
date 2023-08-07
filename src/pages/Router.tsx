import { Route, Routes } from "react-router-dom";
import MainPage from "./Main/MainPage";
import Catalog from "./Catalog/Catalog";
import Product from "./Product/Product";
import PageNotFound from "./PageNotFound/PageNotFound";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchCategories } from "../redux/slices/categoriesSlice";
import { useAppSelector } from "../hooks/useAppSelector";

const Router = () => {

  const { categories, categoriesRoutes, loading } = useAppSelector((store) => store.categories)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [])

  return (
    <Routes>
      <Route
        path='/'
        element={<MainPage />} />
      {loading.success ?
        categoriesRoutes.map((r) => (
          <Route
            path={r.url}
            key={r.url}
            element={<Catalog
              type={r.name}
              category={r.category}
              subcategory={r.subcategory}
            />
            }
          >

          </Route>
        ))
        : <>Loading</>
      }
      {
        categories.map((cat) => <Route path={`${cat.url}/:productId`} element={<Product />} />)
      }
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;