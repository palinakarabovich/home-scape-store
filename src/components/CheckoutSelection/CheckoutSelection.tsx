import React from 'react';
import styles from './CheckoutSelection.module.css'
import { payments } from '../../assets/paymentMethods';
import { deliveries } from '../../assets/deliveries';

const CheckoutSelection = () => {

  const [payment, setPayment] = React.useState<number>(-1);
  const [delivery, setDelivery] = React.useState<number>(-1);

  const handleDeliveryClick = (index: number) => {
    setDelivery(index);
  }

  const handlePaymentClick = (index: number) => {
    setPayment(index);
  }

  return (
    <section className={styles.selection}>
      <h2 className={styles.title}>
        Select your payment method and delivery:
      </h2>
      <div className={styles.options}>
        <div className={styles.group}>
          {
            payments.map((p, index) => <div className={`${styles.container} ${payment === index ? styles.container_checked : ''}`} onClick={() => handlePaymentClick(index)}>
              <input type='checkbox' id={p.name} className={styles.checkbox} checked={payment === index ? true : false}/>
              <div className={styles.icon} />
              <label htmlFor={p.name} className={styles.label}>{p.name}</label>
              {
                p.images.map((i) => <img src={i} className={styles.image} alt={p.name} />)
              }
            </div>)
          }
        </div>
        <div className={styles.group}>
          {
            deliveries.map((d, index) => <div className={`${styles.container} ${delivery === index ? styles.container_checked : ''}`} onClick={() => handleDeliveryClick(index)} >
              <input type='checkbox' id={d.name} className={styles.checkbox} checked={delivery === index ? true : false} />
              <div className={styles.icon} />
              <label htmlFor='next-day' className={styles.label}>{d.name}</label>
              <p className={styles.text}>{d.duration}</p>
              <p className={styles.price}>{d.price === "FREE" ? d.price : `+${d.price} €`}</p>
            </div>)
          }
        </div>
      </div>
    </section>
  );
}

export default CheckoutSelection;