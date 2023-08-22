import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './ButtonsGroup.module.css';
import { makeStepBack } from '../../redux/slices/formSlice';
import React from 'react';
import { IButtonsGroupProps } from './types';

const steps = [1, 2, 3];

const ButtonsGroup: React.FC<IButtonsGroupProps> = ({ handleStepForward }) => {

  const { step } = useAppSelector((store) => store.form)
  const dispatch = useAppDispatch();


  const handleStepBack = () => {
    dispatch(makeStepBack());
  }


  return (
    <div className={styles.group}>
      {
        step > 1 ? <button
          className={styles.button}
          onClick={handleStepBack}
        > &#8592; previous step</button>
          : <Link
            to='/cart'
            className={styles.button}>&#8592; back to cart</Link>
      }
      {
        step === steps.length ? <button className={styles.button_classic}>Pay</button>
          : <button
            className={styles.button}
            onClick={handleStepForward}
          >next step &#8594;</button>
      }
    </div>
  );
}

export default ButtonsGroup;