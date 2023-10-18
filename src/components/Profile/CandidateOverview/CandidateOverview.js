import React from 'react';
import styles from './CandidateOverview.module.css';
import Image from 'next/image';
import Expericence from '../../../../public/assets/images/experience.svg';
import Gender from '../../../../public/assets/images/gender.svg';
import Age from '../../../../public/assets/images/age.svg';
import Salary from '../../../../public/assets/images/salary.svg';
import Excepted_salary from '../../../../public/assets/images/excepted_salary.svg';
import Education from '../../../../public/assets/images/education.svg';

export const CandidateOverview = () => {
  return (
    <React.Fragment>
      <div className={`d-flex flex-wrap p-4`}>
        <div className={`${styles.user_overview} d-flex flex-wrap p-4`}>
          <h5 className="mb-3 pb-3 w-100">Candidate Overview</h5>
          <div className="w-50  d-flex gap-3">
            <Image
              src={Expericence}
              className="object-fit-contain"
              alt="Profile Pic"
            ></Image>
            <p>
              Experience<br></br>
              <span>0-2 Years</span>
            </p>
          </div>
          <div className="w-50  d-flex gap-3">
            <Image
              src={Gender}
              className="object-fit-contain"
              alt="Gender"
            ></Image>
            <p>
              Gender<br></br>
              <span>Female</span>
            </p>
          </div>
          <div className="w-50  d-flex gap-3">
            <Image src={Age} className="object-fit-contain" alt="Age"></Image>
            <p>
              Age<br></br>
              <span>28-33 Years</span>
            </p>
          </div>
          <div className="w-50  d-flex gap-3">
            <Image
              src={Education}
              className="object-fit-contain"
              alt="Education"
            ></Image>
            <p>
              Education Level<br></br>
              <span>Master Degree</span>
            </p>
          </div>
          <div className="w-100  d-flex gap-3">
            <Image
              src={Salary}
              className="object-fit-contain"
              alt="Salary"
            ></Image>
            <p>
              Current Salary<br></br>
              <span>11k - 15k</span>
            </p>
          </div>
          <div className="w-100  d-flex gap-3">
            <Image
              src={Excepted_salary}
              className="object-fit-contain"
              alt="Excepted_salary"
            ></Image>
            <p>
              Expected Salary<br></br>
              <span>26k - 30k</span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
