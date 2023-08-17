import React from 'react';
import Form from '../../components/Form/Form';
import styles from './Checkout.module.css'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { savePersonalData } from '../../redux/slices/formSlice';
import CheckoutSelection from '../../components/CheckoutSelection/CheckoutSelection';

const steps = [1, 2, 3];

const Checkout = () => {

  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({});
  const dispatch = useAppDispatch();

  const handleStepForward = () => {
    if(step === 1){
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
        {
          steps.map((s) => <>
            <div
              className={`${styles.step}
            ${step === s ? styles.step_active : ''}
            ${step > s ? styles.step_previous : ''}`
              }
              key={s}
            >
              <p className={styles.step_text}>
                {s}
              </p>
            </div>
            <div
              className={styles.line}
              style={s === steps.length ? { display: 'none' } : {}}
            />
          </>
          )
        }
      </div>
      {
        step === 1 && <Form form={form} setForm={setForm}/>
      }
      {
        step === 2 && <CheckoutSelection />
      }
      {
        step === 3 && <>Step 3</>
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
          step === steps.length ? <button className={styles.button}>pay &#8594;</button>
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