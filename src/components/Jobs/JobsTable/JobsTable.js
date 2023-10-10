'use client';
import React, { useState } from 'react';
import JobsTableRow from '../JobsTableRow/JobsTableRow';
import styles from './JobsTable.module.css';
import Link from 'next/link';
const JobsTable = (props) => {
  const { type } = props;
  const [selectedOption, setSelectedOption] = useState('');

  const selectOptions = [
    { value: '', label: 'Select Date Range' },
    { value: 'last6months', label: 'Last 6 months' },
    { value: 'lastmonth', label: 'Last month' },
    { value: 'lastweek', label: 'Last week' },
    { value: 'lastyear', lazbel: 'Last year' }
  ];

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`${styles.TableContainer} container`}>
      <div className={styles.TableHeading}>Jobs</div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className={`${styles.BtnWrapper}  d-flex align-items-center`}>
          <Link href="/jobs/applied">
            <button
              className={`${
                type === 'applied'
                  ? styles.BtnCustomPrimary
                  : styles.BtnCustomSecondary
              }`}
            >
              Applied
            </button>
          </Link>
          <Link href="/jobs/bookmarked">
            <button
              className={`${
                type === 'bookmark'
                  ? styles.BtnCustomPrimary
                  : styles.BtnCustomSecondary
              }`}
            >
              Bookmarked
            </button>
          </Link>
        </div>
        <select
          value={selectedOption}
          onChange={handleSelectChange}
          className={styles.SelectDropdown}
        >
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={`${styles.TableHeader}`}>
        <div className={styles.FirstHeading}>Job titile</div>
        <div className={styles.SecondHeading}>Applied date</div>
        <div className={styles.LastHeading}>Status</div>
        <div className={styles.LastHeading}>Action</div>
      </div>
      <JobsTableRow type={type} />
    </div>
  );
};

export default JobsTable;
