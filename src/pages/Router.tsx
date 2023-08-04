import { Route, Routes } from "react-router-dom";
import MainPage from "./Main/MainPage";
import Catalog from "./Catalog/Catalog";
import catalogRoutes from "../routes/catalogRoutes";
import Intro from "../components/Intro/Intro";
import Product from "./Product/Product";
import { productTypes } from "../@types/enums";
import PageNotFound from "./PageNotFound/PageNotFound";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainPage />} />
      {
        catalogRoutes.map((r) => (
          <Route
            path={r.url}
            key={r.url}
            element={<Catalog
              type={r.type}
              category={r.category}
              subcategory={r.subcategory}
            />
            }
          >

          </Route>
        ))
      }
      <Route path={`/${productTypes.accessories}/:productId`} element={<Product />} />
      <Route path={`/${productTypes.furniture}/:productId`} element={<Product />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;