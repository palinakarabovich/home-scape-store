import React from 'react';
import styles from './App.module.css'
import Header from '../Header/Header';
import MainPage from '../../pages/Main/MainPage';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
