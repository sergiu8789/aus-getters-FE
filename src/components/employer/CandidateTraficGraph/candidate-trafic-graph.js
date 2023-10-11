import styles from './candidate-trafic-graph.module.css';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CandidateTraficGraphComponent = () => {
  return (
    <div className={`${styles.page_conatainer}`}>
      <Container>
        <Row className="gx-3 gy-3">
          <Col>
            <div className={`${styles.title}`}>Candidate traffic</div>
          </Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CandidateTraficGraphComponent;
