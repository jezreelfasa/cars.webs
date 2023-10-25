import styles from './Login.module.css';
import {
  AiOutlineUser,AiOutlineLock
} from "react-icons/ai";
import Navbar from "../components/navbar/Navbar";  


const Login = () => {

  return (
    <><>
      <Navbar></Navbar>
    </>
    <div className={styles.container}>

        <h1>Login</h1>
        <div>
          <form>
            <div className={styles.user}>
              <p>Username</p>
              <AiOutlineUser className={styles.user} />
              <input type="text" placeholder="  Type in your name" required />
            </div>
            <div className={styles.pass}>
              <p>Password</p>
              <AiOutlineLock className={styles.lock} />
              <input
                className={styles.pass}
                type="password"
                placeholder="  Type in your password"
                minLength={8}
                required />
            </div>
            <div className={styles.remember}>
              <input className={styles.box} type="checkbox" id="myCheckbox" name="myCheckbox" value="checked" />
              <p>Remember me</p>
            </div>

            <button className={styles.btn}>Login</button>
          </form>
        </div>
      </div></>
);
};

export default Login;



