import React, { useState } from 'react';
import { useFormik } from 'formik';
import styles from './Addworkexperience.module.css';
import Image from 'next/image';
import UploadImg from '../../../../public/assets/images/upload-documnet.png';
import Closebtn from '../../../../public/assets/images/x_blk_close.svg';
import pdfIcon from '../../../../public/assets/images/pdf.svg';
import DatePicker from 'react-datepicker';

export const Addworkexperience = ({ onShow, onClose, editData }) => {
  const isEditMode = !!editData;
  const initialValues = isEditMode
    ? {
        CompanyName: editData.CompanyName,
        Location: editData.Location,
        Title: editData.Title,
        DurationFrom: editData.DurationFrom,
        DurationTo: editData.DurationTo,
        StillWorking: editData.StillWorking,
        ImageStyle: null, // You can set the appropriate initial value for ImageStyle
        postContent: editData.postContent
      }
    : {
        CompanyName: '',
        Location: '',
        Title: '',
        DurationFrom: new Date(),
        DurationTo: new Date(),
        StillWorking: false,
        ImageStyle: null,
        postContent: ''
      };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (isEditMode) {
        // Edit data logic
      } else {
        console.log({ values });
        // Add data logic
      }
      onClose();
      formik.resetForm();
    }
  });
  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        {onShow && (
          <div
            className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
          >
            <div
              className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
            >
              <div className={`${styles.add_work_exp} col-12 p-4`}>
                <div className="d-flex justify-content-between">
                  <h6>{`${isEditMode ? 'Edit' : 'Add'} Work Experience`}</h6>
                  <div onClick={() => onClose()}>
                    <Image src={Closebtn} className="" alt="croosIcon" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-3 pb-2">
                    <input
                      type="text"
                      name="CompanyName"
                      placeholder="Company Name"
                      className={`${styles.formInput} w-100`}
                      value={formik.values.CompanyName}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-lg-6 mb-3 pb-2">
                    <input
                      type="text"
                      name="Location"
                      placeholder="Location"
                      className={`${styles.formInput_loca} w-100`}
                      value={formik.values.Location}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="col-lg-6 mb-3 pb-2">
                    <input
                      type="text"
                      name="Title"
                      placeholder="Title"
                      className={`${styles.formInput_arrow} w-100`}
                      value={formik.values.Title}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div className="col-lg-6 mb-3 d-sm-flex align-items-center justify-content-between gap-2 pb-2">
                    <p className="m-0">Duration</p>
                    <DatePicker
                      name="DurationFrom"
                      className={styles.datepickerInput}
                      selected={formik.values.DurationFrom}
                      onChange={(date) =>
                        formik.setFieldValue('DurationFrom', date)
                      }
                    />
                    <DatePicker
                      name="DurationTo"
                      className={styles.datepickerInput}
                      selected={formik.values.DurationTo}
                      disabled={formik.values.StillWorking}
                      onChange={(date) =>
                        formik.setFieldValue('DurationTo', date)
                      }
                    />
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        name="StillWorking"
                        checked={formik.values.StillWorking}
                        onChange={formik.handleChange}
                      />
                      <p className="m-0">Still working</p>
                    </div>
                  </div>
                  <div className={`col-lg-6 mb-3 pb-2 h-100`}>
                    <div
                      className={`${styles.img_upload_box} position-relative d-flex justify-content-center align-items-center`}
                    >
                      <input
                        type="file"
                        className="position-absolute start-0 top-0 h-100 opacity-0 w-100"
                        id="file-input"
                        name="ImageStyle"
                        accept="application/pdf"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          // const imageUrl = URL.createObjectURL(file);
                          formik.setFieldValue('ImageStyle', file);
                        }}
                      />
                      {formik.values.ImageStyle ? (
                        <>
                          <span>
                            <Image
                              src={pdfIcon}
                              alt="PDF Icon"
                              width="20"
                              height="20"
                            />
                          </span>
                          <span>{formik.values.ImageStyle.name}</span>
                        </>
                      ) : (
                        <Image
                          src={UploadImg}
                          className="object-fit-contain"
                          alt="uploadIcon"
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3 pb-2">
                    <textarea
                      name="postContent"
                      rows={11}
                      className={`${styles.formInput} ${styles.formTextarea} w-100`}
                      value={formik.values.postContent}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div
                    className={`${styles.cancel_sub_btn} justify-content-center d-flex gap-4`}
                  >
                    <button
                      role="buttton"
                      className=""
                      onClick={() => onClose()}
                    >
                      Cancel
                    </button>
                    <button role="buttton" type="submit" className="">
                      {isEditMode ? 'Save' : 'Submit'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </React.Fragment>
  );
};
