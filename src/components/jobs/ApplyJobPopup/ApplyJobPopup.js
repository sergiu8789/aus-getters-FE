'use client';
import React, { useState } from 'react';
import styles from './ApplyJobPopup.module.css';
import Image from 'next/image';
import backArrow from '../../../../public/assets/images/backArrow.svg';
import nextArrow from '../../../../public/assets/images/nextArrow.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import pdfIcon from '../../../../public/assets/images/pdf.svg';

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
        </div>
      </div>
    </React.Fragment>
  );
};

const Step1 = ({ setRegisterStep }) => {
  const [pdfFiles, setPdfFiles] = useState([
    { name: 'product Design Resume.pdf', selected: false },
    { name: 'Visual Design Resume.pdf', selected: false },
    { name: 'Ux Design Resume.pdf', selected: true }
  ]);
  const fileInputRef = React.createRef();

  const formik = useFormik({
    initialValues: {
      selectedResume: '',
      moreResumes: []
    },
    validationSchema: Yup.object({
      selectedResume: Yup.mixed()
        .test(
          'is-pdf',
          'Please select a PDF file.',
          (value) => value && value.type === 'application/pdf'
        )
        .required('Please select a PDF file.')
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    }
  });

  const handleAddMore = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    setPdfFiles([...pdfFiles, event.target.files[0]]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`${styles.applyPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
      >
        <div
          className={`${styles.applyContent} col-12 d-flex h-100 align-items-center m-auto`}
        >
          <div className={`${styles.applyModel} overflow-y-auto col-12`}>
            <StepHeader title="Fill the details" step="1" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
              onClick={() => setRegisterStep('0')}
            >
              <Image src={backArrow} alt="Back" />
              <span className={styles.backLinkText}>Back</span>
            </div>
            <div className={styles.pdfSection}>
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className={styles.resumeHeading}>Select Resume</div>
                <button
                  type="button"
                  onClick={handleAddMore}
                  className={styles.customBtnPrimary}
                >
                  Add More
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  name="selectedResume"
                  accept=".pdf" // Only allow PDF files
                  className="d-none"
                  onChange={handleFileChange}
                />
              </div>
              <div className="col-12">
                {pdfFiles.map((file, index) => (
                  <div
                    key={index}
                    className={` ${
                      index !== pdfFiles.length - 1
                        ? `py-2 d-flex align-items-center justify-content-between ${styles.pdfItem}`
                        : 'py-2 d-flex align-items-center justify-content-between'
                    }`}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className={`inline-flex gap-1 ${
                          file.selected
                            ? styles.pdfNameHighLight
                            : styles.pdfName
                        }`}
                      >
                        <span>
                          <Image
                            src={pdfIcon}
                            alt="PDF Icon"
                            width="20"
                            height="20"
                          />
                        </span>
                        <span>{file.name}</span>
                      </div>
                      {file.selected && (
                        <span className={`${styles.pdfName} `}>
                          {'Selected'}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 200 }}>
                      'Updated 10 days ago'
                    </div>
                    {/* <button
                      type="button"
                      onClick={() =>
                        setPdfFiles(pdfFiles.filter((_, i) => i !== index))
                      }
                    >
                      Remove
                    </button> */}
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.pdfSection} mt-4`}>
              <div className="col-12  align-items-center">
                <div className={styles.resumeHeading}>
                  Message For Hiring Manager
                </div>
                <label style={{ fontSize: '12px', fontWeight: 300 }}>
                  Let them know why you are a good fit or use this space to add
                  a cover later
                </label>
                <div className={`${styles.messageManager}`}>
                  <p style={{ fontSize: '12px', fontWeight: 500 }}>
                    I'm a deeply curious Mutlidisciplinary Designer based in
                    Uruguay with a background in Industrial Design and an early
                    taste of good design
                  </p>
                  <p style={{ fontSize: '10px' }}></p>
                  <p style={{ fontSize: '12px', fontWeight: 500 }}>
                    I have experience working in small design studio,
                    advertising agencies, startups, and big companies, so I can
                    adapt easily to different environment.
                  </p>
                </div>
                <span className={styles.addAttachment} onClick={handleAddMore}>
                  Add attachment
                </span>
              </div>
            </div>
            <div
              className={`${styles.continueNav} col-12 d-inline-flex align-items-center justify-content-end`}
            >
              <button
                type="submit"
                className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
                onClick={() => setRegisterStep('2')}
              >
                Continue <Image src={nextArrow} alt="nextArrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const Step2 = ({ setRegisterStep }) => {
  const formik = useFormik({
    initialValues: {
      compensationExpectation: '',
      joinDate: '',
      portfolioLink: ''
    },
    validationSchema: Yup.object({
      portfolioLink: Yup.string().required('This field is required')
      // .url('Please enter a valid URL for the portfolio')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div
          className={`${styles.applyPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
        >
          <div
            className={`${styles.applyContent} col-12 d-flex h-100 align-items-center m-auto`}
          >
            <div className={`${styles.applyModel} overflow-y-auto col-12`}>
              <StepHeader title="Fill the details" step="2" />
              <div
                className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
                role="button"
                onClick={() => setRegisterStep('1')}
              >
                <Image src={backArrow} alt="Back" />
                <span className={styles.backLinkText}>Back</span>
              </div>
              <div className={styles.pdfSection}>
                <div className={styles.questionsHeading}>Questions</div>

                <div className={styles.questionField}>
                  <label htmlFor="compensationExpectation">
                    What are your compensation expectations?
                  </label>
                  <div className={`${styles.inputField} my-2`}>
                    <input
                      className={`d-block ${styles.inputField}  w-100`}
                      type="text"
                      id="compensationExpectation"
                      name="compensationExpectation"
                      onChange={formik.handleChange}
                      value={formik.values.compensationExpectation}
                    />
                  </div>
                </div>
                <div className={styles.questionField}>
                  <label htmlFor="joinDate">How soon can you join?</label>
                  <div className={`${styles.inputField} my-2`}>
                    <input
                      className={`d-block ${styles.inputField}  w-100`}
                      type="text"
                      id="joinDate"
                      name="joinDate"
                      onChange={formik.handleChange}
                      value={formik.values.joinDate}
                    />
                  </div>
                </div>
                <div className={styles.questionField}>
                  <label htmlFor="portfolioLink">
                    Please add your Portfolio link?*
                  </label>
                  <div className={`${styles.inputField} my-2`}>
                    <input
                      className={`d-block ${styles.inputField}  w-100`}
                      type="text"
                      id="portfolioLink"
                      name="portfolioLink"
                      onChange={formik.handleChange}
                      value={formik.values.portfolioLink}
                    />
                  </div>
                  {formik.errors.portfolioLink && (
                    <div className="error">{formik.errors.portfolioLink}</div>
                  )}
                </div>
                <div
                  className={`${styles.continueNav} col-12 d-inline-flex align-items-center justify-content-end`}
                >
                  <button
                    type="submit"
                    className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
                    onClick={() => setRegisterStep('3')}
                  >
                    Continue <Image src={nextArrow} alt="nextArrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const Step3 = ({ setRegisterStep }) => {
  return (
    <div
      className={`${styles.applyPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
    >
      <div
        className={`${styles.applyContent} col-12 d-flex h-100 align-items-center m-auto`}
      >
        <div className={`${styles.applyModel} overflow-y-auto col-12`}>
          <StepHeader title="Fill the details" step="2" />
          <div
            className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
            role="button"
            onClick={() => setRegisterStep('2')}
          >
            <Image src={backArrow} alt="Back" />
            <span className={styles.backLinkText}>Back</span>
          </div>
          <div className={styles.pdfSection}>
            <div className={styles.thirdHeading}>Resume</div>
            <div className="d-flex align-items-center justify-content-between ">
              <div className={`inline-flex gap-1 ${styles.pdfName}`}>
                <span>
                  <Image src={pdfIcon} alt="PDF Icon" width="20" height="20" />
                </span>
                <span>{'Product Design Resume.pdf'}</span>
              </div>
              <a href="">Edit</a>
            </div>
          </div>
          <div className={`${styles.pdfSection} mt-4`}>
            <div className="col-12  align-items-center">
              <div className="d-flex align-items-center justify-content-between">
                <div className={styles.resumeHeading}>
                  Message For Hiring Manager
                </div>
                <a href="">Edit</a>
              </div>
              <label style={{ fontSize: '12px', fontWeight: 300 }}>
                Let them know why you are a good fit or use this space to add a
                cover later
              </label>
              <div className={`${styles.messageManager}`}>
                <p style={{ fontSize: '12px', fontWeight: 500 }}>
                  I'm a deeply curious Mutlidisciplinary Designer based in
                  Uruguay with a background in Industrial Design and an early
                  taste of good design
                </p>
                <p style={{ fontSize: '10px' }}></p>
                <p style={{ fontSize: '12px', fontWeight: 500 }}>
                  I have experience working in small design studio, advertising
                  agencies, startups, and big companies, so I can adapt easily
                  to different environment.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.continueNav} col-12 d-inline-flex align-items-center justify-content-end`}
          >
            <button
              type="submit"
              className={`${styles.nextBtn} d-inline-flex align-items-center gap-2 justify-content-center`}
            >
              Continue <Image src={nextArrow} alt="nextArrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ApplyJobPopup = () => {
  const [registerStep, setRegisterStep] = useState('1');
  return (
    <div>
      {registerStep > '0' && (
        <div className={`${styles.registerLayer} modal-backdrop`}></div>
      )}
      {registerStep === '1' && <Step1 setRegisterStep={setRegisterStep} />}
      {registerStep === '2' && <Step2 setRegisterStep={setRegisterStep} />}
      {registerStep === '3' && <Step3 setRegisterStep={setRegisterStep} />}
    </div>
  );
};

export default ApplyJobPopup;
