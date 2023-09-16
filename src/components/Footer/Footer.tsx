import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link
          to='/home-scape-store/about'
          className={styles.link}
        >
          About us
        </Link>
        <Link
          to='/home-scape-store/all'
          className={styles.link}
        >
          Catalog
        </Link>
        <Link
          to='/home-scape-store/contacts'
          className={styles.link}
        >
          Contacts
        </Link>
      </div>
      <p className={styles.warning}>
        HomeScape x 2023
      </p>
      <p className={styles.warning}>
        All photo and video materials belong to their owners and are used for demonstration purposes only.
      </p>
    </footer>
  );
}

export default Footer;