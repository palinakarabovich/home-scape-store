import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.background}>
        <h2 className={styles.page}>
          about us
        </h2>
      </div>
      <div className={styles.introduction}>
        <div className={styles.container}>
          <p className={styles.text_main}>
            At HomeScape Store, we believe that furniture plays a vital role in creating an inviting and comfortable environment for your living spaces, and our wide range of exquisite pieces caters to every taste and lifestyle.
          </p>
        </div>
      </div>
      <div className={styles.values}>
        <div className={styles.container}>
          <h3 className={styles.title}>
            Our Values:
          </h3>
          <ul className={styles.list}>
            <li className={styles.card}>
              <p className={styles.card_title}>
                Quality
              </p>
              <div className={styles.line} />
              <p className={styles.card_text}>
                We are committed to offering only the highest quality furniture crafted with premium materials to ensure long-lasting durability and timeless appeal.
              </p>
            </li>
            <li className={styles.card}>
              <p className={styles.card_title}>
                Design Excellence
              </p>
              <div className={styles.line} />
              <p className={styles.card_text}>
                Our passion for innovative design drives us to curate a collection of furniture that is not only aesthetically pleasing but also functional and practical.              </p>
            </li>
            <li className={styles.card}>
              <p className={styles.card_title}>
                Customer Satisfaction
              </p>
              <div className={styles.line} />
              <p className={styles.card_text}>
                Our customers are at the heart of everything we do. We prioritize their needs and strive to exceed their expectations with personalized service and tailored furniture solutions.              </p>
            </li>
            <li className={styles.card}>
              <p className={styles.card_title}>
                Sustainability
              </p>
              <div className={styles.line} />
              <p className={styles.card_text}>
                We are conscious of our impact on the environment, and our efforts extend to offering sustainable and eco-friendly furniture options that contribute to a greener planet.              </p>
            </li>
            <li className={styles.card}>
              <p className={styles.card_title}>
                Community
              </p>
              <div className={styles.line} />
              <p className={styles.card_text}>
                HomeScape Store believes in building a strong sense of community, supporting local artisans and collaborating with charities to give back to society.              </p>
            </li>
            <li className={styles.card}>
              <p className={styles.card_title}>
                Creativity
              </p>
              <div className={styles.line} />
              <p className={styles.card_text}>
                We believe that furniture shopping should be an exciting and imaginative process, where you can explore diverse styles and combinations to craft a truly unique and personalized space.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.story}>
        <div className={styles.container}>
          <h3 className={styles.title}>
            Our Story:
          </h3>
          <p className={styles.text_main}>
            After graduation, Sarah and Michael worked for different interior design firms, gaining valuable experience and knowledge in the industry. However, they always felt a longing to create something of their own, a brand that embodied their creative vision and commitment to customer satisfaction. With this burning ambition, they embarked on their entrepreneurial journey, combining their design expertise and business acumen to establish HomeScape Store.
          </p>
          <div className={styles.photo_section}>
            <div className={styles.person}>
              <img className={styles.image} src='https://thumb.tildacdn.com/tild3930-3061-4663-b866-303932323064/-/resize/240x/-/format/webp/ed64f49c9f2a434da624.jpg' alt='' />
              <p className={styles.person_name}>Michael</p>
              <div className={styles.line} />
              <p className={styles.person_occupation}>Founder</p>
            </div>
            <div className={styles.person}>
              <img className={styles.image} src='https://thumb.tildacdn.com/tild6665-6366-4235-a137-643732633435/-/resize/240x/-/format/webp/0b32aaf957ff40c7a9c6.jpg' alt='' />
              <p className={styles.person_name}>Sarah</p>
              <div className={styles.line} />
              <p className={styles.person_occupation}>Art director</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ending}>
        <div className={styles.container}>
          <p className={styles.text_ending}>
            Whether you are searching for the perfect statement piece to elevate your living room or a complete home makeover, HomeScape Store is here to make your furniture shopping experience enjoyable and memorable. Step into our store, and let us help you create the home of your dreams.
          </p>
          <h2 className={styles.page}>
            HomeScape Store
          </h2>
        </div>
      </div>

    </section>
  );
}

export default About;