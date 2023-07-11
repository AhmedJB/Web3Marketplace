import React, { useState } from 'react';
import styles from '../../styles/modular/Profile.module.css';
import { AiOutlineEdit } from 'react-icons/ai';

import { InputTypeEnum } from '../../types/enums';
import { countries } from '../../constants/countries';
import InputField from '../General/InputField';

interface User {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
}



const ProfileComponent: React.FC = () => {
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

    //let data = Object.fromEntries(new FormData(event.currentTarget));

    /* setUserData(prevUserData => ({
      ...prevUserData,
      firstName: firstNameInput,
      lastName: lastNameInput,
      country: countryInput,
      city: cityInput
    })); */
    console.log(`Captured inputs: `, userData);

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
      <div className="w-[1300] h-[220px] bg-cover relative"  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <input type="file" accept="image/*" onChange={handleBackgroundImageUpload} style={{ display: 'none' }} id="backgroundImageUpload" />
        <label htmlFor="backgroundImageUpload">
          <button className="absolute top-5 right-10 bg-transparent border-none text-white cursor-pointer text-2xl">
            <AiOutlineEdit />
          </button>
        </label>
        <img className="absolute bottom-[-30px] left-3 w-24 h-24 rounded-full"  src={profileImage} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleProfileImageUpload} style={{ display: 'none' }} id="profileImageUpload" />
        <label htmlFor="profileImageUpload">
          <button className="absolute top-10 right-10 bg-transparent border-none text-white cursor-pointer text-2xl" style={{ bottom: '60px', right: '10px' }}>
            <AiOutlineEdit />
          </button>
        </label>
      </div>

      <h1 className={styles.userName}>{userData.firstName} {userData.lastName}</h1>
      <h2 className={`${styles.editProfileTitle}  `}>Edit Profile</h2>

      <form className={"p-3 w-fit"}>


        <div className="flex items-center gap-4">
          <div className="w-[300px]">
            <InputField label={"First Name"} required={true}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) => {
                let v = e.target.value;
                let temp = { ...userData }
                temp.firstName = v;
                setUserData(temp);

              }}
              name="firstName"
              inputType={InputTypeEnum.input} type={"text"} placeholder='eg: jhon' />
          </div>

          <div className="w-[300px]">
            <InputField
              name="country"
              label={"Country (optional)"}
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) => {
                let v = e.target.value;
                let temp = { ...userData }
                temp.country = v;
                setUserData(temp);

              }}

              inputType={InputTypeEnum.select} options={countries.map((e) => ({ name: e, value: e }))} />
          </div>

        </div>


        <div className="flex items-center gap-4">
          <div className="w-[300px]">
            <InputField
              name="lastName"
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) => {
                let v = e.target.value;
                let temp = { ...userData }
                temp.lastName = v;
                setUserData(temp);

              }}
              label={"Last Name"} required={true} inputType={InputTypeEnum.input} type={"text"} placeholder='eg: smith' />
          </div>

          <div className="w-[300px]">
            <InputField
              changeFunc={(e: React.ChangeEvent<HTMLInputElement>) => {
                let v = e.target.value;
                let temp = { ...userData }
                temp.city = v;
                setUserData(temp);

              }}
              name="city" label={"City (optional)"} required={false} inputType={InputTypeEnum.input} type={"text"} placeholder='eg: Fes' />
          </div>

        </div>

        <div className={styles.buttonsSection}>
          <button type="button" onClick={handleCancel}>Cancel</button>
          <button type="button" onClick={handleSave}>Save</button>
        </div>



      </form>


    </div>
  );
}

export default ProfileComponent;