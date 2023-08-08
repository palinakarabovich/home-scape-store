import { Link, useParams } from 'react-router-dom';
import styles from './Product.module.css'
import React from 'react';
import { countPriceWithDiscount } from '../../utils/countPrice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { cleanSelectedProduct, fetchProductById } from '../../redux/slices/selectedProductSlice';

const Product = () => {

  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { selectedProduct, loading } = useAppSelector((store) => store.selectedProduct)
  const [descriptionClicked, setDescriptionClicked] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (productId) {
      dispatch(fetchProductById({ productId }))
    }
    return () => {
      dispatch(cleanSelectedProduct())
    }
  }, [])

  const handleDescriptionClick = () => {
    setDescriptionClicked(!descriptionClicked)
  }

  return (
    <>
      {
        loading.status && !loading.success
          ?
          <>Loading</>
          : <section className={styles.product}>
            <div className={styles.links}>
              <Link
                to={`/${selectedProduct?.category}`}
                className={styles.link}
              >
                {selectedProduct?.category} &#8594;
              </Link>
              <Link
                to={`/${selectedProduct?.subcategory}`}
                className={styles.link}
              >
                {selectedProduct?.subcategory} &#8594;
              </Link>
              <Link
                to={`/${selectedProduct?.category}/${selectedProduct?.id}`}
                className={styles.link}
              >
                {selectedProduct?.name}
              </Link>
            </div>
            <article className={styles.card}>
              <div className={styles.slider}>
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.description}>
                <h2 className={styles.title}>{selectedProduct?.name}</h2>
                <p className={styles.text}>{selectedProduct?.description}</p>
                <h3
                  className={`${styles.title} ${styles.title_clickable}`}
                  onClick={handleDescriptionClick}
                >
                  Additional info 	&#9660;
                </h3>
                <p
                  className={`${styles.text} ${styles.text_additional} ${descriptionClicked ? styles.text_additional_clicked : ''}`}
                  onClick={handleDescriptionClick}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem cumque maiores adipisci dolorum, consequatur voluptatem suscipit, excepturi esse voluptatum amet neque culpa molestias consectetur voluptas distinctio dicta odio dolores quibusdam.
                </p>
                <div className={styles.price}>
                  <p className={`${styles.number} ${selectedProduct?.discount > 0 ? styles.number_with_discount : ''}`}>
                    €{selectedProduct?.price}
                  </p>
                  {
                    selectedProduct.discount !== 0 &&
                    <p className={styles.discount}>
                      €{countPriceWithDiscount(selectedProduct?.price, selectedProduct?.discount)}
                    </p>
                  }
                </div>
                <button
                  type='button'
                  className={styles.button}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          </section>
      }
    </>
  );
}

export default Product;