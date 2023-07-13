import React, { useState } from 'react';
import styles from '../../styles/modular/HeartCheckBox.module.css';
import {FaHeart , FaRegHeart} from "react-icons/fa"

type Props = {
  size ?: string,
  color ?: string
}

const HeartCheckboxComponent = ({size,color} : Props) => {

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className='container mx-auto'>
       <label className={styles.container}>
        <input
          checked={checked}
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        {checked ? (
          <FaHeart
            className={`${styles.checkmark} ${size} ${color ? color : 'text-red'}`}
          />
        ) : (
          <FaRegHeart
            className={`${styles.checkmark} ${size} ${color ? color : 'text-black'}`}
          />
        )}
      </label>
    </div>
    
  );
};

export default HeartCheckboxComponent;

