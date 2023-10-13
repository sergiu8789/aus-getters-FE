import React, { useRef, useState } from 'react';
import styles from './AccountSetting.module.css';
import Image from 'next/image';
import { ProfileImage } from '../ProfileImage/ProfileImage';
import EditIcon from '../../../../public/assets/images/edit_icon.svg';
import SaveIcon from '../../../../public/assets/images/save.svg';
import VisibleEye from '../../../../public/assets/images/visible_eye.svg';
import { SkillsAdd } from '../SkillsAdd/Skillsadd';
import { SocialLinks } from '../SocialLinks/SocialLinks';
import { EduTraining } from '../EduTraining/EduTraining';
import { Workprefer } from '../WorkPreference/WorkPrefer';
import { WorkExp } from '../WorkExperience/WorkExp';
import { Resume } from '../Resume/Resume';
import { Coverletter } from '../CoverLetter/Coverletter';
import { Basicdetails } from '../BasicDetails/Basicdetails';
import { EditBasicdetails } from '../BasicDetails/EditBasicdetails';
import { Skillspopup } from '../SkillsDropOptions/Skillspopup';
import { Sociallinkpopup } from '../SocialLinkPopUp/Sociallinkpopup';
import { Addworkexperience } from '../AddWorkExperience/Addworkexperience';
import { AddEduTraining } from '../AddEduTraining/AddEduTraining';
import { UploadResume } from '../UploadResume/UploadResume';
import { UploadCoverLetter } from '../UploadCoverLetter/UploadCoverLetter';

export const AccountSetting = () => {
  const [editMode, setEditMode] = useState(false);
  const formikRef = useRef();

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log('finally', values); // Do something with the form values
    // You can make an API call or update the state here.
  };

  // Create a function to trigger form submission in the child component
  const submitFormInChild = () => {
    if (editMode) {
      formikRef.current.submitForm(); // Trigger form submission using the ref
    }
  };

  return (
    <React.Fragment>
      <div className={`${styles.account_sett_container} p-0 container`}>
        <h5>Account Settings</h5>
        <div className="row px-4 m-0 pt-4">
          <div className={`col-md-6 ${styles.profile_pic_edit}`}>
            <ProfileImage />
          </div>
          <div
            className={`${styles.all_profile_edit} col-md-6 gap-3 d-flex justify-content-end align-items-start`}
          >
            {!editMode ? (
              <p onClick={() => setEditMode(!editMode)}>
                Edit
                <Image
                  src={EditIcon}
                  className={`object-fit-cover`}
                  alt="EditIcon"
                ></Image>
              </p>
            ) : (
              <p
                onClick={() => {
                  setEditMode(!editMode);
                }}
              >
                Save
                <Image
                  src={SaveIcon}
                  className={`object-fit-cover`}
                  alt="SaveIcon"
                ></Image>
              </p>
            )}
            <p>
              Visibility{' '}
              <Image
                src={VisibleEye}
                className={`object-fit-cover`}
                alt="VisibleEye"
              ></Image>
            </p>
          </div>
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom`}
        >
          {!editMode ? (
            <Basicdetails />
          ) : (
            <EditBasicdetails onSubmit={handleSubmit} />
          )}
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom position-relative`}
        >
          <SkillsAdd />
          <Skillspopup />
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom`}
        >
          <SocialLinks />
          <Sociallinkpopup />
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom`}
        >
          <EduTraining />
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom`}
        >
          <Workprefer />
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom`}
        >
          <WorkExp />
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom`}
        >
          <div className="col-md-6">
            <Resume />
          </div>
          <div className="col-md-6">
            <Coverletter />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
