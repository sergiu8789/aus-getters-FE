import React from 'react';
import styles from './Profile.module.css';
import Image from 'next/image';
import ShowEye from '../../../../public/assets/images/show_eye.svg';
import HideEye from '../../../../public/assets/images/hide_eye.svg';
import EditIcon from '../../../../public/assets/images/edit_icon.svg';
import ProfilePic from '../../../../public/assets/images/profile_pic.png';
import locationSvg from '../../../../public/assets/images/icons/location.svg';
import moneySvg from '../../../../public/assets/images/icons/money.svg';
import officeSvg from '../../../../public/assets/images/icons/job.svg';
import { CandidateOverview } from '../CandidateOverview/CandidateOverview';
import { Skills } from '../Skills/Skills';
import { SocialMedia } from '../SocialMedia/SocialMedia';

export const Profile = () => {
  return (
    <React.Fragment>
      <div
        className={`${styles.profile_buttons} w-100 px-5 d-flex justify-content-end align-items-center gap-3`}
      >
        <button className="">See Learner Account</button>
        <button className="">Download Cover Letter</button>
        <button className="">Download Resume</button>
        <button
          className={`${styles.profile_edit_btn} d-inline-flex align-items-center justify-content-center gap-2`}
        >
          Edit
          <Image
            src={EditIcon}
            className="object-fit-cover h-auto"
            alt="EditIcon"
          ></Image>
        </button>
      </div>
      <div
        className={`${styles.user_profile_container} container px-5 py-3 pb-0 mb-3`}
      >
        <div className="row border-bottom pb-4 px-2">
          <div className={`${styles.user_profile_pic} col-md-2`}>
            <Image
              src={ProfilePic}
              className="object-fit-cover"
              alt="Profile Pic"
            ></Image>
          </div>
          <div className={`${styles.user_profile_detail} col-md-9`}>
            <h6>Darlene Robertson</h6>
            <div className="d-flex gap-3 pb-3">
              <p className="gap-1 align-items-center m-0 d-flex me-2">
                <Image
                  src={locationSvg}
                  alt="location"
                  className="object-fit-cover h-auto"
                />
                <span>Sydney, Australia</span>
              </p>
              <p className="gap-1 align-items-center m-0 d-flex me-2">
                <Image
                  src={officeSvg}
                  alt="office"
                  className="object-fit-cover h-auto"
                />
                <span>Digital Marketing</span>
              </p>
              <p className="gap-1 align-items-center m-0 d-flex me-2">
                <Image
                  src={moneySvg}
                  alt="money"
                  className="object-fit-cover h-auto"
                />
                <span>$100 / day</span>
              </p>
            </div>
            <div className={`${styles.user_profile_btn} d-flex gap-3`}>
              <p role="button">Social Media Management</p>
              <p role="button">Content Creation</p>
              <p role="button">Video Content Creation</p>
            </div>
          </div>
          <div className="col-md-1">
            <Image
              src={HideEye}
              className="object-fit-contain"
              alt="EYE"
            ></Image>
            <Image
              src={ShowEye}
              className="object-fit-contain"
              alt="EYE"
            ></Image>
          </div>
        </div>
        <div className="row">
          <div className={`${styles.about_user_text} col-12 py-5 px-3`}>
            <h5 className="m-0">About Candidate</h5>
            <p>
              Suspendisse ac neque porta, maximus ipsum eu, porttitor lorem.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Etiam accumsan sollicitudin congue. Aliquam ipsum ex, dictum
              accumsan congue sit amet, mattis ac sapien. Nulla pulvinar cursus
              justo, et tristique est fermentum sed. Maecenas vulputate at metus
              non hendrerit. Nunc lectus libero, porta quis arcu vel, mattis
              rutrum ligula. Etiam porta, ipsum in posuere molestie, quam eros
              commodo lectus, eget tempor urna tellus eu massa. Aenean dapibus
              risus scelerisque elit tincidunt facilisis. Cras imperdiet
              bibendum arcu vel commodo. Donec ornare lorem sit amet augue
              porttitor scelerisque. Aliquam mollis lobortis rhoncus. Curabitur
              pellentesque lorem a est suscipit, a fringilla nibh commodo. In
              tristique nulla odio, ut ultrices risus congue et.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.user_complete_detail} container my-5`}>
        <div className="col-12 d-inline-flex p-3 py-4">
          <div
            className={`${styles.edu_work_exp_box} col-md-7 border-end px-4`}
          >
            {/* User Education Detail */}

            <div className={`${styles.user_education} col-12 d-inline-block`}>
              <h5 className="mb-3 pb-3">Education</h5>
              <div className="d-flex gap-4">
                <span
                  className={`${styles.initial_edu} d-inline-flex justify-content-center align-items-center flex-shrink-0`}
                >
                  M
                </span>
                <div className={`${styles.education_descr}`}>
                  <p className="m-0">
                    <b>Bachlors in Fine Arts</b>
                    <span className="ms-3">2012-2014</span>
                  </p>
                  <p className={`${styles.text_ef5da8} pb-2`}>Modern College</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <span
                  className={`${styles.initial_edu} d-inline-flex justify-content-center align-items-center flex-shrink-0`}
                >
                  H
                </span>
                <div className={`${styles.education_descr}`}>
                  <p className="m-0">
                    <b>Computer Science</b>
                    <span className="ms-3">2008-2012</span>
                  </p>
                  <p className={`${styles.text_ef5da8} pb-2`}>
                    Harvard University
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
            </div>

            {/* User Work & Experience Detail */}

            <div
              className={`${styles.user_education} col-12 mt-5 d-inline-block`}
            >
              <h5 className="mb-3 pb-3">Work & Experience</h5>
              <div className="d-flex gap-4">
                <p
                  className={`${styles.initial_work} d-inline-flex justify-content-center align-items-center flex-shrink-0`}
                >
                  M
                </p>
                <div
                  className={`${styles.education_descr} ${styles.work_exp_descr}`}
                >
                  <p className="m-0">
                    <b>Product Designer</b>
                    <span className="ms-3">2012-2014</span>
                  </p>
                  <p className={`${styles.text_1967D2} pb-2`}>Spotify Inc.</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-4">
                <span
                  className={`${styles.initial_work} d-inline-flex justify-content-center align-items-center flex-shrink-0`}
                >
                  H
                </span>
                <div
                  className={`${styles.education_descr} ${styles.work_exp_descr}`}
                >
                  <p className="m-0">
                    <b>Sr UX Engineer</b>
                    <span className="ms-3">2008-2012</span>
                  </p>
                  <p className={`${styles.text_1967D2} pb-2`}>Dropbox Inc.</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin a ipsum tellus. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <CandidateOverview />
            <Skills />
            <SocialMedia />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
