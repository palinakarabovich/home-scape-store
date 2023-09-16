import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
  return (
    <section className={styles.page}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.warning}>Page does not exist</p>
      <Link
        to='/home-scape-store/all'
        className={styles.link}
      >
        Back to Catalog &#8594;
      </Link>
    </section>
  );
}

export default PageNotFound;