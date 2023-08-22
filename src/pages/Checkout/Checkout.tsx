import React from 'react';
import Form from '../../components/Form/Form';
import styles from './Checkout.module.css'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import CheckoutSelection from '../../components/CheckoutSelection/CheckoutSelection';
import Summary from '../../components/Summary/Summary';
import { useAppSelector } from '../../hooks/useAppSelector';

const steps = [1, 2, 3];

const Checkout = () => {

  const { step } = useAppSelector((store) => store.form);
  const dispatch = useAppDispatch();


  return (
    <section className={styles.checkout}>
      <div className={styles.steps}>
        <div className={styles.line} style={{ visibility: 'hidden' }} />
        {
          steps.map((s) => <div
            key={s}
            className={styles.wrapper}
          >
            <div
              className={`${styles.step}
            ${step === s ? styles.step_active : ''}
            ${step > s ? styles.step_previous : ''}`
              }
            >
              <p className={styles.step_text}>
                {s}
              </p>
            </div>
            {
              s !== steps.length && <div className={styles.line} />
            }
          </div>
          )
        }
      </div>
      {
        step === 1 && <Form />
      }
      {
        step === 2 && <CheckoutSelection />
      }
      {
        step === 3 && <Summary />
      }
    </section>
  );
}

export default Checkout;