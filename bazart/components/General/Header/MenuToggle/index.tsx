import React, { useState } from 'react';
import styles from '../../../styles/modular/MenuToggle.module.css';


const MenuToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div  className='container mx-auto'>
        <input
        id="checkbox"
        type="checkbox"
        className={styles.hidden}
        checked={isOpen}
        onChange={handleMenuToggle}
      />
      <label htmlFor="checkbox" className={`${styles.toggle} ${isOpen ? styles.active : ''}`}>
        <div className={`${styles.bar} ${styles['bar--top']}`}></div>
        <div className={`${styles.bar} ${styles['bar--middle']}`}></div>
        <div className={`${styles.bar} ${styles['bar--bottom']}`}></div>
      </label>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>Menu</div>
    </div>
  );
};

export default MenuToggle;
