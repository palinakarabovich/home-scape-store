import React from 'react';
import styles from './Form.module.css'
import { IFormValues } from './types';
import { useForm, SubmitHandler } from "react-hook-form"
import { convertErrorMessageToString } from '../../utils/convertErrorMessageToString';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { makeStepForward, savePersonalData } from '../../redux/slices/formSlice';

const Form = () => {

  const [form, setForm] = React.useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: form
  })

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    dispatch(savePersonalData(data))
    dispatch(makeStepForward());
  }

  return (
    <section className={styles.info}>
      <h2 className={styles.title}>Your details:</h2>
      <form className={styles.form}>
        <p className={styles.text}>Your personal information</p>
        <div className={styles.block}>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='name'>Name</label>
            <input
              id='name'
              className={`${styles.input}  ${errors.name && styles.input_error}`}
              {...register('name', {
                required: 'This field is required',
                minLength: {
                  value: 1,
                  message: 'Your name should have at least one symbol'
                }
              })}
              placeholder="Your name"
            />
            <p className={styles.error}>{errors.name && convertErrorMessageToString(errors.name.message)}</p>
          </div>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='surname'>Surname</label>
            <input
              id='surname'
              className={`${styles.input}  ${errors.surname && styles.input_error}`}
              {...register('surname', {
                required: 'This field is required',
                minLength: {
                  value: 1,
                  message: 'Your name should have at least one symbol'
                }
              })}
              placeholder="Your surname"
            />
            <p className={styles.error}>{errors.surname && convertErrorMessageToString(errors.surname.message)}</p>
          </div>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='email'>Email</label>
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
            <p className={styles.error}>{errors.email && convertErrorMessageToString(errors.email.message)}</p>
          </div>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='telephone'>Phone number</label>
            <input
              id='telephone'
              className={`${styles.input}  ${errors.telephone && styles.input_error}`}
              {...register('telephone', {
                required: 'This field is required',
                pattern: {
                  value: /^\+\d+$/,
                  message: 'Use only numbers starting with +'
                }
              })}
              placeholder="+000000000"
            />
            <p className={styles.error}>{errors.telephone && convertErrorMessageToString(errors.telephone.message)}</p>
          </div>
        </div>
        <p className={styles.text}>Your address</p>
        <div className={styles.block}>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='street'>Street</label>
            <input id='street'
              className={`${styles.input}  ${errors.street && styles.input_error}`}
              {...register('street', {
                required: 'This field is required',
                minLength: {
                  value: 1,
                  message: 'Your street name should have at least one symbol'
                }
              })}
              placeholder="Street name"
            />
            <p className={styles.error}>{errors.street && convertErrorMessageToString(errors.street.message)}</p>
          </div>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='house'>House number</label>
            <input
              id='house'
              className={`${styles.input}  ${errors.house && styles.input_error}`}
              {...register('house', {
                required: 'This field is required',
                minLength: {
                  value: 1,
                  message: 'Your house number should have at least one symbol'
                }
              })}
              placeholder="House number"
            />
            <p className={styles.error}>{errors.house && convertErrorMessageToString(errors.house.message)}</p>
          </div>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='city'>City</label>
            <input
              id='city'
              className={`${styles.input}  ${errors.city && styles.input_error}`}
              {...register('city', {
                required: 'This field is required',
                minLength: {
                  value: 1,
                  message: 'Your city name should have at least one symbol'
                }
              })}
              placeholder="City"
            />
            <p className={styles.error}>{errors.city && convertErrorMessageToString(errors.city.message)}</p>
          </div>
          <div className={styles.container}>
            <label className={styles.label} htmlFor='postcode'>Postcode</label>
            <input
              id='postcode'
              className={`${styles.input}  ${errors.postcode && styles.input_error}`}
              {...register('postcode', {
                required: 'This field is required',
                minLength: {
                  value: 6,
                  message: 'Your post code should have at least six symbols'
                },
                maxLength: {
                  value: 6,
                  message: 'Your post code should not have more than six symbols'
                }
              })}
              placeholder="9080LH"
            />
            <p className={styles.error}>{errors.postcode && convertErrorMessageToString(errors.postcode.message)}</p>
          </div>
        </div>
      </form>
      <ButtonsGroup handleStepForward={handleSubmit(onSubmit)}/>
    </section>
  );
}

export default Form;