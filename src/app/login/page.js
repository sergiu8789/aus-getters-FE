import React from "react";
import styles from "./login.module.css";
import LoginBg from "../../../public/assets/images/login_background.png";

export default page = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.loginContainer} position-fixed col-12 d-inline-block start-0 top-0 end-0 bottom-0`}
      >
        <div className="col-md-6">
          <img
            src={LoginBg}
            alt="Login Bg"
            className="object-fit-cover col-12 d-inline-block h-100"
          />
        </div>
        <div className="col-md-6"></div>
      </div>
    </React.Fragment>
  );
};
