import React, { useState } from 'react';
import styles from './Account.module.css';
import Image from 'next/image';
import { ProfileImage } from '../ProfileImage/ProfileImage';
import EditIcon from '../../../../public/assets/images/edit_icon.svg';
import SaveIcon from '../../../../public/assets/images/save.svg';
import VisibleEye from '../../../../public/assets/images/visible_eye.svg';
import SkillsForm from '../SkillsForm/SkillsForm';
import SocialLinks from '../SocialLinks/SocialLinks';
import EduTraining from '../EduTraining/EduTraining';
import Workprefer from '../WorkPreference/WorkPrefer';
import WorkExp from '../WorkExperience/WorkExp';
import Resume from '../Resume/Resume';
import CoverLetter from '../CoverLetter/CoverLetter';
import Basicdetails from '../BasicDetails/BasicDetails';
import EditBasicdetails from '../BasicDetails/EditBasicDetails';

const Account = () => {
  const [editMode, setEditMode] = useState(false);

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
              <p
                role="button"
                onClick={() => setEditMode(!editMode)}
                className="gap-1 d-flex justify-content-center"
              >
                Edit
                <Image
                  src={EditIcon}
                  className={`object-fit-cover`}
                  alt="EditIcon"
                ></Image>
              </p>
            ) : (
              <button
                form="editProfileDetails"
                type="submit"
                className="gap-1 d-flex justify-content-center"
              >
                Save
                <Image
                  src={SaveIcon}
                  className={`object-fit-cover`}
                  alt="SaveIcon"
                ></Image>
              </button>
            )}
            <p>
              role='button' Visibility{' '}
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
            <EditBasicdetails setEditMode={setEditMode} />
          )}
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom position-relative`}
        >
          <SkillsForm />
        </div>
        <div
          className={`${styles.user_basic_detail} row p-4 m-0 border-bottom`}
        >
          <SocialLinks />
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
            <CoverLetter />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
