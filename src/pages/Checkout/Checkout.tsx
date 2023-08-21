import React from 'react';
import Form from '../../components/Form/Form';
import styles from './Checkout.module.css'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { savePersonalData } from '../../redux/slices/formSlice';
import CheckoutSelection from '../../components/CheckoutSelection/CheckoutSelection';
import Summary from '../../components/Summary/Summary';

const steps = [1, 2, 3];

const Checkout = () => {

  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({});
  const dispatch = useAppDispatch();

  const handleStepForward = () => {
    if (step === 1) {
      dispatch(savePersonalData(form));
    }
    setStep((pr) => pr + 1)
  }

  const handleStepBack = () => {
    setStep((pr) => pr - 1)
  }

  return (
    <section className={styles.checkout}>
      <div className={styles.steps}>
        <div className={styles.line} style={{visibility: 'hidden'}} />
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
        step === 1 && <Form form={form} setForm={setForm} />
      }
      {
        step === 2 && <CheckoutSelection />
      }
      {
        step === 3 && <Summary />
      }
      <div className={styles.group}>
        {
          step > 1 ? <button
            className={styles.button}
            onClick={handleStepBack}
          > &#8592; previous step</button>
            : <button className={styles.button}>&#8592; back to cart</button>
        }
        {
          step === steps.length ? <button className={styles.button_classic}>Pay</button>
            : <button
              className={styles.button}
              onClick={handleStepForward}
            >next step &#8594;</button>
        }
      </div>
    </section>
  );
}

export default Checkout;