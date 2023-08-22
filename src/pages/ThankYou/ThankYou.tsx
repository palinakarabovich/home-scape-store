import styles from './ThankYou.module.css'
import image from '../../images/thank-you.jpg'

const ThankYou = () => {
  return (
    <section className={styles.thanks}>
      <h2 className={styles.title}>
        Your order is on its way! &#x1F697;
      </h2>
      <p className={styles.text}>
        You can not pay for real, but thank you for testing my application!
      </p>
      <img
        className={styles.image}
        src={image}
        alt='me' />
    </section>
  );
}

export default ThankYou;