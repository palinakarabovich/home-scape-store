import React from 'react';
import styles from './Subscription.module.css'
import { useForm } from 'react-hook-form';
import { IFormValues } from './types';
import { convertErrorMessageToString } from '../../utils/convertErrorMessageToString';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { openModal } from '../../redux/slices/modalSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { BALLON_ICON, FIREWORK_ICON } from '../../utils/icons';

const Subscription = () => {

  const [email, setEmail] = React.useState('');
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((store) => store.modal);

  React.useEffect(() => {
      setEmail('');
  }, [isOpen])

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({
    mode: 'onSubmit',
    defaultValues: {
      email
    }
  })


  const onSubmit = () => {
    dispatch(openModal());
    reset();
  }

  return (
    <section className={styles.subscription}>
      <h2 className={styles.title}>Subscribe to our mailing list</h2>
      <p className={styles.text}>
        We will send you news about the shop, fresh deliveries, and other info. Join our united family!
      </p>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          id='email'
          className={`${styles.input}  ${errors.email && styles.input_error}`}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Incorrect format for email'
            },
          })}
          placeholder="your-email@gmail.com"
        />
        <button
          type='submit'
          className={styles.button}
        >
          Submit
        </button>
      </form>
      <p className={styles.error}>{errors.email && convertErrorMessageToString(errors.email.message)}</p>

      {
        isOpen && <ModalOverlay>
          <div className={styles.background}>
            <h3 className={styles.text}>Welcome to our family!</h3>
            <p className={styles.text}>Use promocode <span className={styles.code}>FAMILY</span> to get additional 10% discount.
            You can apply it in the cart.
            </p>
            {BALLON_ICON}
          </div>
        </ModalOverlay>
      }
    </section>
  );
}

export default Subscription;