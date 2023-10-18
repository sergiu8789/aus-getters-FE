import styles from './dashboar.module.css';

import EmployerLayout from '../../../components/employer/Layout/layout';
import PageTitleComponent from '@/components/employer/PageTitle/page_title';
import CandidateTraficGraphComponent from '../../../components/employer/CandidateTraficGraph/candidate-trafic-graph';
import NotificationComponent from '../../../components/employer/Notification/notification';
import RecentApplicationsComponents from '../../../components/employer/RecentApplications/recent-applications';
import RecentJobsComponents from '../../../components/employer/RecentJobs/recent-jobs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import ShortlistedApplicantsImg from '../../../../public/assets/images/shortlisted_applicants.png';
import JobsCardImg from '../../../../public/assets/images/jobs_card.png';
import CandidatesCardImg from '../../../../public/assets/images/candidates_card.png';

const EmployerDashboardPage = () => {
  return (
    <EmployerLayout>
      {/* page title */}
      <PageTitleComponent pageTitle={'Dashbaord'} isShowJobBtn={true} />
      <div className={`${styles.page_content}`}>
        {/* Dashboard Card section */}
        <Container>
          <Row className="gx-3 gy-3">
            {/* Job Posted Card */}
            <Col>
              <div className={`${styles.cards} d-flex`}>
                <Image
                  src={JobsCardImg}
                  className={`${styles.card_img} d-inline-block`}
                  alt="Job posted"
                ></Image>
                <div className="d-inline-block">
                  <div className={`${styles.card_value} `}>20</div>
                  <div className={`${styles.card_title} `}>Job Posted</div>
                </div>
              </div>
            </Col>
            {/* Applicants Card */}
            <Col>
              <div className={`${styles.cards} d-flex`}>
                <Image
                  src={CandidatesCardImg}
                  className={`${styles.card_img} d-inline-block`}
                  alt="Applicants"
                ></Image>
                <div className="d-inline-block">
                  <div className={`${styles.card_value} `}>235</div>
                  <div className={`${styles.card_title} `}>Applicants</div>
                </div>
              </div>
            </Col>
            {/* Shortlisted Applicants Card */}
            <Col>
              <div className={`${styles.cards} d-flex`}>
                <Image
                  src={ShortlistedApplicantsImg}
                  className={`${styles.card_img} d-inline-block`}
                  alt="Shortlisted Applicants"
                ></Image>
                <div className="d-inline-block">
                  <div className={`${styles.card_value} `}>134</div>
                  <div className={`${styles.card_title} `}>
                    Shortlisted Applicants
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Dashboard Graph and Notification section */}
        <Container className={`${styles.section2}`}>
          <Row className="gx-3 gy-3">
            <Col md={7}>
              <CandidateTraficGraphComponent />
            </Col>
            <Col
              md={5}
              className=""
              style={{
                textAlign: 'left'
              }}
            >
              <NotificationComponent />
            </Col>
          </Row>
        </Container>
        {/* Dashboard Recent Jobs and Recent Applicants section */}
        <Container className={`${styles.section3}`}>
          <Row className="gx-3 gy-3">
            <Col md={6}>
              <RecentJobsComponents />
            </Col>
            <Col md={6}>
              <RecentApplicationsComponents />
            </Col>
          </Row>
        </Container>
      </div>
    </EmployerLayout>
  );
};

export default EmployerDashboardPage;
