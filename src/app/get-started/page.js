import React from 'react';
import styles from './getStarted.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/images/Logo.png';
import LoginBg from '../../../public/assets/images/login_background.png';

export default function Page() {
  return (
    <React.Fragment>
      <div
        className={`${styles.LoginContainer} col-12 d-inline-flex align-items-stretch`}
      >
        <div className={`${styles.LogoBox} position-absolute d-inline-block`}>
          <Image src={Logo} className="object-fit-contain" alt="Logo"></Image>
        </div>
        <div className="col-md-3">
          <Image
            src={LoginBg}
            alt="Login Bg"
            className="object-fit-cover col-12 d-inline-block h-100"
          />
        </div>
        <div className="col-md-9">
          <div className="container h-100 d-inline-flex align-items-center">
            <div className="col-12 d-inline-flex align-items-center justify-content-center flex-column">
              <p
                className={`${styles.startInfo} col-12 text-center d-inline-block mb-2`}
              >
                Get Start
              </p>
              <h1
                className={`${styles.startTitle} col-12 text-center d-inline-block mb-4`}
              >
                Choose what is relvenat to you
              </h1>
              <div className="col-12 d-inline-flex justify-content-center flex-wrap gap-5 my-4">
                <div
                  className={`${styles.signupBox} flex-column d-inline-flex`}
                ></div>
              </div>
              <div className="col-12 d-inline-flex justify-content-end mt-4">
                <span
                  className={`${styles.proceedBtn} d-inline-flex align-items-center px-5`}
                >
                  Proceed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
