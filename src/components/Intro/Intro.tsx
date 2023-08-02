import styles from './Intro.module.css'

const Intro = () => {
  return (
    <section className={styles.intro}>
      <h2 className={styles.moto}>
        Make your homeplace unique
      </h2>
      <p className={styles.description}>
        HomeScape store is an online store of designer furniture and home accessories.
        We sell beautiful stylish items, such as handmade crafted dishes, modern furniture, artisanal lighting, and much more.
      </p>
    </section>
  );
}

export default Intro;