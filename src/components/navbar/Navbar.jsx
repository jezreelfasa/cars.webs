
import  {useState} from 'react';
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

import Logo from "../../images/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
  return (
    
          <header className={styles.navbar}>
      <a href="/navbar"><img src={Logo} alt="/" /></a>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' '): [styles.menu]}>
          <li>
            <a href="https://en.wikipedia.org/wiki/Car" target='_blank' rel='noreferrer'>Learn More</a>
          </li>
          <li>
            <a href="/signup">Sign up</a>
          </li>
          <li>
            
            <a href="/login">Log in</a>
          </li>
          <li>
            <AiOutlineSearch  size={25} styles={{marginTop: '6px'}}/>
          </li>
          <li>
            <AiOutlineUser size={25} styles={{marginTop: '6px'}} />
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)}className={styles.mobile_btn}>
      {nav? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        
      </div>
    </header>
     
  );
};

export default Navbar;
