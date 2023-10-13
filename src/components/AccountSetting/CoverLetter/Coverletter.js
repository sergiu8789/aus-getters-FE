import React, { useState } from 'react';
import styles from './Coverletter.module.css';
import Cross from '../../../../public/assets/images/x_close.svg';
import EditIcon from '../../../../public/assets/images/edit_icon.svg';
import Location from '../../../../public/assets/images/location_line.svg';
import Image from 'next/image';
import Plus from '../../../../public/assets/images/plus.svg';
import { UploadCoverLetter } from '../UploadCoverLetter/UploadCoverLetter';

export const Coverletter = () => {
  const [showPopUp, setShowPopup] = useState(false);
  return (
    <React.Fragment>
      <div className={`${styles.resume_container} p-3 py-4`}>
        <div className="d-flex justify-content-between pb-2">
          <h6>Cover Letter</h6>
          <p
            className={`${styles.edu_edit_btn} m-0 d-flex gap-1 align-items-center`}
          >
            Edit{' '}
            <Image
              src={EditIcon}
              className={`object-fit-cover`}
              alt="EditIcon"
            ></Image>
          </p>
        </div>
        <div
          className={`${styles.single_resume_box} p-3 mb-3 d-flex justify-content-between align-items-center`}
        >
          <p className="m-0">
            Cover letter.pdf<br></br>
            <span>
              <Image src={Location} className="pe-1" alt="location"></Image>
              Uploaded: 25 May 2023
            </span>
          </p>
          <Image src={Cross} className="" alt="location"></Image>
        </div>
        <div
          className={`${styles.single_resume_box} p-3 mb-3 d-flex justify-content-between align-items-center`}
        >
          <p className="m-0">
            Cover letter.pdf<br></br>
            <span>
              <Image src={Location} className="pe-1" alt="location"></Image>
              Uploaded: 25 May 2023
            </span>
          </p>
          <Image src={Cross} className="" alt="location"></Image>
        </div>
        <div className="text-end mb-1">
          <button
            role="button"
            className={`${styles.add_skill_btn} col-12 d-inline-block`}
            onClick={() => {
              setShowPopup(!showPopUp);
            }}
          >
            <Image src={Plus} className="" width="10" alt="plus"></Image> Add
          </button>
        </div>
      </div>
      <UploadCoverLetter
        onShow={showPopUp}
        onClose={() => setShowPopup(!showPopUp)}
      />
    </React.Fragment>
  );
};
