import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import styles from './AddEduTraining.module.css';
import Image from 'next/image';
import UploadImg from '../../../../public/assets/images/upload-documnet.png';
import Closebtn from '../../../../public/assets/images/x_blk_close.svg';

export const AddEduTraining = ({ onShow, onClose, editData }) => {
  const isEditMode = !!editData;
  const initialValues = {
    educationType: isEditMode ? editData.educationType : 'SelectEdu',
    NameSchoolInstitution: isEditMode ? editData.NameSchoolInstitution : '',
    Location: isEditMode ? editData.Location : '',
    scoreGPA: isEditMode ? editData.scoreGPA : 'Score/GPA',
    scoreValue: isEditMode ? editData.scoreValue : '',
    specialization: isEditMode ? editData.specialization : 'Specialization',
    durationFrom: isEditMode ? editData.durationFrom : '1',
    durationTo: isEditMode ? editData.durationTo : 'To',
    stillPursuing: isEditMode ? editData.stillPursuing : false,
    ImageStyle: isEditMode ? editData.ImageStyle : null,
    postContent: isEditMode ? editData.postContent : ''
  };

  const [disableTo, setDisableTo] = useState(false);

  useEffect(() => {
    setDisableTo(initialValues.stillPursuing);
  }, [editData]);

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

  // Function to track field values on change
  const handleFieldChange = (field, value) => {
    formik.setFieldValue(field, value);
  };
  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit} className="row">
        {onShow && (
          <div
            className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
          >
            <div
              className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
            >
              <div className={`${styles.add_work_exp} col-12 p-4`}>
                <div className="d-flex justify-content-between">
                  <h6>{`${
                    isEditMode ? 'Edit' : 'Add'
                  } Education & Training`}</h6>
                  <div onClick={() => onClose()}>
                    <Image src={Closebtn} className="" alt="close" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-3 pb-2">
                    <select
                      name="educationType"
                      value={formik.values.educationType}
                      onChange={(e) =>
                        handleFieldChange('educationType', e.target.value)
                      }
                      className={`${styles.formInput_arrow} w-100`}
                      role={'button'}
                    >
                      <option value="SelectEdu">
                        Select Education or Training{' '}
                      </option>
                      <option value="2">2</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-3 pb-2">
                    <input
                      type="text"
                      name="NameSchoolInstitution"
                      value={formik.values.NameSchoolInstitution}
                      onChange={(e) =>
                        handleFieldChange(
                          'NameSchoolInstitution',
                          e.target.value
                        )
                      }
                      placeholder="Name of School/Institution"
                      className={`${styles.formInput} w-100`}
                    />
                  </div>
                  <div className="col-lg-6 mb-3 pb-2">
                    <input
                      type="text"
                      name="Location"
                      value={formik.values.Location}
                      onChange={(e) =>
                        handleFieldChange('Location', e.target.value)
                      }
                      placeholder="Location"
                      className={`${styles.formInput_loca} w-100`}
                    />
                  </div>
                  <div className="col-lg-6 mb-3 d-sm-flex align-items-center justify-content-between gap-2 pb-2">
                    <select
                      name="scoreGPA"
                      value={formik.values.scoreGPA}
                      onChange={(e) =>
                        handleFieldChange('scoreGPA', e.target.value)
                      }
                      className={`${styles.formInput_arrow} w-50`}
                    >
                      <option value="Score/GPA">Score/GPA</option>
                      <option value="2">2</option>
                    </select>
                    <input
                      type="text"
                      name="scoreValue"
                      value={formik.values.scoreValue}
                      onChange={(e) =>
                        handleFieldChange('scoreValue', e.target.value)
                      }
                      placeholder="Enter Score/GPA"
                      className={`${styles.formInput} w-50`}
                    />
                  </div>
                  <div className="col-lg-6 mb-3 pb-2">
                    <select
                      name="specialization"
                      value={formik.values.specialization}
                      onChange={(e) =>
                        handleFieldChange('specialization', e.target.value)
                      }
                      className={`${styles.formInput_arrow} w-100`}
                      role="button"
                    >
                      <option value="Specialization">Specialization </option>
                      <option value="2">2</option>
                    </select>
                  </div>

                  <div className="col-lg-6 mb-3 d-sm-flex align-items-center justify-content-between gap-2 pb-2">
                    <p className="m-0">Duration</p>
                    <select
                      name="durationFrom"
                      value={formik.values.durationFrom}
                      onChange={(e) =>
                        handleFieldChange('durationFrom', e.target.value)
                      }
                      className={`${styles.formInput_arrow}`}
                      role="button"
                    >
                      <option value="From">From</option>
                      <option value="2">2</option>
                    </select>
                    <select
                      name="durationTo"
                      disabled={disableTo ? true : false}
                      value={formik.values.durationTo}
                      onChange={(e) =>
                        handleFieldChange('durationTo', e.target.value)
                      }
                      className={`${styles.formInput_arrow}`}
                      role="button"
                    >
                      <option value="To">To</option>
                      <option value="2">2</option>
                    </select>
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        name="stillPursuing"
                        checked={formik.values.stillPursuing}
                        onChange={(e) => {
                          setDisableTo(!disableTo);
                          handleFieldChange(
                            'stillPursuing',
                            !formik.values.stillPursuing
                          );
                        }}
                      />
                      <p className="m-0">Still pursuing</p>
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
                      />
                      <Image
                        src={UploadImg}
                        className="object-fit-contain"
                        alt="Upload-Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 mb-3 pb-2">
                    <textarea
                      name="postContent"
                      rows={11}
                      value={formik.values.postContent}
                      onChange={(e) =>
                        handleFieldChange('postContent', e.target.value)
                      }
                      className={`${styles.formInput} ${styles.formTextarea} w-100`}
                    />
                  </div>
                  <div
                    className={`${styles.cancel_sub_btn} justify-content-center d-flex gap-4`}
                  >
                    <button
                      role="button"
                      className=""
                      onClick={() => onClose()}
                    >
                      Cancel
                    </button>
                    <button role="button" type="submit" className="">
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
