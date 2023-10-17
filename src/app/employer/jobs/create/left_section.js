'use client';
import styles from './job_create.module.css';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import BlueHyphonImg from '../../../../../public/assets/images/blue_hyphon.png';

const JobLeftSectionComponent = ({activeStep}) => {
  const form_steps = [
    'Basic Details',
    'Job Details',
    'Questions for Candidate'
  ];
  return (
    <div className={`${styles.left_section}`}>
      <div className={`${styles.section1}`}>
        {form_steps &&
          form_steps?.map((val, index) => {
            let current_step = index + 1;
            return (
              <div className={`${styles.step_item}`} key={`key-${index}`}>
                {activeStep == current_step && (
                  <span className={`${styles.hyphon}`}>
                    {' '}
                    <Image
                      src={BlueHyphonImg}
                      className={``}
                      alt="Applicants"
                    ></Image>
                  </span>
                )}
                <span
                  className={
                    `${styles.step_name} ` +
                    (activeStep == current_step ? styles.step_name_active : '')
                  }
                >
                  {val}
                </span>
              </div>
            );
          })}
      </div>
      <div className={`${styles.section2}`}>
        Step of <span className={`${styles.current_step}`}>{activeStep}</span>{' '}
        of {form_steps.length}
      </div>
    </div>
  );
};

export default JobLeftSectionComponent;
