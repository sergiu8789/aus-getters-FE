"use client"
import styles from './job_create.module.css';
import EmployerLayout from '@/components/employer/Layout/layout';
import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Image from 'next/image';
import BlueHyphonImg from '../../../../../public/assets/images/blue_hyphon.png';
import PageTitleComponent from '@/components/employer/PageTitle/page_title';
const JobCreatePage = () => {
    const [activeStep,setActiveStep] = useState(3);
  return (
    <>
      <EmployerLayout>
        {/* page title */}
        <PageTitleComponent pageTitle={'Post a Job'} />
        <div className={`${styles.page_content}`}>
          <Container>
            <Row className="gx-3 gy-3">
              {/* left section */}
              <Col md={3}>
                <div className={`${styles.left_section}`}>
                  <div className={`${styles.section1}`}>
                    {/* Basic Details Step */}
                    <div className={`${styles.step_item}`}>
                    {activeStep==1 && <span className={`${styles.hyphon}`}>
                        {' '}
                        <Image
                          src={BlueHyphonImg}
                          className={``}
                          alt="Applicants"
                        ></Image>
                      </span>}
                      <span className={`${styles.step_name}`}>
                        Basic Details
                      </span>
                    </div>
                    {/* Job Details Step */}
                    <div className={`${styles.step_item}`}>
                      {activeStep==2 && <span className={`${styles.hyphon}`}>
                        {' '}
                        <Image
                          src={BlueHyphonImg}
                          className={``}
                          alt="Applicants"
                        ></Image>
                      </span>}
                      <span className={`${styles.step_name} `+ (activeStep==2?`${styles.step_name_active} `:"")}>
                        Job Details
                      </span>
                    </div>
                    {/* Question for Candidate Step */}
                    <div className={`${styles.step_item}`}>
                      {activeStep==3 && <span className={`${styles.hyphon}`}>
                        {' '}
                        <Image
                          src={BlueHyphonImg}
                          className={``}
                          alt="Applicants"
                        ></Image>
                      </span>}
                      <span className={`${styles.step_name} `+ (activeStep==3?`${styles.step_name_active} `:"")}>
                      Question for Candidate
                      </span>
                    </div>
                  </div>
                  <div className={`${styles.section2}`}>
                  Step of <span className={`${styles.current_step}`}>{activeStep}</span> of 3
                  </div>
                </div>
              </Col>
              {/* Right section */}
              <Col md={9}></Col>
            </Row>
          </Container>
        </div>
      </EmployerLayout>
    </>
  );
};

export default JobCreatePage;
