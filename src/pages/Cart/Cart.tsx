import { Link } from 'react-router-dom';
import styles from './Cart.module.css'
import { useAppSelector } from '../../hooks/useAppSelector';

const Cart = () => {

  const { purchases, sum } = useAppSelector((store) => store.cart);


  return (
    <>
    {
      purchases.length !== 0
      ?     <section className={styles.cart}>
      <h2 className={styles.title}>Your purchase{purchases.length > 1 && 's'}:</h2>
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
            <div className={styles.icon}>
              <p className={styles.mark}>
                -
              </p>
            </div>
            <p className={styles.quantity}>{product.quantity}</p>
            <div className={styles.icon}>
              <p className={styles.mark}>
                +
              </p>
            </div>
          </div>
          <p className={styles.price}>{product.item.price * product.quantity} €</p>
        </li>)}
      </ul>
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
        <button className={styles.button}>Checkout</button>
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