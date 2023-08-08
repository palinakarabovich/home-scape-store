import React from 'react';
import styles from './App.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Router from '../../pages/Router';

const App = () => {

  return (
    <div className={styles.app}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
