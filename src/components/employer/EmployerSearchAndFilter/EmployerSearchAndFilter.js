import Select from 'react-select';
import styles from './EmployerSearchAndFilter.module.css';
import React from 'react';

const EmployerSearchAndFilter = (props) => {
  const { selects } = props;
  return (
    <div className="d-flex gap-5 py-4">
      <div className="flex-grow-1">
        <input
          className={`w-100 ${styles.formInput} ${styles.formInputSearch}`}
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="d-flex gap-3 align-items-center">
        {selects.map((x, i) => (
          <React.Fragment key={i}>
            <Select
              options={x.options}
              value={x.options.find((option) => option.value === x.value)}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: '150px',
                  fontSize: '14px',
                  letterSpacing: '-0.28px',
                  textAlign: 'left'
                }),
                option: (provided) => ({
                  ...provided,
                  fontSize: '14px',
                  padding: '3px 8px'
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  padding: '0 2px 0 6px'
                })
              }}
            />
          </React.Fragment>
        ))}

        {/* <select className={styles.formSelect}>
          <option>Rejected</option>
          <option>Shortlisted</option>
          <option>Hired</option>
          <option></option>
        </select>
        <select className={styles.formSelect}>
          <option>Last 6 Months</option>
          <option>This Year</option>
          <option>All Time</option>
        </select> */}
      </div>
    </div>
  );
};

export default EmployerSearchAndFilter;
