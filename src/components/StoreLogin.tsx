import "../styles/store-login-styles/store-login-styles.scss";
import unlocked_icon from "../assets/img/unlocked.svg";
import light_car_icon from "../assets/img/shopping-cart--light.svg";
import { useState } from "react";
import { StoreLoginLinks } from "../data";

const StoreLogin = () => {
   const [dropdownVisible, setDropdownVisible] = useState(false);

   const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
   };

   return (
      <section>
         <div className="store-login">
            <div className="store-login-lock">
               <img src={unlocked_icon} alt="unlocked icon" />
            </div>
            <div className="store-login-number">
               <p className="store-login-label">
                  Store: <span className="store-login-value">10329I</span>
               </p>
            </div>
            <img className="store-login-lightcart" src={light_car_icon} alt="light car icon" />
            <div className="store-login-profile" onClick={toggleDropdown}>
               <div className="store-login-initial">DZ</div>
               <div className="store-login-name">
                  <p className="store-login-namelabel">
                     Hi, Daniel Zins!{" "}
                     <span className="store-login-arrow"></span>
                  </p>
               </div>
            </div>
            <div className={`store-login-dropdown ${dropdownVisible ? "show" : ""}`}>
               <nav className="store-login-nav">
                  <ul className="store-login-ul">
                     {StoreLoginLinks.map((item) => (
                        <li key={item.id} className="store-login-li">
                           <a className="store-login-link" href="">
                              {item.title}
                           </a>
                        </li>
                     ))}
                  </ul>
               </nav>
            </div>
         </div>
      </section>
   );
};

export default StoreLogin;
