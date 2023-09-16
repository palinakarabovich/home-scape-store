import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './ButtonsGroup.module.css';
import { makeStepBack, resetForm } from '../../redux/slices/formSlice';
import React from 'react';
import { IButtonsGroupProps } from './types';
import { cleanCart } from '../../redux/slices/cartSlice';

const steps = [1, 2, 3];

const ButtonsGroup: React.FC<IButtonsGroupProps> = ({ handleStepForward }) => {

  const { step } = useAppSelector((store) => store.form)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


  const handleStepBack = () => {
    dispatch(makeStepBack());
  }

  const onPay = () => {
    navigate('/home-scape-store/thank-for-you-order');
    dispatch(cleanCart());
    dispatch(resetForm());
  }


  return (
    <div className={styles.group}>
      {
        step > 1 ? <button
          className={styles.button}
          onClick={handleStepBack}
        > &#8592; previous step</button>
          : <Link
            to='/home-scape-store/cart'
            className={styles.button}>&#8592; back to cart</Link>
      }
      {
        step === steps.length ? <button
          className={styles.button_classic}
          onClick={onPay}
        >Pay</button>
          : <button
            className={styles.button}
            onClick={handleStepForward}
          >next step &#8594;</button>
      }
    </div>
  );
}

export default ButtonsGroup;