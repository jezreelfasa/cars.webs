/*import styles from './Signup.module.css'
import {
    AiOutlineUser,AiOutlineLock
  } from "react-icons/ai";
  import Navbar from "../components/navbar/Navbar";  


const Signup = () => {

  return (
    <><>
          <Navbar></Navbar>
      </><div className={styles.contain}>

              <h1>Sign up new user</h1>
              <div>
                  <form>
                      <div className={styles.user}>
                          <p>Username <span>*</span></p>
                          <AiOutlineUser className={styles.user} />
                          <input type="text" placeholder="  Type in your name" required />
                      </div>
                      <div className={styles.pass}>
                          <p>Password <span>*</span></p>
                          <AiOutlineLock className={styles.lock} />
                          <input
                              className={styles.pass}
                              type="password"
                              placeholder="  Type in your password"
                              minLength={8}
                              required />
                      </div>
                      <div className={styles.dob}>
                        <p>Enter your birthday</p>
                        <input type="date" />
                      </div>
                     
                      <div className={styles.nationality}>
                      <label>Select a country:</label>
                         <select id="country" name="country">
                          <option value=""></option>
                        <option value="USA">United States</option>
                      <option value="CAN">Canada</option>
                    <option value="GBR">United Kingdom</option>
                   <option value="FRA">France</option>
                   <option value="GH">Ghana</option>
                      <option value="NIG">Nigeria</option>
                    <option value="GER">Germany</option>
                   <option value="TUR">Turkey</option>
        </select>
                      </div>

                      <div className={styles.province}>
                        <p>State/Province</p>
                        <label>Select a state:</label>
                         <select id="state" name="state">
                          <option value=""></option>
                        <option value="LAG">Lagos</option>
                      <option value="ABJ">Abuja</option>
                    <option value="OG">Ogun</option>
                   <option value="DEL">Delta</option>
                   <option value="PH">Port Hacourt</option>
                      <option value="OND">Ondo</option>
                    <option value="IBA">Ibadan</option>
                   <option value="ENU">Enugu</option>
        </select>
                      </div>
                      <button className={styles.btn}>Login</button>
                  </form>
              </div>
          </div></>

  )
}

export default Signup
*/

import  { useState } from 'react';
import styles from './Signup.module.css';
import {
  AiOutlineUser,
  AiOutlineLock
} from 'react-icons/ai';
import Navbar from '../components/navbar/Navbar';

const Signup = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');

  const countryOptions = [
    { label: 'United States', value: 'USA' },
    { label: 'Canada', value: 'CAN' },
    { label: 'United Kingdom', value: 'GBR' },
    { label: 'France', value: 'FRA' },
    { label: 'Ghana', value: 'GH' },
    { label: 'Nigeria', value: 'NIG' },
    { label: 'Germany', value: 'GER' },
    { label: 'Turkey', value: 'TUR' }
    // Add more country options here
  ];

  const provinceOptions = {
    USA: ['New York', 'California', 'Texas', 'Florida'],
    CAN: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
    GBR: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    FRA: ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Auvergne-Rhône-Alpes'],
    GH: ['Greater Accra', 'Ashanti', 'Western', 'Eastern'],
    NIG: ['Lagos', 'Kano', 'Abuja', 'Rivers'],
    GER: ['North Rhine-Westphalia', 'Bavaria', 'Baden-Württemberg'],
    TUR: ['Istanbul', 'Ankara', 'Izmir', 'Antalya']
    // Add more countries and their states/provinces here
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedProvince('');
  };

  return (
    <>
      <Navbar />
      <div className={styles.contain}>
        <h1>Sign Up New User</h1>
        <div>
          <form>
            <div className={styles.user}>
              <p>Username <span>*</span></p>
              <AiOutlineUser className={styles.user} />
              <input type="text" placeholder="Type in your name" required />
            </div>
            <div className={styles.pass}>
              <p>Password <span>*</span></p>
              <AiOutlineLock className={styles.lock} />
              <input
                className={styles.pass}
                type="password"
                placeholder="Type in your password"
                minLength={8}
                required
              />
            </div>
            <div className={styles.dob}>
              <p>Enter your birthday</p>
              <input type="date" />
            </div>
            <div className={styles.nationality}>
              <label>Select a country <span>*</span></label>
              <select
                value={selectedCountry}
                onChange={(e) => handleCountryChange(e.target.value)}
                required
              >
                <option value="">Select a country</option>
                {countryOptions.map((country) => (
                  <option key={country.value} value={country.value} >
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.province}>
              <label>Select a state/province <span>*</span></label>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                required
              >
                <option value="">Select a state/province</option>
                {provinceOptions[selectedCountry] &&
                  provinceOptions[selectedCountry].map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
              </select>
            </div>
            <div className={styles.mail}>
              <p>Enter your email addres <span>*</span></p>
              <input className={styles.className}type="text" placeholder="example@mail.com" required/>
            </div>
            
            <div className={styles.sing}>
            <button className={styles.bt}>Login</button>
          
            </div>
            </form>
            
        </div>
      </div>
    </>
  );
};

export default Signup;
