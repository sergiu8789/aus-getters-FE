import React from 'react';
import styles from './aboutJob.module.css';
import aboutJob from '../../../../public/assets/images/aboutJob.png';
import Image from 'next/image';

function AboutJob() {
  return (
    <React.Fragment>
      <div
        className={`${styles.aboutJobContainer} col-12 d-inline-flex align-items-center position-relative overflow-hidden`}
      >
        <Image
          src={aboutJob}
          alt="aboutJob"
          className="col-12 h-100 d-inline-block object-fit-cover position-absolute start-0 end-0"
        />
        <div className="container">
          <div
            className={`${styles.centerJobBox} position-relative col-12 d-inline-flex flex-column align-items-center justify-content-center`}
          >
            <h2
              className={`${styles.aboutJobTitle} col-12 d-inline-flex justify-content-center align-items-center gap-2 text-center mb-4`}
            >
              Your Dream Jobs are
              <span className={styles.siteColor}>Waiting</span>
            </h2>
            <p
              className={`${styles.aboutJobDesc} col-12 d-inline-block text-center mb-5`}
            >
              Nunc lectus libero, porta quis arcu vel, mattis rutrum ligula.
            </p>
            <div
              className={`col-12 d-inline-flex justify-content-center align-items-center gap-5`}
            >
              <span
                className={`${styles.searchJobBtn} d-inline-flex justify-content-center align-items-center`}
                role="button"
              >
                Search Job
              </span>
              <span
                className={`${styles.applyJobBtn} d-inline-flex justify-content-center align-items-center`}
                role="button"
              >
                Apply Jobs Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutJob;
