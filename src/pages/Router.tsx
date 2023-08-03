import { Route, Routes } from "react-router-dom";
import MainPage from "./Main/MainPage";
import Catalog from "./Catalog/Catalog";
import catalogRoutes from "../routes/catalogRoutes";

const Router = () => {
  return (
    <Routes>
      <Route
      path='/'
      element={<MainPage />}
      />
      {
        catalogRoutes.map((r) => (
          <Route
            path={r.url}
            element={<Catalog
              type={r.type}
              category={r.category}
              subcategory={r.subcategory}
            />}
          />
        ))
      }
    </Routes>
  );
}

export default Router;