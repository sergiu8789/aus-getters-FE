import React, { useState } from 'react';
import styles from './EduTraining.module.css';
import SuitCase from '../../../../public/assets/images/bag.svg';
import LocationLine from '../../../../public/assets/images/location_line.svg';
import Cross from '../../../../public/assets/images/x_close.svg';
import EditIcon from '../../../../public/assets/images/edit_icon.svg';
import Plus from '../../../../public/assets/images/plus.svg';
import Image from 'next/image';
import { AddEduTraining } from '../AddEduTraining/AddEduTraining';

const EduTraining = () => {
  const [showPopUp, setShowPopup] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!showPopUp);
    setShowPopup(true);
  };

  // Function to handle opening the form in add new mode
  const handleAddNew = () => {
    setEditMode(!showPopUp);
    setShowPopup(true);
  };
  return (
    <React.Fragment>
      <h6>Education & Training</h6>
      <div className="row mt-3">
        <div className="col-lg-6 pb-4">
          <div className={`${styles.edu_training_box} row m-0 p-3`}>
            <div className="col-lg-6">
              <p className="m-0 mb-2">
                School name<br></br>
                <span>Specialization</span>
              </p>
              <div className={`${styles.location_icon_text} d-flex gap-3`}>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={LocationLine} className="" alt location></Image>
                  Location
                </p>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={SuitCase} className="" alt location></Image>
                  GPA: 3.8
                </p>
              </div>
            </div>
            <div
              className={`${styles.edu_edit_btn} col-lg-6 text-end flex-wrap d-flex flex-column align-items-end justify-content-between`}
            >
              <Image src={Cross} className="" alt location></Image>
              <p
                className="m-0 d-flex gap-1 align-items-center"
                onClick={() => handleEdit()}
                role="button"
              >
                Edit{' '}
                <Image
                  src={EditIcon}
                  className={`object-fit-cover`}
                  alt="EditIcon"
                ></Image>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pb-4">
          <div className={`${styles.edu_training_box} row m-0 p-3`}>
            <div className="col-lg-6">
              <p className="m-0 mb-2">
                College name<br></br>
                <span>Specialization</span>
              </p>
              <div className={`${styles.location_icon_text} d-flex gap-3`}>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={LocationLine} className="" alt location></Image>
                  Location
                </p>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={SuitCase} className="" alt location></Image>
                  GPA: 3.8
                </p>
              </div>
            </div>
            <div
              className={`${styles.edu_edit_btn} col-lg-6 text-end flex-wrap d-flex flex-column align-items-end justify-content-between`}
            >
              <Image src={Cross} className="" alt location></Image>
              <p
                className="m-0 d-flex gap-1 align-items-center"
                onClick={() => handleEdit()}
                role="button"
              >
                Edit{' '}
                <Image
                  src={EditIcon}
                  className={`object-fit-cover`}
                  alt="EditIcon"
                ></Image>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pb-4">
          <div className={`${styles.edu_training_box} row m-0 p-3`}>
            <div className="col-lg-6">
              <p className="m-0 mb-2">
                School name<br></br>
                <span>Specialization</span>
              </p>
              <div className={`${styles.location_icon_text} d-flex gap-3`}>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={LocationLine} className="" alt location></Image>
                  Location
                </p>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={SuitCase} className="" alt location></Image>
                  GPA: 3.8
                </p>
              </div>
            </div>
            <div
              className={`${styles.edu_edit_btn} col-lg-6 text-end flex-wrap d-flex flex-column align-items-end justify-content-between`}
            >
              <Image src={Cross} className="" alt location></Image>
              <p
                className="m-0 d-flex gap-1 align-items-center"
                onClick={() => handleEdit()}
                role="button"
              >
                Edit{' '}
                <Image
                  src={EditIcon}
                  className={`object-fit-cover`}
                  alt="EditIcon"
                ></Image>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pb-4">
          <div className={`${styles.edu_training_box} row m-0 p-3`}>
            <div className="col-lg-6">
              <p className="m-0 mb-2">
                College name<br></br>
                <span>Specialization</span>
              </p>
              <div className={`${styles.location_icon_text} d-flex gap-3`}>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={LocationLine} className="" alt location></Image>
                  Location
                </p>
                <p className="gap-1 align-items-center m-0 d-flex me-2">
                  <Image src={SuitCase} className="" alt location></Image>
                  GPA: 3.8
                </p>
              </div>
            </div>
            <div
              className={`${styles.edu_edit_btn} col-lg-6 text-end flex-wrap d-flex flex-column align-items-end justify-content-between`}
            >
              <Image src={Cross} className="" alt location></Image>
              <p
                className="m-0 d-flex gap-1 align-items-center"
                onClick={() => handleEdit()}
                role="button"
              >
                Edit
                <Image
                  src={EditIcon}
                  className={`object-fit-cover`}
                  alt="EditIcon"
                ></Image>
              </p>
            </div>
          </div>
        </div>
        <div className="text-end mb-1">
          <button
            role="button"
            className={`${styles.add_skill_btn} col-12 d-inline-block`}
            onClick={() => {
              handleAddNew();
            }}
          >
            <Image src={Plus} className="" width="10" alt="plus"></Image> Add
          </button>
        </div>
      </div>
      <AddEduTraining
        onShow={showPopUp}
        onClose={() => setShowPopup(!showPopUp)}
      />
    </React.Fragment>
  );
};

export default EduTraining;
