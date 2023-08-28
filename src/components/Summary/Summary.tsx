import { useAppSelector } from '../../hooks/useAppSelector';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
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
            <p className={styles.text}>{form.form.name.toUpperCase()} {form.form.surname.toUpperCase()}</p>
            <p className={styles.text}>{form.form.street} {form.form.house}</p>
            <p className={styles.text}>{form.form.city} {form.form.postcode}</p>
          </div>
          <div className={styles.delivery}>
            <h3 className={styles.category}>Delivery:</h3>
            <p className={styles.text}>{form.delivery.name.toUpperCase()}</p>
            <p className={styles.text}>{form.delivery.duration}</p>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles.category}>Contact details:</h3>
            <p className={styles.text}>{form.form.email}</p>
            <p className={styles.text}>{form.form.telephone}</p>
          </div>
          <div className={styles.address}>
            <h3 className={styles.category}>Payment method:</h3>
            <p className={styles.text}>{form.payment.name.toUpperCase()}</p>
          </div>
          {
            cart.isPromo && <div className={styles.address}>
              <h3 className={styles.category}>Promotion:</h3>
              <p className={styles.text}>CODE: {cart.selectedPromo.toLocaleUpperCase()}</p>
            </div>
          }
        </div>
      </div>
      <div className={styles.sum}>
        <div className={styles.payment}>
          <p className={styles.text}>Delivery costs:</p>
          <p className={styles.text}>{form.delivery.price === 0 ? 'FREE' : form.delivery.price}</p>
        </div>
        <div className={styles.payment}>
          <p className={styles.highlight}>Total to pay:</p>
          <p className={styles.text}>{cart.sum + form.delivery.price}</p>
        </div>
      </div>
      <ButtonsGroup />
    </section>
  );
}

export default Summary;