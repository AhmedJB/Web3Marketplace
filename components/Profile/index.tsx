import React, { useState } from 'react';
import styles from '../../styles/modular/Profile.module.css';
import { AiOutlineEdit } from 'react-icons/ai';

import { InputTypeEnum } from '../../types/enums';

interface User {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
}

const countries = [
  // North America
  "Canada", "United States", "Mexico",


  // Central America
  "Belize", "Costa Rica", "El Salvador", "Guatemala", "Honduras", "Nicaragua", "Panama",


  // The Caribbean
  "Antigua and Barbuda", "The Bahamas", "Barbados", "Cuba", "Dominica", "Dominican Republic", "Grenada", "Haiti", "Jamaica", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago",


  // South America
  "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela",


  // Europe
  "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City (Holy See)",


  // Africa
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];


const Profile: React.FC = () => {
  const [userData, setUserData] = useState<User>({ firstName: 'User', lastName: 'Name', country: '', city: '' });
  const [backgroundImage, setBackgroundImage] = useState('./background.jpg');
  const [profileImage, setProfileImage] = useState('./avatar.jpg');
  /*const [first, setfirst] = useState('')
  const [last, setlast] = useState('')*/
  //
  
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const [cityInput, setCityInput] = useState('');

  const handleBackgroundImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);

  /*function handleSave(event){

    setUserData(prevUserData => ({
      ...prevUserData,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value
    }) )

  }*/
  const handleSave = () => {
    setUserData(prevUserData => ({
      ...prevUserData,
      firstName: firstNameInput,
      lastName: lastNameInput,
      country: countryInput,
      city: cityInput
    }));
    console.log(`Captured inputs: ${firstNameInput} ${lastNameInput}`); 
  };

  const handleCancel = () => {
    setFirstNameInput('');
    setLastNameInput('');
    setCountryInput('');
    setCityInput('');
  };

  // Rest of your component...
return (
  <div className={styles.profileContainer}>
    <div className={styles.backgroundPhoto} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <input type="file" accept="image/*" onChange={handleBackgroundImageUpload} style={{ display: 'none' }} id="backgroundImageUpload" />
      <label htmlFor="backgroundImageUpload">
        <button className="absolute top-10 right-10 bg-transparent border-none text-white cursor-pointer text-2xl">
            <AiOutlineEdit />
        </button>
        {/* <button className={styles.editButton}>
          <AiOutlineEdit />
        </button> */}
      </label>
      <img className={styles.profilePhoto} src={profileImage} alt="Profile" />
      <input type="file" accept="image/*" onChange={handleProfileImageUpload} style={{ display: 'none' }} id="profileImageUpload" />
      <label htmlFor="profileImageUpload">
        <button className={styles.editButton} style={{ bottom: '60px', right: '10px' }}>
          <AiOutlineEdit />
        </button>
      </label>
    </div> 

      <h1 className={styles.userName}>{userData.firstName} {userData.lastName}</h1>
      <h2 className={`${styles.editProfileTitle}  `}>Edit Profile</h2>

      <form className={styles.formSection}>
          
          <div className={styles.first}>
            <label className={styles.labels}>First Name<span className={styles.span}>*</span></label> 
            <input value={firstNameInput} onChange={e => setFirstNameInput(e.target.value)} className={styles.inputs} type='text' name='first' placeholder='First Name' required></input>
        </div>
            
            <div className={styles.country}>
            <label className={styles.labels}>Country (optional)</label>
            <select value={countryInput} onChange={e => setCountryInput(e.target.value)} className={styles.select}>
            {countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
          </select>
            </div>
          
          
          <div className={styles.last}><label className={styles.labels}>Last Name<span className={styles.span}>*</span></label> 
          <input value={lastNameInput} onChange={e => setLastNameInput(e.target.value)} className={styles.inputs} type='text' name='last' placeholder='Last Name'  required></input>
        </div>
            
            <div className={styles.city}>
            <label className={styles.labels}>City (optional)</label> 
            <input value={cityInput} onChange={e => setCityInput(e.target.value)} className={styles.inputs} type='text' name='city' placeholder='City' required></input>
        </div>
            
        
        <div className={styles.buttonsSection}>
        <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="button" onClick={handleSave}>Save</button>
        </div>
      </form>
       
      
    </div>
  );
}

export default Profile;