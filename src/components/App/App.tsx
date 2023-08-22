import React from 'react';
import styles from './App.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../pages/Router';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCart } from '../../redux/slices/cartSlice';
import { saveDelivery, savePaymentMethod, savePersonalData, startCheckout } from '../../redux/slices/formSlice';

const App = () => {

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const cartObject = JSON.parse(cart);
      dispatch(setCart(cartObject))
    }
    const form = localStorage.getItem('form');
    if(form){
      const formObj = JSON.parse(form);
      dispatch(savePersonalData(formObj));
      dispatch(startCheckout());
    }
    const delivery = localStorage.getItem('delivery')
    if(delivery){
      dispatch(saveDelivery(delivery));
    }
    const payment = localStorage.getItem('payment');
    if(payment){
      dispatch(savePaymentMethod(payment))
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
