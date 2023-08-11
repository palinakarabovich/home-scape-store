import { Link } from 'react-router-dom';
import styles from './Cart.module.css'

const cart = {
  products: [{
    item: {
      name: "White coffee table",
      description: "A small modern lightweight coffee table by no.design assembles with just one screw.",
      price: 980,
      hasDiscount: false,
      discount: 0,
      subcategory: "table",
      images: [
        "https://static.tildacdn.com/tild6435-3461-4939-b535-383930343335/23737188794_0fef211af7_o.jpg"
      ],
      category: "furniture",
      id: "9c9dec76-35e2-11ee-be56-0242ac120002"
    },
    quantity: 1,
  },
  {
    item: {
      name: "Ceramic vase",
      description: "A sweet pink ceramic vase from the new collection of ceramics by Benjamin Hubert.",
      price: 98,
      hasDiscount: false,
      discount: 0,
      subcategory: "vase",
      images: [
        "https://static.tildacdn.com/tild3539-3934-4464-a461-646430643539/15420098632_b629a34134_o.jpg"
      ],
      category: "accessories",
      id: "f6a4456c-35e2-11ee-be56-0242ac120002"
    },
    quantity: 2,
  }],
  sum: 1000,
  discount: 0
}

const Cart = () => {
  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your purchases:</h2>
      <ul className={styles.list}>
        {cart.products.map((product) => <li className={styles.card}>
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
        <p className={styles.text}>{cart.sum} €</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Back to Catalog</button>
        <button className={styles.button}>Checkout</button>
      </div>
    </section>
  );
}

export default Cart;