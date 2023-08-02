import React from 'react';
import styles from './App.module.css'
import Header from '../Header/Header';
import MainPage from '../../pages/Main/MainPage';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
