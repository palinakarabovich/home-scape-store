import React from 'react';
import styles from './Header.module.css';
import { CLOSE_ICON, MENU_ICON, cartIcon } from '../../utils/icons';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

const Header = () => {

  const { categories } = useAppSelector((store) => store.categories);
  const { pathname } = useLocation();
  const { totalItems } = useAppSelector((store) => store.cart);
  const [isMenuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [isCatalogOpen, setCatalogOpen] = React.useState<boolean>(false);

  const closeMenu = () => {
    if(isCatalogOpen){
      setCatalogOpen(false);
    }
    if(isMenuOpen){
      setMenuOpen(false);
    }
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to='/home-scape-store/sale' className={`${styles.link} ${styles.link_active}`}>SALE</Link>
        <Link className={styles.link} to='/home-scape-store/'>Home</Link>
        <div className={styles.catalog}>
          <p className={styles.link}>Catalog</p>
          <ul className={styles.categories}>
            <li
              className={styles.category}
              key={'all'}
            >
              <Link to='/home-scape-store/all' className={styles.link}>ALL</Link>
            </li>
            {categories.map((c) => (
              <li
                className={styles.category}
                key={c.url}
              >
                <Link
                  to={c.url}
                  className={styles.link}
                >
                  {c.name}
                </Link>
                <ul className={styles.subcategories}>
                  {c.subcategories?.map((sub) => (
                    <li
                      className={styles.subcategory}
                      key={sub.name}
                    >
                      <Link
                        to={`${c.url}?subcategory=${sub.name.toLowerCase()}`}
                        className={styles.link}
                      >
                        {sub.name.toLowerCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <Link
          className={styles.link}
          to='/home-scape-store/about'
        >
          About us
        </Link>
        <Link
          to='/home-scape-store/contacts'
          className={styles.link}
        >
          Contacts
        </Link>
      </nav>
      <Link
        to='/home-scape-store/cart'
        onClick={closeMenu}
      >
        <div
          className={`${isMenuOpen ? styles.cart_menu_open : styles.cart}`}
          style={pathname.includes('cart') && !isMenuOpen ? {
            display: 'none'
          } : {}}
        >
          <div className={styles.icon}>
            {cartIcon}
          </div>
          {
            totalItems > 0 && <div className={styles.quantity}>
              {totalItems}
            </div>
          }
        </div>
      </Link>

      <div className={styles.burger_menu}>
        <div
          className={styles.menu_icon}
          onClick={() => setMenuOpen(true)}
        >
          {MENU_ICON}
        </div>
      </div>
      {
        isMenuOpen && <div className={styles.background} />
      }
      <nav className={`${styles.nav_mobile} ${isMenuOpen ? styles.nav_mobile_open : ''}`}>
        <div
          className={styles.close_icon}
          onClick={closeMenu}
        >{CLOSE_ICON}</div>
        <Link
          to='/home-scape-store/sale'
          className={`${styles.link} ${styles.link_active}`}
          onClick={closeMenu}
        >
          SALE
        </Link>
        <Link
          className={styles.link}
          to='/home-scape-store/'
          onClick={closeMenu}
        >
          Home</Link>
        <p
          className={styles.link}
          onClick={() => setCatalogOpen(!isCatalogOpen)}
        >
          Catalog {isCatalogOpen ? `▲` : `▼`}
        </p>
        {
          isCatalogOpen && <div className={styles.submenu}>
            {categories.map((c) => <Link
              to={c.url}
              className={styles.link}
              onClick={closeMenu}
            >
              {c.name}
              <div className={styles.submenu}>
                {
                  c.subcategories.map((sub) => <Link
                    to={`${c.url}?subcategory=${sub.name.toLowerCase()}`}
                    className={styles.link}
                    onClick={closeMenu}
                  >
                    {sub.name.toLowerCase()}
                  </Link>)
                }
              </div>
            </Link>)}
          </div>
        }
        <Link
          className={styles.link}
          to='/home-scape-store/about'
          onClick={closeMenu}
        >
          About us
        </Link>
        <Link
          to='/home-scape-store/contacts'
          className={styles.link}
          onClick={closeMenu}
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
