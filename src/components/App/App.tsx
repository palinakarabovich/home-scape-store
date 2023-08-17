import React from 'react';
import styles from './App.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../pages/Router';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCart } from '../../redux/slices/cartSlice';

const App = () => {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const cartObject = JSON.parse(cart);
      dispatch(setCart(cartObject))
    }
  }, [])

  return (
    <div className={styles.app}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
