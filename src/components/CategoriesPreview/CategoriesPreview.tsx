import categories from "../../assets/categories";
import styles from './CategoriesPreview.module.css'

const CategoriesPreview = () => {
  return (
    <section className={styles.categories}>
      {
        categories.map((c, index) => (
          <div
            className={styles.card}
            style={{ backgroundImage: `url('${c.image}')` }}
            key={index}
          >
            <p className={styles.name}>
              {c.name}
            </p>
          </div>
        ))
      }
    </section>
  );
}

export default CategoriesPreview;