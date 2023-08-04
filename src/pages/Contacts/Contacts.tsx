import styles from './Contacts.module.css'

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2 className={styles.title}>
        Contacts
      </h2>
      <ul className={styles.information}>
        <li className={styles.block}>
          <p className={styles.block_title}>
            Call us or send an email:
          </p>
          <p className={styles.block_text}>
            Phone: +123 466 567 78
          </p>
          <p className={styles.block_text}>
            Email: hello@company.com
          </p>
        </li>
        <li className={styles.block}>
          <p className={styles.block_title}>
            Come to see our office:
          </p>
          <p className={styles.block_text}>
            Blue Gardens st., 23a
          </p>
        </li>
        <li className={styles.block}>
          <p className={styles.block_title}>
            How to get here:
          </p>
          <p className={styles.block_text}>
            Take the ring and drive to the south, then turn left to the 45th highway. It will be the 43rd km. Go straight for 3 kilometers and you will see the Blue Gardens street.
          </p>
        </li>
      </ul>
      MAP
    </section>
  );
}

export default Contacts;