import { Link } from "react-router-dom";
import styles from './CategoriesPreview.module.css'
import { useAppSelector } from "../../hooks/useAppSelector";

const CategoriesPreview = () => {

  const {categories} = useAppSelector((store) => store.categories)
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