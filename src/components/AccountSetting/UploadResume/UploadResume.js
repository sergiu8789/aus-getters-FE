import React from 'react';
import { Formik } from 'formik';
import styles from './UploadResume.module.css';
import Image from 'next/image';
import UploadImg from '../../../../public/assets/images/upload-documnet.png';
import Closebtn from '../../../../public/assets/images/x_blk_close.svg';

export const UploadResume = ({ onShow, onClose }) => {
  return (
    <React.Fragment>
      {onShow && (
        <div
          className={`${styles.registerPopup} position-fixed h-100 col-12 d-inline-block start-0 top-0`}
        >
          <div
            className={`${styles.registerContent} col-12 d-flex h-100 align-items-center m-auto`}
          >
            <div className={`${styles.add_work_exp} col-12 p-4`}>
              <div className="d-flex justify-content-between">
                <h6>Upload Resume</h6>
                <div onClick={() => onClose()}>
                  <Image src={Closebtn} className="" />
                </div>
              </div>
              <Formik>
                <from className="row">
                  <div className={`col-12 mb-3 pb-2 h-100`}>
                    <div
                      className={`${styles.img_upload_box} position-relative d-flex justify-content-center align-items-center`}
                    >
                      <input
                        type="file"
                        className="position-absolute start-0 top-0 h-100 opacity-0 w-100"
                        id="file-input"
                        name="ImageStyle"
                      />
                      <Image src={UploadImg} className="object-fit-contain" />
                    </div>
                  </div>
                  <div
                    className={`${styles.cancel_sub_btn} justify-content-center d-flex gap-4`}
                  >
                    <p role="buttton" className="" onClick={() => onClose()}>
                      Cancel
                    </p>
                    <p role="buttton" className="">
                      Submit
                    </p>
                  </div>
                </from>
              </Formik>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
