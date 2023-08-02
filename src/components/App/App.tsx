import React from 'react';
import styles from './App.module.css'
import Header from '../Header/Header';
import Slider from '../Slider/Slider';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Slider />
    </div>
  );
}

export default App;
