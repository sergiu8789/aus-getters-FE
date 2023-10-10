"use client";
import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/images/Logo.png";
import LoginBg from "../../../public/assets/images/login_background.png";
import { Formik } from "formik";

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
        <div className="col-md-6 p-5">
          <h1
            className={`mb-5 col-12 justify-content-center d-inline-flex align-items-center`}
          >
            <span className={styles.loginName}>Sign In</span>
            &nbsp;/&nbsp;
            <Link href="/" className={`text-black ${styles.signLink}`}>
              Sign Up
            </Link>
          </h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
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
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                className={`${styles.loginFromBox} col-12 d-inline-flex flex-column`}
                onSubmit={handleSubmit}
              >
                <div
                  className={`${styles.loginFormFloating} col-12 d-inline-block`}
                >
                  <label className={`${styles.formLabel} position-absolute`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={`${styles.formInput} d-inline-block col-12`}
                  />
                  {errors.email && touched.email && errors.email && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.email}
                    </span>
                  )}
                </div>
                <div
                  className={`${styles.loginFormFloating} col-12 d-inline-block`}
                >
                  <label className={`${styles.formLabel} position-absolute`}>
                    Email
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={`${styles.formInput} d-inline-block col-12`}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}
