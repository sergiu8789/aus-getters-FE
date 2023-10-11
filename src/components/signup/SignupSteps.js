import React, { useState } from 'react';
import styles from './SignupSteps.module.css';
import Image from 'next/image';
import { Formik } from 'formik';
import backArrow from '../../../public/assets/images/backArrow.svg';
import documnet from '../../../public/assets/images/upload-documnet.png';
import profile from '../../../public/assets/images/upload-profile.png';
import nextArrow from '../../../public/assets/images/nextArrow.svg';
import crossArrow from '../../../public/assets/images/redCross.svg';
import location from '../../../public/assets/images/location.svg';
import profileVisble from '../../../public/assets/images/sleepzzz.svg';

const StepHeader = ({ title, step }) => {
  return (
    <React.Fragment>
      <div className={`col-12 d-inline-flex flex-column`}>
        <h2 className={`${styles.stepTitle} text-center`}>{title}</h2>
        <div
          className={`${styles.stepBlocks} ${
            step === '1'
              ? styles.activeStep1
              : step === '2'
              ? styles.activeStep2
              : step === '3'
              ? styles.activeStep3
              : step === '4'
              ? styles.activeStep4
              : step === '5'
              ? styles.activeStep5
              : ''
          } position-relative overflow-hidden col-12 d-inline-flex align-items-center justify-content-between`}
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

const Step1 = ({ setRegisterStep }) => {
  return (
    <React.Fragment>
      <div
        className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
      >
        <div
          className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
        >
          <div className={`${styles.registerModel} overflow-y-auto col-12`}>
            <StepHeader title="Fill in some basic details" step="1" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
              onClick={() => setRegisterStep('0')}
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
            <div
              className={`${styles.skipBtnNav} col-12 d-inline-flex align-items-center justify-content-between`}
            >
              <span
                className={`${styles.skipBtn} d-inline-flex align-items-center`}
                role="button"
              >
                Skip
              </span>
              <span
                className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
                role="button"
                onClick={() => setRegisterStep('2')}
              >
                Next <Image src={nextArrow} alt="nextArrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Step2 = ({ setRegisterStep }) => {
  return (
    <React.Fragment>
      <div
        className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
      >
        <div
          className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
        >
          <div className={`${styles.registerModel} overflow-y-auto col-12`}>
            <StepHeader title="You Skills matter!" step="2" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
              onClick={() => setRegisterStep('1')}
            >
              <Image src={backArrow} alt="Back" />
              <span className={styles.backLinkText}>Back</span>
            </div>
            <Formik
              initialValues={{}}
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
                      className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <span
                        className={`${styles.removeSkill} position-absolute d-inline-flex align-items-center justify-content-center`}
                      >
                        <Image
                          src={crossArrow}
                          alt="Cross"
                          className="object-fit-contain"
                        />
                      </span>
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formSelect} d-inline-block col-12`}
                        role="button"
                      >
                        <option value="CSS">CSS</option>
                        <option value="HTML">HTML</option>
                        <option value="PHP">PHP</option>
                        <option value="REACTJS">REACTJS</option>
                      </select>
                    </div>
                    <div
                      className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <span
                        className={`${styles.removeSkill} position-absolute d-inline-flex align-items-center justify-content-center`}
                      >
                        <Image
                          src={crossArrow}
                          alt="Cross"
                          className="object-fit-contain"
                        />
                      </span>
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formSelect} d-inline-block col-12`}
                        role="button"
                      >
                        <option value="CSS">CSS</option>
                        <option value="HTML">HTML</option>
                        <option value="PHP">PHP</option>
                        <option value="REACTJS">REACTJS</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                  >
                    <div
                      className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <span
                        className={`${styles.removeSkill} position-absolute d-inline-flex align-items-center justify-content-center`}
                      >
                        <Image
                          src={crossArrow}
                          alt="Cross"
                          className="object-fit-contain"
                        />
                      </span>
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formSelect} d-inline-block col-12`}
                        role="button"
                      >
                        <option value="CSS">CSS</option>
                        <option value="HTML">HTML</option>
                        <option value="PHP">PHP</option>
                        <option value="REACTJS">REACTJS</option>
                      </select>
                    </div>
                    <div
                      className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <span
                        className={`${styles.removeSkill} position-absolute d-inline-flex align-items-center justify-content-center`}
                      >
                        <Image
                          src={crossArrow}
                          alt="Cross"
                          className="object-fit-contain"
                        />
                      </span>
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formSelect} d-inline-block col-12`}
                        role="button"
                      >
                        <option value="CSS">CSS</option>
                        <option value="HTML">HTML</option>
                        <option value="PHP">PHP</option>
                        <option value="REACTJS">REACTJS</option>
                      </select>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
            <div
              className={`${styles.skipBtnNav} col-12 d-inline-flex align-items-center justify-content-between`}
            >
              <span
                className={`${styles.skipBtn} d-inline-flex align-items-center`}
                role="button"
              >
                Skip
              </span>
              <span
                className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
                role="button"
                onClick={() => setRegisterStep('3')}
              >
                Next <Image src={nextArrow} alt="nextArrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Step3 = ({ setRegisterStep }) => {
  return (
    <React.Fragment>
      <div
        className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
      >
        <div
          className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
        >
          <div className={`${styles.registerModel} overflow-y-auto col-12`}>
            <StepHeader title="Add your Work Experience" step="3" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
              onClick={() => setRegisterStep('2')}
            >
              <Image src={backArrow} alt="Back" />
              <span className={styles.backLinkText}>Back</span>
            </div>
            <Formik
              initialValues={{}}
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
                <React.Fragment>
                  <form
                    className={`${styles.loginFromBox} col-12 d-inline-flex flex-column`}
                    onSubmit={handleSubmit}
                  >
                    <div
                      className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                    >
                      <div
                        className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                      >
                        <select
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${styles.formSelect} d-inline-block col-12`}
                          role="button"
                        >
                          <option value="">Experience</option>
                        </select>
                      </div>
                      <div
                        className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                      >
                        <select
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${styles.formSelect} d-inline-block col-12`}
                          role="button"
                        >
                          <option value="">Work Profile</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                    >
                      <div
                        className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                      >
                        <select
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${styles.formSelect} d-inline-block col-12`}
                          role="button"
                        >
                          <option value="CSS">CSS</option>
                        </select>
                      </div>
                      <div
                        className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                      >
                        <select
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`${styles.formSelect} d-inline-block col-12`}
                          role="button"
                        >
                          <option value="CSS">CSS</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 d-inline-flex">
                      <span
                        className={`${styles.addExperBtn} d-inline-flex align-items-center`}
                        role="button"
                      >
                        + Add More
                      </span>
                    </div>
                  </form>
                </React.Fragment>
              )}
            </Formik>
            <div
              className={`${styles.skipBtnNav} col-12 d-inline-flex align-items-center justify-content-between`}
            >
              <span
                className={`${styles.skipBtn} d-inline-flex align-items-center`}
                role="button"
              >
                Skip
              </span>
              <span
                className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
                role="button"
                onClick={() => setRegisterStep('4')}
              >
                Next <Image src={nextArrow} alt="nextArrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Step4 = ({ setRegisterStep }) => {
  return (
    <React.Fragment>
      <div
        className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
      >
        <div
          className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
        >
          <div className={`${styles.registerModel} overflow-y-auto col-12`}>
            <StepHeader title="Add your Education History" step="4" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
              onClick={() => setRegisterStep('3')}
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
                <from
                  className={`${styles.loginFromBox} col-12 d-inline-flex flex-column`}
                  onSubmit={handleSubmit}
                >
                  <div
                    className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                  >
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
                        Name of School/Institution
                      </label>
                    </div>
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
                        Location
                      </label>
                      <Image
                        src={location}
                        role="button"
                        alt="location"
                        className={`${styles.passwordEye} position-absolute`}
                      />
                    </div>
                  </div>
                  <div
                    className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                  >
                    <div
                      className={`${styles.loginFormBox} col-6 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formSelect} d-inline-block col-12`}
                        role="button"
                      >
                        <option value="">Specialization</option>
                      </select>
                    </div>
                  </div>
                  <div
                    className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex align-items-center gap-4`}
                  >
                    <label className={styles.formInputLabel}>Duration</label>
                    <div
                      className={`${styles.loginFormBox} col-3 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formSelect} d-inline-block col-12`}
                        role="button"
                      >
                        <option value="">1</option>
                      </select>
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        <span className={styles.required}>*</span> From
                      </label>
                    </div>
                    <div
                      className={`${styles.loginFormBox} col-3 flex-shrink-1 position-relative d-inline-block`}
                    >
                      <select
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${styles.formSelect} d-inline-block col-12`}
                        role="button"
                      >
                        <option value="">Specialization</option>
                      </select>
                      <label
                        className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                      >
                        <span className={styles.required}>*</span> To
                      </label>
                    </div>
                    <div
                      className={`${styles.purseingCheck} gap-1 position-relative d-inline-flex align-items-center`}
                      role="button"
                    >
                      <input
                        type="checkbox"
                        name="still_working"
                        role="button"
                      />
                      <label
                        for="still_working"
                        className={styles.purse}
                        role="button"
                      >
                        Still pursuing
                      </label>
                    </div>
                  </div>
                  <div className="col-12 d-inline-flex">
                    <span
                      className={`${styles.addExperBtn} d-inline-flex align-items-center`}
                      role="button"
                    >
                      + Add More
                    </span>
                  </div>
                </from>
              )}
            </Formik>
            <div
              className={`${styles.skipBtnNav} col-12 d-inline-flex align-items-center justify-content-between`}
            >
              <span
                className={`${styles.skipBtn} d-inline-flex align-items-center`}
                role="button"
              >
                Skip
              </span>
              <span
                className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
                role="button"
                onClick={() => setRegisterStep('5')}
              >
                Next <Image src={nextArrow} alt="nextArrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const Step5 = ({ setRegisterStep, changeProfile, highlightProfile }) => {
  return (
    <React.Fragment>
      <div
        className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
      >
        <div
          className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
        >
          <div className={`${styles.registerModel} overflow-y-auto col-12`}>
            <StepHeader title="Lets Get Started" step="5" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
              onClick={() => setRegisterStep('4')}
            >
              <Image src={backArrow} alt="Back" />
              <span className={styles.backLinkText}>Back</span>
            </div>
            <div
              className={`${styles.profileVisible} col-12 d-inline-flex justify-content-between`}
            >
              <div className={`${styles.profileBox} d-inline-flex flex-column`}>
                
              </div>
              <div
                className={`${styles.toggleSwitch} position-relative d-inline-block`}
                role="button"
              >
                <input
                  id="settingOdds"
                  className={`${styles.btntoggle} position-absolute`}
                  type="checkbox"
                  checked={highlightProfile}
                  onClick={changeProfile}
                />
                <label
                  className={styles.btntoggleLabel}
                  htmlFor="settingOdds"
                  role="button"
                ></label>
              </div>
            </div>
            <div
              className={`${styles.skipBtnNav} col-12 d-inline-flex align-items-center justify-content-between`}
            >
              <span
                className={`${styles.skipBtn} d-inline-flex align-items-center`}
                role="button"
              >
                Skip
              </span>
              <span
                className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
                role="button"
              >
                Register me <Image src={nextArrow} alt="nextArrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const SignupSteps = () => {
  const [registerStep, setRegisterStep] = useState('1');
  const [highlightProfile, setHighlightProfile] = useState(true);

  const changeProfile = () => {
    if (highlightProfile) {
      setHighlightProfile(false);
    } else {
      setHighlightProfile(true);
    }
  };

  return (
    <React.Fragment>
      {registerStep > '0' && (
        <div className={`${styles.registerLayer} modal-backdrop`}></div>
      )}
      {registerStep === '1' && <Step1 setRegisterStep={setRegisterStep} />}
      {registerStep === '2' && <Step2 setRegisterStep={setRegisterStep} />}
      {registerStep === '3' && <Step3 setRegisterStep={setRegisterStep} />}
      {registerStep === '4' && <Step4 setRegisterStep={setRegisterStep} />}
      {registerStep === '5' && (
        <Step5
          setRegisterStep={setRegisterStep}
          changeProfile={changeProfile}
          highlightProfile={highlightProfile}
        />
      )}
    </React.Fragment>
  );
};

export default SignupSteps;
