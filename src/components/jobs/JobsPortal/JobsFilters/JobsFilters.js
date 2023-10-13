'use client';

import styles from './JobsFilters.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import SalaryRangeSlider from '@/components/global/common/SalaryRangeSlider/SalaryRangeSlider';

const JobsFilters = () => {
  return (
    <div className={styles.jobsFilters}>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Dropdown.Toggle variant="secondary">Employment Type</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Full Time</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Part Time</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Dropdown.Toggle variant="secondary">All Categories</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Accounting</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cuisine</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Development</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown variant="secondary" className={styles.filterDropdown}>
          <Dropdown.Toggle variant="secondary">Remuneration </Dropdown.Toggle>
          <Dropdown.Menu className={styles.rangeWrap}>
            <SalaryRangeSlider />
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Dropdown.Toggle variant="secondary">Environment</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Collaborative</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Independent</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Structured</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Dropdown.Toggle variant="secondary">Where</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">In Person</Dropdown.Item>
            <Dropdown.Item href="#/action-2">At home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown variant="secondary" className={styles.filterDropdown}>
          <Dropdown.Toggle variant="secondary">
            Completetion of course required
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
            <Dropdown.Item href="#/action-2">No</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default JobsFilters;
