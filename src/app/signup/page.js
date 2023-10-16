'use client';
import React, { useState } from 'react';
import styles from './signup.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/images/Logo.png';
import LoginBg from '../../../public/assets/images/login_background.png';
import passwordEye from '../../../public/assets/images/password.svg';
import passwordClose from '../../../public/assets/images/password-close.svg';
import location from '../../../public/assets/images/location.svg';
import { Formik } from 'formik';
import SignupSteps from '@/components/signup/SignupSteps';
import Footer from '@/components/global/Footer/Footer';

export default function Page() {
  const [passwordText, setPasswordText] = useState('password');
  const [registerStepPop, setRegisterStepPop] = useState(false);

  const showPassword = () => {
    if (passwordText === 'password') {
      setPasswordText('text');
    } else if (passwordText === 'text') {
      setPasswordText('password');
    }
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
            className={`mb-5 col-12 justify-content-center d-inline-flex align-items-center`}
          >
            <Link href="/login" className={`text-black ${styles.signLink}`}>
              Sign In
            </Link>
            &nbsp;/&nbsp;
            <span className={styles.loginName}>Sign Up</span>
          </h1>
          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              location: '',
              mobile: '',
              email: '',
              password: ''
            }}
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
                setRegisterStepPop(true);
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
                  className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex gap-4`}
                >
                  <div
                    className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                  >
                    <input
                      type="text"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                      placeholder="name"
                      autoComplete="off"
                      className={`${styles.formInput} d-inline-block col-12`}
                    />
                    <label
                      className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                    >
                      <span className={styles.required}>*</span> First Name
                    </label>
                    {errors.firstname &&
                      touched.firstname &&
                      errors.firstname && (
                        <span className={`${styles.fromError} d-inline-block`}>
                          {errors.firstname}
                        </span>
                      )}
                  </div>
                  <div
                    className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                  >
                    <input
                      type="text"
                      name="lastname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                      placeholder="name"
                      autoComplete="off"
                      className={`${styles.formInput} d-inline-block col-12`}
                    />
                    <label
                      className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                    >
                      <span className={styles.required}>*</span> Last Name
                    </label>
                    {errors.lastname && touched.lastname && errors.lastname && (
                      <span className={`${styles.fromError} d-inline-block`}>
                        {errors.lastname}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex gap-4`}
                >
                  <div
                    className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                  >
                    <input
                      type="text"
                      name="location"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.location}
                      placeholder="name"
                      autoComplete="off"
                      className={`${styles.formInput} d-inline-block col-12`}
                    />
                    <label
                      className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                    >
                      <span className={styles.required}>*</span> Location
                    </label>
                    <Image
                      src={location}
                      role="button"
                      alt="location"
                      className={`${styles.passwordEye} position-absolute`}
                    />
                    {errors.location && touched.location && errors.location && (
                      <span className={`${styles.fromError} d-inline-block`}>
                        {errors.location}
                      </span>
                    )}
                  </div>
                  <div
                    className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                  >
                    <input
                      type="text"
                      name="mobile"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mobile}
                      placeholder="name"
                      autoComplete="off"
                      className={`${styles.formInput} d-inline-block col-12`}
                    />
                    <label
                      className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                    >
                      <span className={styles.required}>*</span> Phone Number
                    </label>
                    {errors.mobile && touched.mobile && errors.mobile && (
                      <span className={`${styles.fromError} d-inline-block`}>
                        {errors.mobile}
                      </span>
                    )}
                  </div>
                </div>
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
                  <label
                    className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                  >
                    <span className={styles.required}>*</span> Password
                  </label>
                  {passwordText === 'password' && (
                    <Image
                      src={passwordEye}
                      role="button"
                      alt="Eye"
                      onClick={() => showPassword()}
                      className={`${styles.passwordEye} position-absolute`}
                    />
                  )}
                  {passwordText === 'text' && (
                    <Image
                      src={passwordClose}
                      role="button"
                      alt="Eye"
                      onClick={() => showPassword()}
                      className={`${styles.passwordEye} position-absolute`}
                    />
                  )}
                  {errors.password && touched.password && errors.password && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.password}
                    </span>
                  )}
                </div>
                <div
                  className={`${styles.agreeterms} mb-4 col-12 d-inline-flex align-items-center position-relative`}
                >
                  <input
                    type="checkbox"
                    id="agreeterms"
                    name="agreeterms"
                    className="position-absolute opacity-0"
                  />
                  <label
                    htmlFor="agreeterms"
                    role="button"
                    className={`${styles.agreetermLink} position-relative d-inline-block`}
                  >
                    By registering you agree to{' '}
                    <Link href="/" target="_blank" className={styles.termsLink}>
                      Terms of Use
                    </Link>{' '}
                    and{' '}
                    <Link href="/" target="_blank" className={styles.termsLink}>
                      Privacy Policy
                    </Link>
                  </label>
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
              Already have an Aus-Getters account?
            </span>
            <Link href="/login" className={`text-black ${styles.signLink}`}>
              Login
            </Link>
          </div>
        </div>
      </div>
      {registerStepPop === true && (
        <SignupSteps
          registerStepPop={registerStepPop}
          setRegisterStepPop={setRegisterStepPop}
        />
      )}
      <Footer />
    </React.Fragment>
  );
}
