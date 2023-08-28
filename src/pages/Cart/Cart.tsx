import { Link, useNavigate } from 'react-router-dom';
import styles from './Cart.module.css'
import { useAppSelector } from '../../hooks/useAppSelector';
import { IPurchase } from '../../@types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { decreaseQuantity, increaseQuantity, removeItem, setPromo } from '../../redux/slices/cartSlice';
import { startCheckout } from '../../redux/slices/formSlice';
import React from 'react';

const Cart = () => {

  const { purchases, sum, validPromo, isPromo, selectedPromo } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const [isError, setError] = React.useState<boolean>(false);
  const [promocode, setPromocode] = React.useState<string>('');

  const handlePlusClick = (product: IPurchase) => {
    dispatch(increaseQuantity(product.item))
  }

  const handleMinusClick = (product: IPurchase) => {
    if (product.quantity >= 2) {
      dispatch(decreaseQuantity(product.item))
    }
    else {
      dispatch(removeItem(product.item))
    }
  }

  const onCheckout = () => {
    dispatch(startCheckout());
    navigate('/checkout')
  }

  React.useEffect(() => {
    if(isPromo){
      setPromocode(selectedPromo)
    }
  }, [])

  React.useEffect(() => {
    if (!isPromo && promocode !== '') {
      if (validPromo.some((v) => v === promocode)) {
        dispatch(setPromo(promocode));
        setError(false);
      } else {
        setError(true);
      }
    }
  }, [promocode])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromocode(e.target.value.toLowerCase());
  }

  return (
    <>
      {
        purchases && purchases.length !== 0
          ? <section className={styles.cart}>
            <h2 className={styles.title}>Your purchase{purchases.length > 1 && 's'}:</h2>
            {isPromo && <p className={styles.warning}>Promocode has been successfully activated!</p>}
            <ul className={styles.list}>
              {purchases.map((product) => <li
                className={styles.card}
                key={product.item.id}
              >
                <Link
                  to={`/all/${product.item.id}`}
                  className={styles.link}
                >
                  <img src={product.item.images[0]}
                    className={styles.image}
                    alt={product.item.name}
                  />
                </Link>
                <Link
                  to={`/all/${product.item.id}`}
                  className={styles.link}
                >
                  <p className={styles.name}>{product.item.name}</p>
                </Link>
                <div className={styles.group}>
                  <div
                    className={styles.icon}
                    onClick={() => handleMinusClick(product)}
                  >
                    <p className={styles.mark}>
                      -
                    </p>
                  </div>
                  <p className={styles.quantity}>{product.quantity}</p>
                  <div
                    className={styles.icon}
                    onClick={() => handlePlusClick(product)}
                  >
                    <p className={styles.mark}>
                      +
                    </p>
                  </div>
                </div>
                <p className={styles.price}>{product.item.price * product.quantity} €</p>
              </li>)}
            </ul>
            <div className={styles.promo}>
              <p className={styles.text}>PROMOCODE:</p>
              <input
                type='text'
                className={styles.input}
                value={promocode}
                onChange={handleInputChange}
                disabled={isPromo}
              />
              <p className={styles.error} style={isError ? { visibility: 'visible' } : { visibility: 'hidden' }}>No valid</p>
            </div>
            <div className={styles.info}>
              <p className={styles.text}>Total:</p>
              <p className={styles.text}>{sum} €</p>
            </div>
            <div className={styles.buttons}>
              <Link
                to={`/all`}
                className={styles.link}
              >
                Back to Catalog
              </Link>
              <button
                onClick={onCheckout}
                className={styles.button}>Checkout</button>
            </div>
          </section>
          : <section className={styles.cart_empty}>
            <h2 className={styles.title}>There is nothing here yet.</h2>
            <Link
              to={`/all`}
              className={styles.link}
            >
              &larr; Back to Catalog
            </Link>
          </section>
      }
    </>
  );
}

export default Cart;