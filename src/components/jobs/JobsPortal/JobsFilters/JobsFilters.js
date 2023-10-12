import styles from './JobsFilters.module.css';
import Dropdown, { Menu, Toggle, Item } from 'react-bootstrap/Dropdown';

const JobsFilters = () => {
  return (
    <div className={styles.jobsFilters}>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Toggle variant="secondary">Employment Type</Toggle>
          <Menu>
            <Item href="#/action-1">Full Time</Item>
            <Item href="#/action-2">Part Time</Item>
            <Item href="#/action-3">Something else</Item>
          </Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Toggle variant="secondary">All Categories</Toggle>
          <Menu>
            <Item href="#/action-1">Accounting</Item>
            <Item href="#/action-2">Cuisine</Item>
            <Item href="#/action-3">Development</Item>
          </Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Toggle variant="secondary">Environment</Toggle>
          <Menu>
            <Item href="#/action-1">Collaborative</Item>
            <Item href="#/action-2">Independent</Item>
            <Item href="#/action-3">Structured</Item>
          </Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown className={styles.filterDropdown}>
          <Toggle variant="secondary">Where</Toggle>
          <Menu>
            <Item href="#/action-1">In Person</Item>
            <Item href="#/action-2">At home</Item>
          </Menu>
        </Dropdown>
      </div>
      <div className={styles.jobFilter}>
        <Dropdown variant="secondary" className={styles.filterDropdown}>
          <Toggle variant="secondary">Completetion of course required</Toggle>
          <Menu>
            <Item href="#/action-1">Yes</Item>
            <Item href="#/action-2">No</Item>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default JobsFilters;
