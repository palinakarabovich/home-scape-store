import React from 'react';
import styles from './OrderOptions.module.css'
import { payments } from '../../assets/paymentMethods';
import { deliveries } from '../../assets/deliveries';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { makeStepForward, saveDelivery, savePaymentMethod } from '../../redux/slices/formSlice';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IPayment } from '../../@types/types';

const OrderOptions = () => {

  const [paymentState, setPayment] = React.useState<number>(-1);
  const [deliveryState, setDelivery] = React.useState<number>(-1);
  const dispatch = useAppDispatch();
  const [error, setError] = React.useState<string>('');

  const { delivery, payment } = useAppSelector((store) => store.form);

  React.useEffect(() => {
    if (delivery?.name.length > 0 && payment?.name.length > 0) {
      const selectedPayment = payments.map((p) => p.name).indexOf(payment.name);
      const selectedDelivery = deliveries.map((d) => d.name).indexOf(delivery.name);
      setPayment(selectedPayment);
      setDelivery(selectedDelivery);
    }
  }, [])

  const handleDeliveryClick = (index: number) => {
    if (error === 'Choose the delivery option') {
      setError('');
    }
    setDelivery(index);
    dispatch(saveDelivery(index));
  }

  const handlePaymentClick = (index: number) => {
    if (error === 'Choose the payment option') {
      setError('')
    }
    setPayment(index);
    dispatch(savePaymentMethod(index));
  }

  const handelForwardClick = () => {
    if (deliveryState === -1 && paymentState === -1) {
      setError('Choose the best options for you first')
    } else if (deliveryState === -1) {
      setError('Choose the delivery option')
    } else if (paymentState === -1) {
      setError('Choose the payment option')
    } else {
      dispatch(makeStepForward());
      setError('');
    }
  }

  return (
    <section className={styles.selection}>
      <h2 className={styles.title}>
        Select your payment method and delivery:
      </h2>
      <p className={styles.error}>{error}</p>
      <div className={styles.options}>
        <div className={styles.group}>
          {
            payments.map((p, index) => <div
              className={`${styles.container} ${paymentState === index ? styles.container_checked : ''}`}
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
                checked={paymentState === index ? true : false}
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
              className={`${styles.container} ${deliveryState === index ? styles.container_checked : ''}`}
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
                checked={deliveryState === index ? true : false}
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
      <ButtonsGroup handleStepForward={handelForwardClick} />
    </section>
  );
}

export default OrderOptions;