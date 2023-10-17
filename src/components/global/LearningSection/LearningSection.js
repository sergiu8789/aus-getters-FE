import React from 'react';
import styles from './LearningSection.module.css';
import Image from 'next/image';
import groupLearner from '../../../../public/assets/images/group-learner.png';
import learnTick from '../../../../public/assets/images/learnTick.png';

function LearningSection() {
  return (
    <React.Fragment>
      <div className="col-12 d-inline-block py-5 bg-white">
        <div className="container">
          <div
            className={`${styles.learningContainer} col-12 d-inline-block py-5`}
          >
            <h2
              className={`${styles.learnTitle} col-12 text-center d-inline-flex justify-content-center align-items-center gap-2 mb-5`}
            >
              Why Choose Us Our{' '}
              <span className={styles.siteColor}>Learning</span> Platform
            </h2>
            <div className="col-12 d-inline-flex align-items-center">
              <div className="col-md-6 d-inline-flex justify-content-center px-3">
                <Image
                  src={groupLearner}
                  alt="Learnng Image"
                  className="object-fit-contain col-12 d-inline-block h-auto"
                />
              </div>
              <div className="col-md-6 d-inline-flex justify-content-center align-items-stretch flex-wrap">
                <div
                  className={`${styles.learnBox} col-md-6 d-inline-flex flex-column px-2 gap-3`}
                >
                  <Image
                    src={learnTick}
                    alt="Tick"
                    className="object-fit-contain d-inline-block"
                  />
                  <h6
                    className={`${styles.learnStepsTitle} col-12 d-inline-block`}
                  >
                    Lorem Ipsum
                  </h6>
                  <p
                    className={`${styles.learnStepsDesc} col-12 d-inline-block`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer gravida mauris id mi varius, sit amet
                  </p>
                </div>
                <div
                  className={`${styles.learnBox} col-md-6 d-inline-flex flex-column px-2 gap-3`}
                >
                  <Image
                    src={learnTick}
                    alt="Tick"
                    className="object-fit-contain d-inline-block"
                  />
                  <h6
                    className={`${styles.learnStepsTitle} col-12 d-inline-block`}
                  >
                    Lorem Ipsum
                  </h6>
                  <p
                    className={`${styles.learnStepsDesc} col-12 d-inline-block`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer gravida mauris id mi varius, sit amet
                  </p>
                </div>
                <div
                  className={`${styles.learnBox} col-md-6 d-inline-flex flex-column px-2 gap-3`}
                >
                  <Image
                    src={learnTick}
                    alt="Tick"
                    className="object-fit-contain d-inline-block"
                  />
                  <h6
                    className={`${styles.learnStepsTitle} col-12 d-inline-block`}
                  >
                    Lorem Ipsum
                  </h6>
                  <p
                    className={`${styles.learnStepsDesc} col-12 d-inline-block`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer gravida mauris id mi varius, sit amet
                  </p>
                </div>
                <div
                  className={`${styles.learnBox} col-md-6 d-inline-flex flex-column px-2 gap-3`}
                >
                  <Image
                    src={learnTick}
                    alt="Tick"
                    className="object-fit-contain d-inline-block"
                  />
                  <h6
                    className={`${styles.learnStepsTitle} col-12 d-inline-block`}
                  >
                    Lorem Ipsum
                  </h6>
                  <p
                    className={`${styles.learnStepsDesc} col-12 d-inline-block`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer gravida mauris id mi varius, sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LearningSection;
