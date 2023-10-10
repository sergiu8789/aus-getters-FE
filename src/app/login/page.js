'use client';
import React from 'react';
import styles from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/images/Logo.png';
import LoginBg from '../../../public/assets/images/login_background.png';
import { Formik } from 'formik';

export default function page() {
  return (
    <React.Fragment>
      <div
        className={`${styles.loginContainer} position-fixed col-12 d-inline-flex align-items-stretch start-0 top-0 end-0 bottom-0`}
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
        <div className={`${styles.loginFromContainer} col-md-6 p-5`}>
          <h1
            className={`mb-5 col-12 justify-content-center d-inline-flex align-items-center`}
          >
            <span className={styles.loginName}>Sign In</span>
            &nbsp;/&nbsp;
            <Link href="/signup" className={`text-black ${styles.signLink}`}>
              Sign Up
            </Link>
          </h1>
          <Formik
            initialValues={{ email: '', password: '' }}
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
                alert(JSON.stringify(values, null, 2));
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
              //  and other goodies 
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
                  <label className={`${styles.formLabel} position-absolute`}>
                    * Email Address
                  </label>
                  {errors.email && touched.email && errors.email && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.email}
                    </span>
                  )}
                </div>
                <div
                  className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}
                >
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="password"
                    autoComplete="off"
                    className={`${styles.formInput} d-inline-block col-12`}
                  />
                  <label className={`${styles.formLabel} position-absolute`}>
                    * Password
                  </label>
                  {errors.password && touched.password && errors.password && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.password}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className={`${styles.fromSubmitBtn} col-12 d-inline-block`}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
          <div
            className={`${styles.createAccount} col-12 d-inline-block text-center`}
          >
            <span className={`d-inline-block ${styles.accountSignup}`}>
              New to Aus-Getters?
            </span>
            <Link href="/signup" className={`text-black ${styles.signLink}`}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
