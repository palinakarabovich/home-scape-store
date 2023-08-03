import styles from './Subscription.module.css'

const Subscription = () => {
  return (
    <section className={styles.subscription}>
      <h2 className={styles.title}>Subscribe to our mailing list</h2>
      <p className={styles.text}>
        We will send you news about the shop, fresh deliveries, and other info. Join our united family!
      </p>
      <form
        className={styles.form}>
        <input
          type='email'
          className={styles.input}
        />
        <button
          type='submit'
          className={styles.button}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Subscription;