import React from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Slider.module.css'
import { fetchProductsOnSale } from '../../redux/slices/saleSlice';
import { IProduct } from '../../@types/types';
import SliderElement from '../SliderElement/SliderElement';

const Slider = () => {

  const dispatch = useAppDispatch();
  const { products, loadingSale } = useAppSelector((store) => store.sale);
  const [counter, setCounter] = React.useState(0);
  const [elements, setElements] = React.useState<Array<IProduct>>([]);
  const [offset, setOffset] = React.useState<number>(0);
  const [transitonDuration, setTransitionDuration] = React.useState<number>(300);
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (products.length === 0)
      dispatch(fetchProductsOnSale({
        subcategory: ''
      }))
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  React.useEffect(() => {
    let interval: NodeJS.Timer;
    if (elements.length > 0) {
      interval = setInterval(showNext, 3000)
    }

    return () => {
      clearInterval(interval);
    }
  }, [elements])

  React.useEffect(() => {
    if (products.length > 0) {
      setElements([...products, products[0]])
    }
  }, [products]);

  React.useEffect(() => {
    if (counter === elements.length - 1) {
      setTimeout(() => setTransitionDuration(0), 300);
    } else {
      setTransitionDuration(300);
    }
  }, [counter])

  React.useEffect(() => {
    if (transitonDuration === 0) {
      setTimeout(() => setOffset(0), 500)
      setTimeout(() => setCounter(0), 2000)
    }
  }, [transitonDuration])

  const showNext = () => {
    setOffset((pr) => pr - windowWidth);
    setCounter((pr) => pr + 1);
  }

  const updateSize = () => {
    setWindowWidth(window.innerWidth);
  }

  return (
    <section className={styles.slider}>
      <h1 className={styles.title}>HomeScape Store</h1>
      <div className={styles.background}>
        <div className={styles.window}>
          <div
            className={styles.container}
            style={{
              transform: `translateX(${offset}px)`,
              transitionDuration: `${transitonDuration}ms`
            }}
          >
            {
              elements.length > 0 && elements.map((el) => <SliderElement {...el} />)
            }
          </div>
        </div>
        <div className={styles.counter}>
          {
            elements.map((_, index) => {
              if (index === 0) return <div className={`${styles.dot} ${counter === index || counter === elements.length - 1 ? styles.dot_active : ''}`} />
              else if (index === elements.length - 1) return <></>
              else return <div className={`${styles.dot} ${counter === index ? styles.dot_active : ''}`} />
            })
          }
        </div>
      </div>
    </section>);
}

export default Slider;