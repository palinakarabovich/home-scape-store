import Form from '../../components/Form/Form';
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <section className={styles.checkout}>
      <div className={styles.steps}>
        <div className={styles.step}>
          <p className={styles.step_text}>
            1
          </p>
        </div>
        <div className={styles.line} />
        <div className={styles.step}>
          <p className={styles.step_text}>
            2
          </p>
        </div>
        <div className={styles.line} />
        <div className={styles.step}>
          <p className={styles.step_text}>
            3
          </p>
        </div>
      </div>
      <Form />
      <div className={styles.group}>
        <button className={styles.button}>&#8592; previous step</button>
        <button className={styles.button}>next step &#8594;</button>
      </div>
    </section>
  );
}
 
export default Checkout;