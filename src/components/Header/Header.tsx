import React from 'react';
import styles from './Header.module.css';
import { cartIcon } from '../../utils/icons';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={`${styles.link} ${styles.link_active}`}>SALE</a>
        <a className={styles.link}>Furniture</a>
        <a className={styles.link}>Accessories</a>
        <a className={styles.link}>About</a>
        <a className={styles.link}>Contacts</a>
      </nav>
      <div className={styles.cart}>
        <div className={styles.icon}>
          {cartIcon}
        </div>
        <div className={styles.quantity}>
          2
        </div>
      </div>
    </header>
  );
};

export default Header;
