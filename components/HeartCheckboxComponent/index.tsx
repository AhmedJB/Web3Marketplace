import React, { useState } from 'react';
import styles from '../../styles/modular/HeartCheckBox.module.css';

const HeartCheckboxComponent = () => {

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
        <div className={styles.checkmark}>
          <svg viewBox="0 0 256 256">
            <rect fill="none" height="250" width="250"></rect>
            <path
              d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
              strokeWidth="20px"
              stroke="#FFF"
              fill={checked ? '#FF5353' : 'none'}
            ></path>
          </svg>
        </div>
      </label>
    </div>
    
  );
};

export default HeartCheckboxComponent;

