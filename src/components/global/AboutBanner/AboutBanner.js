import React from 'react';
import styles from './AboutBanner.module.css';
import Image from 'next/image';
import aboutUs from '../../../../public/assets/images/about-us.jpg';

function AboutBanner() {
  return (
    <React.Fragment>
      <div className="col-12 d-inline-block py-5 bg-white">
        <div className="container">
          <div className="d-inline-flex col-12 align-items-center flex-wrap">
            <div
              className={`${styles.bannerBox} col-md-6 d-inline-flex align-items-center justify-content-center px-3`}
            >
              <Image
                src={aboutUs}
                alt="aboutUs"
                className="object-fit-contain col-12 d-inline-block"
              />
            </div>
            <div
              className={`col-md-6 d-inline-flex flex-column align-items-start px-3`}
            >
              <h1
                className={`${styles.aboutusTitle} col-12 d-inline-block mb-2`}
              >
                About Us
              </h1>
              <p className={`${styles.aboutUsDesc} col-12 d-inline-block mb-4`}>
                Nunc non orci at turpis sollicitudin bibendum ac in felis. Donec
                posuere, eros non cursus cursus, ante justo dictum dolor, at
                suscipit risus nibh nec velit. Nunc vulputate nisl sapien, at
                rutrum augue sollicitudin a. Duis velit neque, vestibulum vel
                neque id, hendrerit varius purus.{' '}
              </p>
              <span
                className={`${styles.aboutusBtn} d-inline-flex align-items-center px-5`}
                role="button"
              >
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutBanner;
