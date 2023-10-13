'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './contact.module.css';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import { Formik } from 'formik';
import contactLocation from '../../../public/assets/images/contactLocation.svg';
import contactMessage from '../../../public/assets/images/contactMessage.svg';
import contactSupport from '../../../public/assets/images/contact-support.png';
import Footer from '@/components/global/Footer/Footer';

export default function Page() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <div className={`${styles.contactUsRow} col-12 d-inline-flex`}>
        <div className="container">
          <div className="col-12 d-inline-flex flex-wrap align-items-center justify-content-between flex-wrap">
            <h1 className={`${styles.sectionTitle}`}>Contact Us</h1>
            <p className={`${styles.contactDesc} d-inline-block col-md-6`}>
              Have an enquiry? <br />
              Send us a message using the form below and we’ll get back to you
              as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.contactFormContainer} col-12 d-inline-block`}>
        <div className="container">
          <div
            className={`${styles.contactFormBox} col-12 d-inline-flex align-items-center`}
          >
            <div className={`${styles.contactForm} p-4 col-md-7`}>
              <h5 className={`${styles.contactTitle} col-12 mb-4`}>
                Leave a Message
              </h5>
              <Formik
                initialValues={{
                  yourname: '',
                  youremail: '',
                  subject: '',
                  message: ''
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.youremail) {
                    errors.youremail = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.youremail
                    )
                  ) {
                    errors.youremail = 'Invalid email address';
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
                          name="yourname"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.yourname}
                          placeholder="name"
                          autoComplete="off"
                          className={`${styles.formInput} d-inline-block col-12`}
                        />
                        <label
                          className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                        >
                          <span className={styles.required}>*</span> Your Name
                        </label>
                        {errors.yourname &&
                          touched.yourname &&
                          errors.yourname && (
                            <span
                              className={`${styles.fromError} d-inline-block`}
                            >
                              {errors.yourname}
                            </span>
                          )}
                      </div>
                      <div
                        className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                      >
                        <input
                          type="email"
                          name="youremail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.youremail}
                          placeholder="name"
                          autoComplete="off"
                          className={`${styles.formInput} d-inline-block col-12`}
                        />
                        <label
                          className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                        >
                          <span className={styles.required}>*</span> Email
                        </label>
                        {errors.youremail &&
                          touched.youremail &&
                          errors.youremail && (
                            <span
                              className={`${styles.fromError} d-inline-block`}
                            >
                              {errors.youremail}
                            </span>
                          )}
                      </div>
                    </div>
                    <div
                      className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}
                    >
                      <input
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                        placeholder="subject"
                        autoComplete="off"
                        className={`${styles.formInput} d-inline-block col-12`}
                      />
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        <span className={styles.required}>*</span> Subject
                      </label>
                      {errors.subject && touched.subject && errors.subject && (
                        <span className={`${styles.fromError} d-inline-block`}>
                          {errors.subject}
                        </span>
                      )}
                    </div>
                    <div
                      className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}
                    >
                      <textarea
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        placeholder="message"
                        autoComplete="off"
                        className={`${styles.formTextarea} d-inline-block col-12`}
                      />
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        <span className={styles.required}>*</span> Message
                      </label>
                      {errors.message && touched.message && errors.message && (
                        <span className={`${styles.fromError} d-inline-block`}>
                          {errors.message}
                        </span>
                      )}
                    </div>
                    <div
                      className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex justify-content-center`}
                    >
                      <button
                        type="submit"
                        className={`${styles.fromSubmitBtn} d-inline-block`}
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            <div
              className={`${styles.contactDetails} col-md-5 d-inline-flex flex-column gap-5 justify-content-center`}
            >
              <div
                className={`${styles.detailRow} col-12 d-inline-flex flex-column`}
              >
                <Image src={contactLocation} alt="Contact Location" />
                <h2
                  className={`${styles.contactDetailTitle} col-12 d-inline-block mb-1`}
                >
                  Address
                </h2>
                <p
                  className={`${styles.contactDetailDesc} col-12 d-inline-block mb-0`}
                >
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </p>
              </div>
              <div
                className={`${styles.detailRow} col-12 d-inline-flex flex-column`}
              >
                <Image src={contactMessage} alt="Contact Message" />
                <h2
                  className={`${styles.contactDetailTitle} col-12 d-inline-block mb-1`}
                >
                  Email
                </h2>
                <Link
                  href="mailto:contact.london@example.com"
                  className={`${styles.contactDetailDesc} d-inline-block`}
                >
                  contact.london@example.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.supportRow} col-12 d-inline-block`}>
        <div className="container">
          <div className="col-12 d-inline-flex flex-wrap align-items-center py-3">
            <div className="col-md-6">
              <h2 className={`${styles.supportTitle} col-12 d-inline-block`}>
                Recruiting?
              </h2>
              <p className={`${styles.supportDesc} col-12 d-inline-block mb-4`}>
                Advertise your jobs to millions of monthly users and search 15.8
                million CVs in our database.
              </p>
              <div className="col-12 d-inline-block">
                <span
                  className={`${styles.suportButton} d-inline-flex align-items-center`}
                >
                  Start Recruiting now
                </span>
              </div>
            </div>
            <div className="col-md-6 d-inline-flex justify-content-center">
              <Image
                src={contactSupport}
                alt="contactSupport"
                className="object-fit-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
