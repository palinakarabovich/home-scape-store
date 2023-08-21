import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Summary.module.css'

const Summary = () => {

  const { form, cart } = useAppSelector((store) => store)

  return (
    <section className={styles.summary}>
      <h2 className={styles.title}>Last check</h2>
      <div className={styles.information}>
        <div className={styles.cart}>
          <h3 className={styles.category}>Your purchases:</h3>
          <ul className={styles.purchases}>
            {
              cart.purchases.map((p) => <li className={styles.card}>
                <img className={styles.image} src={p.item.images[0]} alt={p.item.name} />
                <p className={styles.name}>{p.item.name}</p>
                <p className={styles.text}>x{p.quantity}</p>
                <p className={styles.price}>{p.item.price * p.quantity} €</p>
              </li>)
            }
          </ul>
        </div>
        <div className={styles.options}>
          <div className={styles.address}>
            <h3 className={styles.category}>Your Address:</h3>
            ADDRESS
          </div>
          <div className={styles.delivery}>
            <h3 className={styles.category}>Delivery:</h3>
            DELIVERY
          </div>
          <div className={styles.address}>
            <h3 className={styles.category}>Payment method:</h3>
            PAYMENT
          </div>
        </div>
      </div>
      <div className={styles.sum}>
        <div className={styles.payment}>
          <p className={styles.text}>Delivery:</p>
          <p className={styles.number}>FREE</p>
        </div>
        <div className={styles.payment}>
          <p className={styles.text}>Total to pay:</p>
          <p className={styles.number}>1000000</p>
        </div>
      </div>
    </section>
  );
}

export default Summary;