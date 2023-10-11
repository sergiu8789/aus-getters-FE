'use client';
import React, { useState } from 'react';
import styles from './ApplyJobPopup.module.css';
import Image from 'next/image';
import backArrow from '../../../../public/assets/images/backArrow.svg';
import nextArrow from '../../../../public/assets/images/nextArrow.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  const [pdfFiles, setPdfFiles] = useState([]);

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
      // You can also add the selected PDF files to your pdfFiles state.
    }
  });

  const handleAddMore = () => {
    setPdfFiles([...pdfFiles, '']); // Add an empty string to represent a new PDF file input.
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
            <StepHeader title="" step="1" />
            <div
              className={`${styles.backStep} d-inline-flex align-items-center gap-2`}
              role="button"
              onClick={() => setRegisterStep('0')}
            >
              <Image src={backArrow} alt="Back" />
              <span className={styles.backLinkText}>Back</span>
            </div>
            <div className={styles.pdfSection}>
              <div className="col-12 d-flex justify-content-between">
                <label>Select Resume:</label>
                <button
                  type="button"
                  onClick={handleAddMore}
                  className={styles.customBtnPrimary}
                >
                  Add More
                </button>
              </div>
              <div className="col-12">
                <div>
                  <input
                    type="file"
                    name="selectedResume"
                    accept=".pdf" // Only allow PDF files
                    onChange={(event) => {
                      formik.setFieldValue(
                        'selectedResume',
                        event.currentTarget.files[0]
                      );
                    }}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.selectedResume &&
                    formik.touched.selectedResume && (
                      <div className="error">
                        {formik.errors.selectedResume}
                      </div>
                    )}
                </div>
                {pdfFiles.map((file, index) => (
                  <div key={index}>
                    <input
                      type="file"
                      name={`moreResumes.${index}`}
                      accept=".pdf" // Only allow PDF files
                      onChange={(event) => {
                        formik.setFieldValue(
                          `moreResumes.${index}`,
                          event.currentTarget.files[0]
                        );
                      }}
                      onBlur={formik.handleBlur}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setPdfFiles(pdfFiles.filter((_, i) => i !== index))
                      }
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 d-inline-flex align-items-center justify-content-end">
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
    </form>
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
    </div>
  );
};

export default ApplyJobPopup;
