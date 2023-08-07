import { Link } from "react-router-dom";
import categories from "../../assets/categories";
import styles from './CategoriesPreview.module.css'

const CategoriesPreview = () => {
  return (
    <section className={styles.categories}>
      {
        categories.map((c, index) => (
          <Link
            to={c.url}
            className={styles.card}
            style={{ backgroundImage: `url('${c.image}')` }}
            key={index}
          >
            <p className={styles.name}>
              {c.name}
            </p>
          </Link>
        ))
      }
    </section>
  );
}

export default CategoriesPreview;