import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a className={styles.link}>About us</a>
        <a className={styles.link}>Catalog</a>
        <a className={styles.link}>Contacts</a>
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