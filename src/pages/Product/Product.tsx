import { Link, useLocation, useParams } from 'react-router-dom';
import styles from './Product.module.css'
import React from 'react';
import productsData from '../../assets/products';
import { IProduct } from '../../@types/types';
import PageNotFound from '../PageNotFound/PageNotFound';
import { countPriceWithDiscount } from '../../utils/countPrice';

const initialState: IProduct = {
  name: '',
  description: '',
  price: 0,
  discount: 0,
  subcategory: '',
  category: '',
  image: '',
  id: 0
}

const Product = () => {

  const { productId } = useParams();
  const { pathname } = useLocation();
  const [product, setProduct] = React.useState<IProduct>(initialState);
  const [isPathCorrect, setPathCorrect] = React.useState(false);
  const [descriptionClicked, setDescriptionClicked] = React.useState<boolean>(false);

  React.useEffect(() => {
    const selectedProduct = productsData.find((p) => p.id === Number(productId));
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [])

  React.useEffect(() => {
    const path = pathname.split('/');
    if (path[1] === product.category) {
      setPathCorrect(true);
    }
  }, [product])

  const handleDescriptionClick = () => {
    setDescriptionClicked(!descriptionClicked)
  }

  return (
    <>
      {
        isPathCorrect
          ?
          <section className={styles.product}>
            <div className={styles.links}>
              <Link
                to={`/${product.category}`}
                className={styles.link}
              >
                {product.category} &#8594;
              </Link>
              <Link
                to={`/${product.subcategory}`}
                className={styles.link}
              >
                {product.subcategory} &#8594;
              </Link>
              <Link
                to={`/${product.category}/${product.id}`}
                className={styles.link}
              >
                {product.name}
              </Link>
            </div>
            <article className={styles.card}>
              <div className={styles.slider}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.description}>
                <h2 className={styles.title}>{product.name}</h2>
                <p className={styles.text}>{product.description}</p>
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
                  <p className={`${styles.number} ${product.discount > 0 ? styles.number_with_discount : ''}`}>
                    €{product.price}
                  </p>
                  {
                    product.discount !== 0 &&
                    <p className={styles.discount}>
                      €{countPriceWithDiscount(product.price, product.discount)}
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
          : <PageNotFound />
      }
    </>
  );
}

export default Product;