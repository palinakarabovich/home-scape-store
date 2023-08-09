import { Link, useParams } from 'react-router-dom';
import styles from './Product.module.css'
import React from 'react';
import { countPriceWithDiscount } from '../../utils/countPrice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { cleanSelectedProduct, fetchProductById } from '../../redux/slices/selectedProductSlice';
import Loader from '../../components/Loader/Loader';

const Product = () => {

  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const { selectedProduct, loading } = useAppSelector((store) => store.selectedProduct)
  const [descriptionClicked, setDescriptionClicked] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState<number>(0)

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

  const handleImagePreviewClick = (index: number) => {
    setSelectedImage(index);
  }

  const handleSliderForwardClick = () => {
    setSelectedImage((pr) => pr+1)
  }

  const handleSliderBackClick = () => {
    setSelectedImage((pr) => pr-1)
  }

  return (
    <>
      {
        loading.status && !loading.success
          ? <div className={styles.container}>
            <Loader />
          </div>
          : <section className={styles.product}>
            <div className={styles.links}>
              <Link
                to={`/${selectedProduct?.category}`}
                className={styles.link}
              >
                {selectedProduct?.category} &#8594;
              </Link>
              <Link
                to={`/${selectedProduct?.category}?subcategory=${selectedProduct.subcategory}`}
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
                <div className={styles.wrapper}>
                  {
                    selectedProduct.images.length > 1
                    && <>
                      {
                      selectedImage >= 1 && <div
                      className={`${styles.icon} ${styles.icon_left}`}
                      onClick={handleSliderBackClick}
                      />
                      }
                      {
                      selectedImage !== selectedProduct.images.length - 1 && <div
                      className={`${styles.icon} ${styles.icon_right}`}
                      onClick={handleSliderForwardClick}
                      />
                      }
                    </>
                  }

                  <img
                    src={selectedProduct?.images[selectedImage]}
                    alt={selectedProduct?.name}
                    className={styles.image}
                  />
                </div>
                <div className={styles.images_container}>
                  {selectedProduct.images.length > 1 &&
                    selectedProduct?.images.map((img, index) => <img
                      src={img}
                      key={index}
                      alt={selectedProduct.name}
                      className={`${styles.image_preview} ${index === selectedImage ? styles.image_preview_active : ''}`}
                      onClick={() => handleImagePreviewClick(index)}
                    />
                    )
                  }
                </div>
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