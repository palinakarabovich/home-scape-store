import styles from './CheckoutSelection.module.css'

const CheckoutSelection = () => {
  return (
    <section className={styles.selection}>
      <h2 className={styles.title}>
        Select your payment method and delivery:
      </h2>
      <div className={styles.group}>
      <div className={styles.container}>
          <input type='radio' name='payment' id='ideal' />
          <label htmlFor='ideal' className={styles.label}>iDEAL</label>
        </div>
        <div className={styles.container}>
          <input type='radio' name='payment' id='card' />
          <label htmlFor='card' className={styles.label}>Credit card</label>
        </div>
        <div className={styles.container}>
          <input type='radio' name='payment' id='paypal' />
          <label htmlFor='paypal' className={styles.label}>PayPal</label>
        </div>
      </div>
      <div className={styles.group}>
      <div className={styles.container}>
          <input type='radio' name='delivery' id='standsrt' />
          <label htmlFor='standart' className={styles.label}>Standart delivery</label>
          <p className={styles.text}>10-15 workdays</p>
          <p className={styles.price}>FREE</p>
        </div>
        <div className={styles.container}>
          <input type='radio' name='delivery' id='express' />
          <label htmlFor='express' className={styles.label}>Express delivery</label>
          <p className={styles.text}>5-7 workdays</p>
          <p className={styles.price}>+20 €</p>
        </div>
        <div className={styles.container}>
          <input type='radio' name='delivery' id='next-day' />
          <label htmlFor='next-day' className={styles.label}>Next-day</label>
          <p className={styles.text}>1-2 workdays</p>
          <p className={styles.price}>+50 €</p>
        </div>
      </div>
    </section>
  );
}
 
export default CheckoutSelection;