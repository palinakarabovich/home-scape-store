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
import Loader from "../components/Loader/Loader";
import ModalOverlay from "../components/ModalOverlay/ModalOverlay";
import ProductImage from "../components/ProductImage/ProductImage";
import Sale from "./Sale/Sale";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import ThankYou from "./ThankYou/ThankYou";

const loaderStyles = {
  width: '100%',
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const Router = () => {

  const { categoriesRoutes, loading } = useAppSelector((store) => store.categories)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [])

  return (
    <>
      {
        loading.success && !loading.status
          ? <Routes>
            <Route
              path='/home-scape-store/'
              element={<MainPage />} />
            {categoriesRoutes.map((r) => (
              <Route
                path={r.url}
                key={r.url}
                element={<Catalog
                  type={r.name.toLowerCase()}
                />
                }
              >
              </Route>
            ))
            }
            <Route path={`/home-scape-store/all/:productId`} element={<Product />}>
              <Route path={`:imageId`} element={<ModalOverlay>
                <ProductImage />
              </ModalOverlay>} />
            </Route>
            <Route path='/home-scape-store/about' element={<About />} />
            <Route path='/home-scape-store/sale' element={<Sale />} />
            <Route path='/home-scape-store/contacts' element={<Contacts />} />
            <Route path='/home-scape-store/cart' element={<Cart />} />
            <Route path='/home-scape-store/checkout' element={<Checkout />} />
            <Route path='/home-scape-store/thank-for-you-order' element={<ThankYou />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          : <div style={loaderStyles} >
            <Loader />
          </div>
      }
    </>
  );
}

export default Router;