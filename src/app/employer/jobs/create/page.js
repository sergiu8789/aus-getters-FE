'use client';
import styles from './job_create.module.css';
import EmployerLayout from '@/components/employer/Layout/layout';
import BasicDetailStep from './basic_details_step';
import JobDetailsComponent from './job_details_step';
import JobLeftSectionComponent from './left_section';

import SelectComponent from '@/components/employer/Select/select';
import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Image from 'next/image';
import BlueHyphonImg from '../../../../../public/assets/images/blue_hyphon.png';
import PageTitleComponent from '@/components/employer/PageTitle/page_title';

const JobCreatePage = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [basicDetails, setBasicDetails] = useState({});

  useEffect(() => {
    console.log(basicDetails);
  }, [basicDetails]);

  
  return (
    <>
      <EmployerLayout>
        {/* <SelectComponent/> */}
        {/* page title */}
        <PageTitleComponent pageTitle={'Post a Job'} />
        <div className={`${styles.page_content}`}>
          <Container>
            <Row className="gx-3 gy-3">
              {/* left section */}
              <Col md={3}>
                <JobLeftSectionComponent activeStep={activeStep} />
              </Col>
              {/* Right section */}
              <Col md={9}>
                {/* form section start here */}
                {activeStep == 1 ? (
                  <BasicDetailStep
                    basicDetails={basicDetails}
                    setBasicDetails={setBasicDetails}
                  />
                ) : (
                  <JobDetailsComponent/>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </EmployerLayout>
    </>
  );
};

export default JobCreatePage;
