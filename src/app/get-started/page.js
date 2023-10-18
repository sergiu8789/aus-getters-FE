'use client';
import React, { useState } from 'react';
import styles from './getStarted.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/images/Logo.png';
import LoginBg from '../../../public/assets/images/login_background.png';
import employerImg from '../../../public/assets/images/businessman.png';
import educator from '../../../public/assets/images/classroom.png';
import cadidate from '../../../public/assets/images/politician.png';
import selectTick from '../../../public/assets/images/greenTick.svg';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const [signupType, setSignupType] = useState('');

  const proceedSignup = () => {
    if (signupType !== '') router.push('/signup');
  };
  return (
    <React.Fragment>
      <div
        className={`${styles.LoginContainer} col-12 d-inline-flex align-items-stretch`}
      >
        <Link
          href="/"
          className={`${styles.LogoBox} position-absolute d-inline-block`}
        >
          <Image src={Logo} className="object-fit-contain" alt="Logo"></Image>
        </Link>
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
                  className={`${
                    styles.signupBox
                  } text-center flex-column d-inline-flex justify-content-center align-items-center gap-3 position-relative ${
                    signupType === 'candidate' && styles.signupBoxSelected
                  }`}
                  onClick={() => setSignupType('candidate')}
                  role="button"
                >
                  {signupType === 'candidate' && (
                    <Image
                      src={selectTick}
                      alt="select Tick"
                      className={`${styles.selectTick} position-absolute`}
                    />
                  )}
                  <Image src={cadidate} alt="cadidate" />
                  <label
                    className={`${styles.signupLabel} col-12 d-inline-block`}
                  >
                    Candidate
                  </label>
                </div>
                <div
                  className={`${
                    styles.signupBox
                  } text-center flex-column d-inline-flex justify-content-center align-items-center gap-3 position-relative ${
                    signupType === 'employer' && styles.signupBoxSelected
                  }`}
                  onClick={() => setSignupType('employer')}
                  role="button"
                >
                  {signupType === 'employer' && (
                    <Image
                      src={selectTick}
                      alt="select Tick"
                      className={`${styles.selectTick} position-absolute`}
                    />
                  )}
                  <Image src={employerImg} alt="employer" />
                  <label
                    className={`${styles.signupLabel} col-12 d-inline-block`}
                  >
                    Employer
                  </label>
                </div>
                <div
                  className={`${
                    styles.signupBox
                  } text-center flex-column d-inline-flex justify-content-center align-items-center gap-3 position-relative ${
                    signupType === 'educator' && styles.signupBoxSelected
                  }`}
                  onClick={() => setSignupType('educator')}
                  role="button"
                >
                  {signupType === 'educator' && (
                    <Image
                      src={selectTick}
                      alt="select Tick"
                      className={`${styles.selectTick} position-absolute`}
                    />
                  )}
                  <Image src={educator} alt="educator" />
                  <label
                    className={`${styles.signupLabel} col-12 d-inline-block`}
                  >
                    Educator
                  </label>
                </div>
              </div>
              <div className="col-12 d-inline-flex justify-content-end mt-4">
                <span
                  className={`${styles.proceedBtn} d-inline-flex align-items-center px-5`}
                  role="button"
                  onClick={() => proceedSignup()}
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
