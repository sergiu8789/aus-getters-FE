import React from 'react';
import styles from './RecomendCourse.module.css';
import Image from 'next/image';
import courseImage from '../../../../public/assets/images/course-image.png';
import courseCalender from '../../../../public/assets/images/icons/courseCalender.svg';
import courseTime from '../../../../public/assets/images/icons/courseTime.svg';
import courseType from '../../../../public/assets/images/icons/courseType.svg';

function RecomendCourse() {
  return (
    <React.Fragment>
      <div className="col-12 d-inline-block py-5 bg-white">
        <div className="container">
          <div className="col-12 d-inline-flex align-items-center flex-wrap">
            <div className="col-md-4 px-3 d-inline-flex flex-column flex-wrap gap-3 align-items-start">
              <h2 className={`${styles.recomendTitle} col-12 text-left`}>
                Learn through doing our Recommend courses for you
              </h2>
              <span
                className={`${styles.recomendBtn} d-inline-flex align-items-center px-4`}
                role="button"
              >
                See more courses
              </span>
            </div>
            <div className="col-md-4 px-2">
              <div
                className={`${styles.courseSellBox} col-12 d-inline-flex flex-column`}
              >
                <Image
                  src={courseImage}
                  className="col-12 d-inline-block object-fit-cover"
                />
                <div className="col-12 d-inline-block mt-3">
                  <div className="col-12 d-inline-flex justify-content-between align-items-start pe-2">
                    <div
                      className={`${styles.courseInfo} col-9 d-inline-flex flex-column gap-1`}
                    >
                      <label
                        className={`${styles.courseTitle} col-12 d-inline-block`}
                      >
                        Course Name
                      </label>
                      <p
                        className={`${styles.coursedesc} col-12 mb-2 d-inline-block`}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className={`col-3 d-inline-flex`}>
                      <span
                        className={`${styles.courseBuyBtn} d-inline-flex col-12 justify-content-center align-items-center`}
                      >
                        View
                      </span>
                    </div>
                  </div>
                  <div className="col-12 d-inline-flex align-items-center gap-3">
                    <div
                      className={`${styles.coursePoints} d-inline-flex align-items-center gap-1`}
                    >
                      <Image src={courseCalender} alt="courseCalender" />
                      <span className={styles.courseSubinfo}>
                        17 July - 05 Oct 2023
                      </span>
                    </div>
                    <div
                      className={`${styles.coursePoints} d-inline-flex align-items-center gap-1`}
                    >
                      <Image src={courseTime} alt="courseTime" />
                      <span className={styles.courseSubinfo}>11 Weeks</span>
                    </div>
                    <div
                      className={`${styles.coursePoints} d-inline-flex align-items-center gap-1`}
                    >
                      <Image src={courseType} alt="courseType" />
                      <span className={styles.courseSubinfo}>Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-2">
              <div
                className={`${styles.courseSellBox} col-12 d-inline-flex flex-column`}
              >
                <Image
                  src={courseImage}
                  className="col-12 d-inline-block object-fit-cover"
                />
                <div className="col-12 d-inline-block mt-3">
                  <div className="col-12 d-inline-flex justify-content-between align-items-start pe-2">
                    <div
                      className={`${styles.courseInfo} col-9 d-inline-flex flex-column gap-1`}
                    >
                      <label
                        className={`${styles.courseTitle} col-12 d-inline-block`}
                      >
                        Course Name
                      </label>
                      <p
                        className={`${styles.coursedesc} col-12 mb-2 d-inline-block`}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className={`col-3 d-inline-flex`}>
                      <span
                        className={`${styles.courseBuyBtn} d-inline-flex col-12 justify-content-center align-items-center`}
                      >
                        View
                      </span>
                    </div>
                  </div>
                  <div className="col-12 d-inline-flex align-items-center gap-3">
                    <div
                      className={`${styles.coursePoints} d-inline-flex align-items-center gap-1`}
                    >
                      <Image src={courseCalender} alt="courseCalender" />
                      <span className={styles.courseSubinfo}>
                        17 July - 05 Oct 2023
                      </span>
                    </div>
                    <div
                      className={`${styles.coursePoints} d-inline-flex align-items-center gap-1`}
                    >
                      <Image src={courseTime} alt="courseTime" />
                      <span className={styles.courseSubinfo}>11 Weeks</span>
                    </div>
                    <div
                      className={`${styles.coursePoints} d-inline-flex align-items-center gap-1`}
                    >
                      <Image src={courseType} alt="courseType" />
                      <span className={styles.courseSubinfo}>Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RecomendCourse;
