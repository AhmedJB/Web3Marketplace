import React, { useState ,useContext} from 'react';
import styles from '../../styles/modular/Profile.module.css';
import { AiOutlineEdit } from 'react-icons/ai';
import { useWeb3React } from "@web3-react/core"
import { InputTypeEnum } from '../../types/enums';
import { countries } from '../../constants/countries';
import InputField from '../General/InputField';
import ETH from '../../assets/ProfileImages/ETH.png';
import { SignContext } from "../../contexts/SignContext"
import { formatEtherscanLink, shortenHex } from "../../util"
import useENSName from "../../hooks/useENSName"
import axios from 'axios';


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

    const inputWidth = 400
    const { active, account, deactivate, chainId } = useWeb3React();
    const ENSName = useENSName(account);

    /*  */

    const TestHandleSave = () => {
      const userId = 1;
  
      const updatedUserData = { id: userId, ...userData };
      axios.patch('/api/user', updatedUserData)
        .then((response) => {
          setUserData(response.data);
          console.log('Data updated:', response.data);
        })
        .catch((error) => {
          console.error('Error updating data:', error);
        });
    };

    
const handleCreation = () => {
  // Make an HTTP POST request to your server's /api/user endpoint
  axios.post('/api/user', userData)
    .then((response) => {
      // If the request is successful, update the state with the response data
      setUserData(response.data);
      console.log('Data updated:', response.data);
    })
    .catch((error) => {
      // If there's an error, log the error
      console.error('Error updating data:', error);
    });
};
/* */
//
return <>
{
    !active && <h1
        className="ml-4 py-3 h-[50px] px-12  rounded-[15px] barlow text-[18px] font-semibold text-white header-gradient "
       > Connect Your Wallet
    </h1>
}
{
    active &&  
     <div className={styles.profileContainer}>
    <div className="max-w-[1300px] w-full h-[220px] bg-cover relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <input type="file" accept="image/*" onChange={handleBackgroundImageUpload} style={{ display: 'none' }} id="backgroundImageUpload" />
      <label htmlFor="backgroundImageUpload">
        <button className="absolute top-5 right-10 bg-transparent border-none text-white cursor-pointer text-2xl">
          <AiOutlineEdit />
        </button>
      </label>
      <img className="absolute bottom-[-30px] left-3 w-24 h-24 rounded-full" src={profileImage} alt="Profile" />
      <input type="file" accept="image/*" onChange={handleProfileImageUpload} style={{ display: 'none' }} id="profileImageUpload" />
      <label htmlFor="profileImageUpload">
        <button className="absolute top-10 right-10 bg-transparent border-none text-white cursor-pointer text-2xl" style={{ bottom: '60px', right: '10px' }}>
          <AiOutlineEdit />
        </button>
      </label>
    </div>

    <h1 className={styles.userName}>{userData.firstName} {userData.lastName}</h1>
    <div className='flex gap-2 items-center'>
      <img className="w-7 h-7" src={ETH.src} alt="ETH" />
           <h1
                  className="text-white text-xl font-semibold  py-2"
                  {...{
                      href: formatEtherscanLink("Account", [chainId, account]),
                      target: "_blank",
                      rel: "noopener noreferrer",
                  }}
              >
                  {ENSName || `${shortenHex(account, 4)}`}
              </h1>
    </div>

    <h2 className={`${styles.editProfileTitle}  `}>Edit Profile</h2>

    <form className={"p-3 lg:w-fit w-full"}>


      <div className="flex xl:flex-row flex-col  xl:items-center gap-4 w-full">
        <div className={`xl:w-[400px] lg:w-[600px]    w-full`}>
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

        <div className={`xl:w-[400px] lg:w-[600px]    w-full   `}>
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


      <div className="flex xl:flex-row flex-col  xl:items-center gap-4 w-full">
        <div className={`xl:w-[400px] lg:w-[600px]    w-full`}>
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

        <div className={`xl:w-[400px] lg:w-[600px]    w-full`}>
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
        <button type="button" onClick={handleCreation}>Save</button>
      </div>
    </form>
  </div>
}
</>
}
export default ProfileComponent;