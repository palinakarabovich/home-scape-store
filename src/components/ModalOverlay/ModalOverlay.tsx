import React from 'react';
import styles from './ModalOverlay.module.css';
import ReactDOM from 'react-dom'
import { IModalOverlay } from './types';
import { useLocation, useNavigate } from 'react-router-dom';

const ModalOverlay: React.FC<IModalOverlay> = ({ children }) => {

  const modalRoot = document.getElementById('root-modal') as HTMLDivElement;

  const { pathname } = useLocation();
  const [previousPath, setPreviousPath] = React.useState('');
  const [currentImage, seCurrentImage] = React.useState<number>()
  let navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener('keydown', closeEsc)
    return () => {
      window.removeEventListener('keydown', closeEsc)
    }
  });

  React.useEffect(() => {
    const currentPathArray = pathname?.split('/');
    const imageIndex = Number(currentPathArray[currentPathArray.length - 1])
    seCurrentImage(imageIndex)
    const previousPagePath = currentPathArray?.map((p, index) => {
      if (index < currentPathArray.length - 1)
        return p
    }).join('/');
    setPreviousPath(previousPagePath)
  }, [])

  const handleClose = () => {
    navigate(previousPath)
  }

  const closeEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return ReactDOM.createPortal(
    <section className={styles.overlay}
      onClick={handleClose}
    >
      <div
        className={styles.icon}
      />
      {children}
    </section>,
    modalRoot
  );
}

export default ModalOverlay;