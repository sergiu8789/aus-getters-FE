'use client';
import React, { useState } from 'react';
import styles from './forget.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/images/logo-employer.png';
import LoginBg from '../../../public/assets/images/login_background.png';
import { Formik } from 'formik';
import Footer from '@/components/global/Footer/Footer';

export default function Page() {
  const [emailSent, setEmailSent] = useState(false);

  const handleChangeEmail = () => {
    setEmailSent(false);
  };

  return (
    <React.Fragment>
      <div
        className={`${styles.LoginContainer} col-12 d-inline-flex align-items-stretch`}
      >
        <div className={`${styles.LogoBox} position-absolute d-inline-block`}>
          <Image src={Logo} className="object-fit-contain" alt="Logo"></Image>
        </div>
        <div className="col-md-6">
          <Image
            src={LoginBg}
            alt="Login Bg"
            className="object-fit-cover col-12 d-inline-block h-100"
          />
        </div>
        <div className={`${styles.loginFromContainer} col-md-6`}>
          <h1
            className={`mb-2 col-12 justify-content-center d-inline-flex align-items-center`}
          >
            <span className={styles.loginName}>Forgot you password</span>
          </h1>
          <p
            className={`${styles.forgetDesc} mb-3 col-12 text-left justify-content-center d-inline-flex align-items-center`}
          >
            Please enter the email address you’d like your password re-set
            message sent to
          </p>
          <Formik
            initialValues={{ email: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setEmailSent(true);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form
                className={`${styles.loginFromBox} col-12 d-inline-flex flex-column`}
                onSubmit={handleSubmit}
              >
                <div
                  className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}
                >
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="email"
                    autoComplete="off"
                    className={`${styles.formInput} d-inline-block col-12`}
                  />
                  <label
                    className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                  >
                    <span className={styles.required}>*</span> Email Address
                  </label>
                  {errors.email && touched.email && errors.email && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.email}
                    </span>
                  )}
                </div>
                {emailSent === true ? (
                  <div
                    className={`col-12 d-inline-block ${styles.passwordMailSent}`}
                  >
                    Thank you. If the email you provided is associated with a
                    valid account, you will be sent instructions on resetting
                    your password.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className={`${styles.fromSubmitBtn} col-12 d-inline-block`}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                )}
              </form>
            )}
          </Formik>
          <div
            className={`${styles.createAccount} col-12 d-inline-block text-center`}
          >
            <span className={`d-inline-block ${styles.accountSignup}`}>
              Back to
            </span>
            <Link href="/login" className={`text-black ${styles.signLink}`}>
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
