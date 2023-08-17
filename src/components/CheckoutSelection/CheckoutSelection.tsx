import React from 'react';
import styles from './CheckoutSelection.module.css'
import { payments } from '../../assets/paymentMethods';
import { deliveries } from '../../assets/deliveries';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { saveDelivery, savePaymentMethod } from '../../redux/slices/formSlice';

const CheckoutSelection = () => {

  const [payment, setPayment] = React.useState<number>(-1);
  const [delivery, setDelivery] = React.useState<number>(-1);
  const dispatch = useAppDispatch();

  const handleDeliveryClick = (index: number) => {
    setDelivery(index);
    dispatch(saveDelivery(index));
  }

  const handlePaymentClick = (index: number) => {
    setPayment(index);
    dispatch(savePaymentMethod(index));
  }

  return (
    <section className={styles.selection}>
      <h2 className={styles.title}>
        Select your payment method and delivery:
      </h2>
      <div className={styles.options}>
        <div className={styles.group}>
          {
            payments.map((p, index) => <div
              className={`${styles.container} ${payment === index ? styles.container_checked : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                handlePaymentClick(index)
              }}
              key={p.name}
            >
              <input
                type='checkbox'
                id={p.name}
                className={styles.checkbox}
                checked={payment === index ? true : false}
                onChange={(e) => {
                  e.stopPropagation()
                  handlePaymentClick(index)
                }}
              />
              <div className={styles.icon} />
              <label
                htmlFor={p.name}
                className={styles.label}
              >
                {p.name}
              </label>
              {
                p.images.map((i) => <img
                  src={i}
                  className={styles.image}
                  alt={p.name}
                />)
              }
            </div>)
          }
        </div>
        <div className={styles.group}>
          {
            deliveries.map((d, index) => <div
              className={`${styles.container} ${delivery === index ? styles.container_checked : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleDeliveryClick(index)
              }}
              key={d.name}
            >
              <input
                type='checkbox'
                id={d.name}
                className={styles.checkbox}
                checked={delivery === index ? true : false}
                onChange={(e) => {
                  e.stopPropagation();
                  handleDeliveryClick(index)
                }}
              />
              <div className={styles.icon} />
              <label
                htmlFor='next-day'
                className={styles.label}
              >
                {d.name}
              </label>
              <p className={styles.text}>{d.duration}</p>
              <p className={styles.price}>{d.price === 0 ? 'FREE' : `+${d.price} €`}</p>
            </div>)
          }
        </div>
      </div>
    </section>
  );
}

export default CheckoutSelection;