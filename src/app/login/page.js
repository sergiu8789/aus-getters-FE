import React from "react";
import styles from "./login.module.css";
import Logo from "../../../public/assets/images/Logo.png";
import LoginBg from "../../../public/assets/images/login_background.png";

export default function page() {
  return (
    <React.Fragment>
      <div
        className={`${styles.loginContainer} position-fixed col-12 d-inline-flex align-items-stretch start-0 top-0 end-0 bottom-0`}
      >
        <div className={`${styles.LogoBox} d-inline-block`}>
          <img src={Logo} alt="Logo"></img>
        </div>
        <div className="col-md-6">
          <img
            src={LoginBg}
            alt="Login Bg"
            className="object-fit-cover col-12 d-inline-block h-100"
          />
        </div>
        <div className="col-md-6 p-5"></div>
      </div>
    </React.Fragment>
  );
}
