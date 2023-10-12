import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import facebook from '../../../../public/assets/images/facebook.svg';
import instagram from '../../../../public/assets/images/instagram.svg';
import linkedIn from '../../../../public/assets/images/linkedIn.svg';
import twitter from '../../../../public/assets/images/twitter.svg';
import { Formik } from 'formik';

function Footer() {
  return (
    <React.Fragment>
      <div className={`${styles.newsLetterContainer} col-12 d-inline-flex`}>
        <div className="container">
          <div
            className={`col-12 d-inline-flex justify-content-between gap-3 align-items-center`}
          >
            <h5
              className={`${styles.letterTitle} d-inline-block flex-shrink-0 mb-0`}
            >
              Subscribe to our Newsletter
            </h5>
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
                  className={`${styles.loginFromBox} col-12 flex-shrink-1 d-inline-flex flex-wrap align-items-stretch overflow-hidden justify-content-end`}
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    name="newsemail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                    autoComplete="off"
                    className={`${styles.emailInput} d-inline-block`}
                  />
                  {errors.email && touched.email && errors.email && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.email}
                    </span>
                  )}
                  <button
                    type="submit"
                    className={`${styles.newsSubmitBtn} d-inline-block`}
                    disabled={isSubmitting}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <footer className={`${styles.footerContainer} col-12 d-inline-block`}>
        <div className="container">
          <div className="col-12 d-inline-flex flex-wrap">
            <div className="col-md-9 d-inline-flex align-items-start flex-wrap">
              <div className="col-md-3">
                <h5 className={`${styles.footerLabelTitle} col-12 mb-3`}>
                  Job Seekers
                </h5>
                <ul className="list-unstyled col-12 d-inline-flex flex-column gap-3">
                  <li className="col-12">
                    <Link
                      href="/"
                      className={`${styles.footerLink} d-inline-block text-decoration-none`}
                    >
                      Search Jobs
                    </Link>
                  </li>
                  <li className="col-12">
                    <Link
                      href="/"
                      className={`${styles.footerLink} d-inline-block text-decoration-none`}
                    >
                      Insights
                    </Link>
                  </li>
                  <li className="col-12">
                    <Link
                      href="/"
                      className={`${styles.footerLink} d-inline-block text-decoration-none`}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className={`${styles.footerLabelTitle} col-12 mb-3`}>
                  Employers
                </h5>
                <ul className="list-unstyled col-12 d-inline-flex flex-column gap-3">
                  <li className="col-12">
                    <Link
                      href="/"
                      className={`${styles.footerLink} d-inline-block text-decoration-none`}
                    >
                      Job Applied
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className={`${styles.footerLabelTitle} col-12 mb-3`}>
                  Learning
                </h5>
                <ul className="list-unstyled col-12">
                  <li className="col-12">
                    <Link
                      href="/"
                      className={`${styles.footerLink} d-inline-block text-decoration-none`}
                    >
                      Courses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5 className={`${styles.footerLabelTitle} col-12 mb-3`}>
                  Contact
                </h5>
                <ul className="list-unstyled col-12 d-inline-flex flex-column gap-3">
                  <li className="col-12">
                    <Link
                      href="/"
                      className={`${styles.footerLink} d-inline-block text-decoration-none`}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="col-12">
                    <Link
                      href="/"
                      className={`${styles.footerLink} d-inline-block text-decoration-none`}
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.footerSocial} col-md-3`}>
              <h5 className={`${styles.footerLabelTitle} col-12 mb-3`}>
                Follow Us
              </h5>
              <div className="col-12 gap-3 d-inline-flex align-items-center flex-wrap">
                <Link
                  href="/"
                  className={`${styles.socialLink} d-inline-block text-decoration-none`}
                >
                  <Image src={facebook} alt="Facebook" />
                </Link>
                <Link
                  href="/"
                  className={`${styles.socialLink} d-inline-block text-decoration-none`}
                >
                  <Image src={twitter} alt="Twiiter" />
                </Link>
                <Link
                  href="/"
                  className={`${styles.socialLink} d-inline-block text-decoration-none`}
                >
                  <Image src={instagram} alt="Instagram" />
                </Link>
                <Link
                  href="/"
                  className={`${styles.socialLink} d-inline-block text-decoration-none`}
                >
                  <Image src={linkedIn} alt="LinkedIn" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 d-inline-flex justify-content-between gap-2">
            <span className={`${styles.copyRight} d-inline-flex`}>
              © 2023 Aus-Getters Courses. All rights reserved
            </span>
            <div className={`${styles.copyRightLink} d-inline-flex gap-5`}>
              <Link href="/" className={`${styles.footerLink} d-inline-block`}>
                Terms & Conditions
              </Link>
              <Link href="/" className={`${styles.footerLink} d-inline-block`}>
                Privacy
              </Link>
              <Link href="/" className={`${styles.footerLink} d-inline-block`}>
                Payments Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
