import React from 'react';
import styles from './ProductImage.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import Loader from '../Loader/Loader';

const ProductImage = () => {
  const { pathname } = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(-1)
  let navigate = useNavigate();

  const { selectedProduct } = useAppSelector((store) => store.selectedProduct);

  React.useEffect(() => {
    const currentPathArray = pathname?.split('/');
    const imageIndex = Number(currentPathArray[currentPathArray.length - 1])
    setCurrentImageIndex(imageIndex)
  }, [])

  React.useEffect(() => {
    navigate(`/all/${selectedProduct.id}/${currentImageIndex}`)
  }, [currentImageIndex])

  React.useEffect(() => {
    window.addEventListener('keydown', handleArrowPress)
    return () => {
      window.removeEventListener('keydown', handleArrowPress)
    }
  });

  const handleArrowPress = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'ArrowLeft') {
      handleBackScroll()
    } else if (e.key === 'ArrowRight') {
      handleForwardScroll();
    }
  }

  const handleArrowClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, type: string) => {
    e.stopPropagation();
    if (type === 'left') {
      handleBackScroll()
    } else if (type === 'right') {
      handleForwardScroll();
    }
  }

  const handleForwardScroll = () => {
    if (selectedProduct.images.length - 1 > currentImageIndex) {
      setCurrentImageIndex((pr) => pr + 1)
    } else {
      setCurrentImageIndex(0)
    }
  }

  const handleBackScroll = () => {
    if (0 < currentImageIndex) {
      setCurrentImageIndex((pr) => pr - 1)
    } else {
      setCurrentImageIndex(selectedProduct.images.length - 1)
    }
  }

  return (
    <div className={styles.container}>
      {
        selectedProduct.images.length > 1 &&
        <>
          <div
            className={`${styles.icon} ${styles.icon_right}`}
            onClick={(e) => handleArrowClick(e, 'right')}
          />
          <div
            className={`${styles.icon} ${styles.icon_left}`}
            onClick={(e) => handleArrowClick(e, 'left')}
          />
        </>
      }
      {
        currentImageIndex !== -1
          ? <img src={selectedProduct?.images[currentImageIndex]}
            alt={selectedProduct?.name}
            className={styles.image}
          />
          : <Loader />
      }

    </div>
  );
}

export default ProductImage;