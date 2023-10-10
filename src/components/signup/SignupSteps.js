import React, { useRef } from 'react';
import styles from './SignupSteps.module.css';
import Image from 'next/image';
import { Formik } from 'formik';
import backArrow from '../../../public/assets/images/backArrow.svg';
import documnet from '../../../public/assets/images/upload-documnet.png';
import profile from '../../../public/assets/images/upload-profile.png';

const StepHeader = ({ title }) => {
  return (
    <React.Fragment>
      <div className={`col-12 d-inline-flex flex-column`}>
        <h2 className={`${styles.stepTitle} text-center`}>{title}</h2>
        <div
          className={`${styles.stepBlocks} ${styles.activeStep1} position-relative overflow-hidden col-12 d-inline-flex align-items-center justify-content-between`}
        >
          <div
            className={`${styles.stepCircle} ${styles.stepCircle1} d-inline-block position-relative`}
          ></div>
          <div
            className={`${styles.stepCircle} ${styles.stepCircle2} d-inline-block position-relative`}
          ></div>
          <div
            className={`${styles.stepCircle} ${styles.stepCircle3} d-inline-block position-relative`}
          ></div>
          <div
            className={`${styles.stepCircle} ${styles.stepCircle4} d-inline-block position-relative`}
          ></div>
          <div
            className={`${styles.stepCircle} ${styles.stepCircle5} d-inline-block position-relative`}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Step1 = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
      >
        <div
          className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
        >
          <div className={`${styles.registerModel} overflow-y-auto col-12`}>
            <StepHeader title="Fill in some basic details" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
            >
              <Image src={backArrow} alt="Back" />
              <span className={styles.backLinkText}>Back</span>
            </div>
            <Formik
              initialValues={{
                image: profile,
                age: '',
                yourself: '',
                resume: documnet,
                letter: documnet
              }}
              validate={(values) => {
                const errors = {};
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
                /* and other goodies */
              }) => (
                <form
                  className={`${styles.loginFromBox} col-12 d-inline-flex flex-column`}
                  onSubmit={handleSubmit}
                >
                  <div
                    className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                  >
                    <div
                      className={`${styles.profileImageBox} col-6 flex-shrink-1 position-relative d-inline-flex align-items-center justify-content-center`}
                    >
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        Profile Image
                      </label>
                      <input
                        type="file"
                        name="file"
                        accept="image/*"
                        className="position-absolute start-0 end-0 top-0 bottom-0 opacity-0"
                      />
                      <Image
                        src={values.image}
                        alt="Profile"
                        className="col-12 object-fit-contain m-auto d-block"
                      />
                    </div>
                    <div
                      className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <input
                        type="number"
                        name="age"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                        placeholder="name"
                        autoComplete="off"
                        className={`${styles.formInput} d-inline-block col-12`}
                      />
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        <span className={styles.required}>*</span> Age
                      </label>
                      {errors.age && touched.age && errors.age && (
                        <span className={`${styles.fromError} d-inline-block`}>
                          {errors.age}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}
                  >
                    <textarea
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.yourself}
                      placeholder="email"
                      autoComplete="off"
                      className={`${styles.formTextarea} d-inline-block col-12`}
                    />
                    <label
                      className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                    >
                      Describe Yourself (250 words)
                    </label>
                    {errors.email && touched.email && errors.email && (
                      <span className={`${styles.fromError} d-inline-block`}>
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div
                    className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                  >
                    <div
                      className={`${styles.profileImageBox} col-6 flex-shrink-1 position-relative d-inline-flex align-items-center justify-content-center`}
                    >
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        Resume
                      </label>
                      <input
                        type="file"
                        name="file"
                        accept="image/*"
                        className="position-absolute start-0 end-0 top-0 bottom-0 opacity-0"
                      />
                      <Image
                        src={values.resume}
                        alt="Profile"
                        className="col-12 object-fit-contain m-auto d-block"
                      />
                    </div>
                    <div
                      className={`${styles.profileImageBox} col-6 flex-shrink-1 position-relative d-inline-flex align-items-center justify-content-center`}
                    >
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        Cover Letter
                      </label>
                      <input
                        type="file"
                        name="file"
                        accept="image/*"
                        className="position-absolute start-0 end-0 top-0 bottom-0 opacity-0"
                      />
                      <Image
                        src={values.letter}
                        alt="Profile"
                        className="col-12 object-fit-contain m-auto d-block"
                      />
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const SignupSteps = () => {
  return (
    <React.Fragment>
      <div className={`${styles.registerLayer} modal-backdrop`}></div>
      <Step1 />
    </React.Fragment>
  );
};

export default SignupSteps;
