import React, { useState } from 'react';
import styles from './WorkPrefer.module.css';

const Workprefer = () => {
  const [formValues, setFormValues] = useState({
    experience: 'Experience',
    salary: '',
    salaryType: '',
    workProfile: '',
    industryExpertise: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = () => {
    // Trigger your API call here using formValues
    console.log('Form Values:', formValues);
  };

  return (
    <React.Fragment>
      <form className="row mt-3">
        <h6>Work Preference</h6>
        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6`}>
          <select
            name="experience"
            value={formValues.experience}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.formSelect} col-12`}
          >
            <option value="Experience">Experience</option>
            <option value="0">0</option>
            <option value="1-2">1-2</option>
            <option value="3-5">3-5</option>
            <option value="5+">5+</option>
          </select>
        </div>
        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-4`}>
          <input
            type="text"
            name="salary"
            placeholder="Expected Salary"
            className="w-100"
            value={formValues.salary}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-2`}>
          <select
            name="salaryType"
            value={formValues.salaryType}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.formSelect} col-12`}
          >
            <option value="">Salary type</option>
            <option value="Traditional">Traditional</option>
            <option value="Broadband">Broadband</option>
            <option value="Market-based">Market-based</option>
          </select>
        </div>
        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6`}>
          <select
            name="workProfile"
            value={formValues.workProfile}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.formSelect} col-12`}
          >
            <option value="">Work Profile</option>
            <option value="Designer">Designer</option>
            <option value="Developer">Developer</option>
            <option value="CMS">CMS</option>
          </select>
        </div>
        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6`}>
          <select
            name="industryExpertise"
            value={formValues.industryExpertise}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.formSelect} col-12`}
          >
            <option value="">Industry Expertise</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
          </select>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Workprefer;
