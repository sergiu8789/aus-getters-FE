'use client';
import React, { useState } from 'react';
import JobCard from '../JobsPortal/JobCard/JobCard';
import styles from './JobsTable.module.css';
import Link from 'next/link';
import ArrowUpIcon from '@/components/global/Icons/ArrowUpIcon';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="col-12 d-inline-block mt-5">
      <div className="container">
        <h4 className={`${styles.TableHeading} col-12 mb-4`}>Jobs</h4>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className={`gap-3 d-flex align-items-center`}>
            <Link
              href="/jobs/applied"
              className={`${
                type === 'applied'
                  ? styles.BtnCustomPrimary
                  : styles.BtnCustomSecondary
              } d-flex align-items-center justify-content-center text-decoration-none`}
            >
              Applied
            </Link>
            <Link
              href="/jobs/bookmarked"
              className={`${
                type === 'bookmark'
                  ? styles.BtnCustomPrimary
                  : styles.BtnCustomSecondary
              } d-flex align-items-center justify-content-center text-decoration-none`}
            >
              Bookmarked
            </Link>
          </div>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className={`${styles.SelectDropdown} flex-shrink-0 d-flex justify-content-between align-items-center`}
          >
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 d-inline-flex flex-wrap">
          {Array.from(Array(5)).map((i) => (
            <div key={i} className="col-md-4 mb-3 px-2">
              <JobCard type={type} />
            </div>
          ))}
        </div>
        <div className={styles.ArrowUpIcon}>
          <div className=" d-flex justify-content-end" onClick={scrollToTop}>
            {' '}
            <ArrowUpIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsTable;
