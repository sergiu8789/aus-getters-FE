import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import styles from './page_title.module.css';
import Link from 'next/link';

const PageTitleComponent = (props) => {
  const pageTitle = props.pageTitle;
  const isShowJobBtn = props.isShowJobBtn || false;
  const pageSubTitle = props.pageSubTitle;
  return (
    <Container className={`${styles.page_top}`}>
      <Row>
        <div className="d-flex align-items-center">
          <div className={`${styles.page_title} `}>{pageTitle}</div>
        </div>
        {isShowJobBtn && (
          <Col>
            <div className={`${styles.page_top_btn} d-inline-block`}>
              <Link
                href="/employer/jobs/create"
                className={`${styles.btn_pink} `}
                variant="none"
              >
                Post a Job
              </Link>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default PageTitleComponent;
