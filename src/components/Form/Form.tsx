import React from 'react';
import styles from './Form.module.css'
import { IFormProps } from './types';

const Form: React.FC<IFormProps> = ({ form, setForm }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  return (
    <form className={styles.form}>
      <p className={styles.text}>Your personal information</p>
      <div className={styles.block}>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='name'>Name</label>
          <input type='text' id='name' className={styles.input} onChange={handleChange} />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='surname'>Surname</label>
          <input type='text' id='surname' className={styles.input} onChange={handleChange} />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='email'>Email</label>
          <input type='email' id='email' className={styles.input} onChange={handleChange} />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='telephone'>Phone number</label>
          <input type='text' id='telephone' className={styles.input} onChange={handleChange} />
        </div>
      </div>
      <p className={styles.text}>Your address</p>
      <div className={styles.block}>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='street'>Street</label>
          <input type='text' id='street' className={styles.input} onChange={handleChange} />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='house'>House number</label>
          <input type='text' id='house' className={styles.input} onChange={handleChange} />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='city'>City</label>
          <input type='text' id='city' className={styles.input} onChange={handleChange} />
        </div>
        <div className={styles.container}>
          <label className={styles.label} htmlFor='postcode'>Postcode</label>
          <input type='text' id='postcode' className={styles.input} onChange={handleChange} />
        </div>
      </div>
    </form>
  );
}

export default Form;