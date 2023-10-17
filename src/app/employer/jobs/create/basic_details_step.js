'use client';
import styles from './job_create.module.css';
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Select from 'react-select';

import Button from 'react-bootstrap/Button';

import Image from 'next/image';
import Location24Img from '../../../../../public/assets/images/location_24x24.png';
import LenseImg from '../../../../../public/assets/images/lense.svg';
import PlusImg from '../../../../../public/assets/images/plus.svg';
import MinusImg from '../../../../../public/assets/images/minus.svg';
import SaveImg from '../../../../../public/assets/images/save.svg';
import NextArrowImg from '../../../../../public/assets/images/nextArrow.svg';
import GreenTickImg from '../../../../../public/assets/images/green_tick.svg';

const BasicDetailStep = ({ basicDetails, setBasicDetails }) => {
  const [passwordText, setPasswordText] = useState('password');
  const [subCategoroesList, setSubCategoroesList] = useState([]);

  const showPassword = () => {
    if (passwordText === 'password') {
      setPasswordText('text');
    } else if (passwordText === 'text') {
      setPasswordText('password');
    }
  };
  const handlePlusClick = (values, setFieldValue) => {
    let no_of_people = parseInt(values.no_of_people);
    if (isNaN(no_of_people)) {
      no_of_people = 1;
    } else {
      no_of_people++;
    }
    values.no_of_people = no_of_people;
    setFieldValue('no_of_people', no_of_people, true);
  };

  const handleMinusClick = (values, setFieldValue) => {
    let no_of_people = parseInt(values.no_of_people);
    no_of_people--;
    if (isNaN(no_of_people)) {
      no_of_people = '';
    } else if (no_of_people < 0) {
      no_of_people = '';
    }
    values.no_of_people = no_of_people;
    setFieldValue('no_of_people', no_of_people, true);
  };

  const type_of_eployement_list = [
    'Part-time',
    'Full-time',
    'Internship',
    'Contract / Temporary',
    'Freelance'
  ];
  const type_of_environment_list = [
    'Day',
    'Night',
    'Rotation',
    '5 Day Work',
    'Work from home',
    'On Weekends',
    'Weekend availablity'
  ];
  const form_steps = [
    'Basic Details',
    'Job Details',
    'Questions for Candidate'
  ];
  const job_category_options = [
    { value: '', label: 'Search' },
    { value: 'web_developer', label: 'Web Developer' },
    { value: 'web_designer', label: 'Web Designer' },
    { value: 'project_manager', label: 'Project Manager' }
  ];
  const sub_categoroes_list = [
    'Front-end Developer',
    'Back-end Developer',
    'Full-stack Developer',
    'React Developer',
    'Node.js Developer',
    'Angular Developer',
    'WordPress Developer',
    'Web Analyst',
    'UX Designer',
    'Technical Consultant'
  ];
  const sub_categoroes = {
    web_developer: [
      'Front-end Developer',
      'Back-end Developer',
      'Full-stack Developer',
      'React Developer',
      'Node.js Developer',
      'Angular Developer',
      'WordPress Developer'
    ],
    web_designer: ['UX Designer'],
    project_manager: ['Web Analyst', 'Technical Consultant']
  };

  const handleFormValidation = (values) => {
    const errors = {};

    if (!values.job_title) {
      errors.job_title = 'Job title is required.';
    }
    if (!values.location) {
      errors.location = 'Location is required.';
    }
    if (!values.city) {
      errors.city = 'City is required.';
    }
    if (!(values.job_category != '' && values.job_category.length != 0)) {
      errors.job_category = 'Category of Job is required.';
    } else if (
      !(
        values.job_sub_categories != '' && values.job_sub_categories.length != 0
      )
    ) {
      errors.job_sub_categories = 'Sub Category of Job is required.';
    }

    if (
      values.type_of_employement == '' ||
      values.type_of_employement.length == 0
    ) {
      errors.type_of_employement = 'Type of employement is required.';
    }

    if (
      values.type_of_environment == '' ||
      values.type_of_environment.length == 0
    ) {
      errors.type_of_environment = 'Type of environment is required.';
    }
    if (!values.min_amount) {
      errors.min_amount = 'Minimum amount is required.';
    }

    if (!values.max_amount) {
      errors.max_amount = 'Maximum amount is required.';
    }
    if (!values.no_of_people) {
      errors.no_of_people = 'Number of people is required.';
    }
    if (!values.expiration_date) {
      errors.expiration_date = 'Date of expiration is required.';
    }
    return errors;
  };

  const handleFormSubmission = (values, { setSubmitting }) => {
    setTimeout(() => {
      setBasicDetails({
        ...basicDetails,
        job_title: values.job_title,
        location: values.location,
        city: values.city,
        job_category: values.job_category,
        job_sub_categories: values.job_sub_categories,
        type_of_employement: values.type_of_employement,
        type_of_environment: values.type_of_environment,
        runemeration_type: values.runemeration_type,
        min_amount: values.min_amount,
        max_amount: values.max_amount,
        no_of_people: values.no_of_people,
        expiration_date: values.expiration_date
      });
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      {/* form section start here */}
      <Formik
        initialValues={{
          job_title: '',
          location: '',
          city: '',
          job_category: '',
          job_sub_categories: '',
          type_of_employement: '',
          type_of_environment: '',
          runemeration_type: '',
          min_amount: '',
          max_amount: '',
          no_of_people: '',
          expiration_date: ''
        }}
        validate={handleFormValidation}
        onSubmit={handleFormSubmission}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
          //  and other goodies
        }) => (
          <form
            className={`${styles.loginFromBox} col-12 d-inline-flex flex-column`}
            onSubmit={handleSubmit}
          >
            {/* Job title input */}
            <div
              className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
            >
              <div className={`${styles.heading} display: inline-block`}>
                <span className={`${styles.required} `}>*</span>Basic Details
              </div>
              <input
                type="text"
                name="job_title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job_title}
                placeholder="Enter here"
                autoComplete="off"
                className={`${styles.formInput} d-inline-block col-12`}
              />
              <label
                className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
              >
                Job title
              </label>
              {errors.job_title && touched.job_title && errors.job_title && (
                <span className={`${styles.fromError} d-inline-block`}>
                  {errors.job_title}
                </span>
              )}
            </div>
            {/* Location input */}
            <div
              className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
            >
              <div className={`${styles.heading} display: inline-block`}>
                <span className={`${styles.required} `}>*</span>
                Location
              </div>
              <div className={`${styles.flex_parent_element} `}>
                <div className={`${styles.flex_child_element} position-relative`}>
                  <input
                    type="text"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                    placeholder="Enter here"
                    autoComplete="off"
                    className={`${styles.formInput} d-inline-block col-12`}
                  />
                  <label
                    className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}
                  >
                    Location
                  </label>
                  <Image
                    src={Location24Img}
                    role="button"
                    alt="Eye"
                    onClick={() => showPassword()}
                    className={`${styles.location_point_left} position-absolute`}
                  />
                  {errors.location && touched.location && errors.location && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.location}
                    </span>
                  )}
                </div>

                <div className={`${styles.flex_child_element} position-relative`}>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    placeholder="Enter here"
                    autoComplete="off"
                    className={`${styles.formInput} d-inline-block col-12`}
                  />
                  <label
                    className={`${styles.formLabel} ${styles.formLabelCity} position-absolute d-inline-flex align-items-center`}
                  >
                    City
                  </label>
                  <Image
                    src={Location24Img}
                    role="button"
                    alt="Eye"
                    onClick={() => showPassword()}
                    className={`${styles.passwordEye} position-absolute`}
                  />
                  {errors.city && touched.city && errors.city && (
                    <span className={`${styles.fromError} d-inline-block`}>
                      {errors.city}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* Category of Job input */}
            <div
              className={`${styles.FormElementFloating} position-relative d-inline-block`}
            >
              <div
                className={`${styles.heading} ${styles.category_box} display: inline-block`}
              >
                <span className={`${styles.required} `}>*</span>
                Category of Job
                <div className={`${styles.category_text} `}>
                  Paste link for the 3rd-party video conference service
                </div>
              </div>

              {/* <input
                type="text"
                name="job_category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job_category}
                placeholder="Enter here"
                autoComplete="off"
                className={`${styles.formInput} d-inline-block col-12`}
              /> */}
              <Select
                className={`${styles.formInput} ${styles.formInputJobCategory} d-inline-block col-12`}
                classNamePrefix={`select_job_category`}
                defaultValue={values.job_category}
                onChange={(data) => {
                  let value = data ? data.value : '';
                  setFieldValue('job_category', value, true);
                  setFieldValue('job_sub_categories', [], true);
                  setSubCategoroesList(sub_categoroes[value]);
                }}
                onBlur={handleBlur}
                placeholder={'Search'}
                isClearable={true}
                isSearchable={true}
                name="job_category"
                options={job_category_options}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    height: '100%'
                  })
                }}
              />
              <label
                className={`${styles.formLabel} ${styles.formLabelSearch} formLabelSearch position-absolute d-inline-flex align-items-center`}
              >
                Search Job Category
              </label>

              {/* <Image
                src={LenseImg}
                role="button"
                alt="Eye"
                onClick={() => showPassword()}
                className={`${styles.job_create_lense} position-absolute`}
              /> */}

              {errors.job_category &&
                touched.job_category &&
                errors.job_category && (
                  <span className={`${styles.fromError} d-inline-block`}>
                    {errors.job_category}
                  </span>
                )}
              {values.job_category != '' && values.job_category.length != 0 && (
                <div
                  className={`${styles.subCategoryBox} col-12 position-relative d-inline-block`}
                >
                  <div className={`${styles.subcat_label} `}>
                    Select sub-category related to you job
                  </div>
                  <div
                    role="group"
                    className={``}
                    aria-labelledby="checkbox-group"
                  >
                    {subCategoroesList &&
                      subCategoroesList?.map((val, index, arr) => {
                        return (
                          <React.Fragment key={`key-${index}`}>
                            <label
                              className={
                                `${styles.job_sub_categories_label} ` +
                                (values.job_sub_categories.lastIndexOf(val) !==
                                -1
                                  ? `${styles.job_sub_categories_label_green} `
                                  : '')
                              }
                            >
                              <Field
                                type="checkbox"
                                className={`${styles.job_sub_categories}`}
                                name="job_sub_categories"
                                value={val}
                              />
                              <Image
                                src={
                                  values.job_sub_categories.lastIndexOf(val) ==
                                  -1
                                    ? PlusImg
                                    : GreenTickImg
                                }
                                role="button"
                                alt=""
                                className={`${styles.job_sub_categories_icon} `}
                              />
                              <span
                                className={`${styles.type_of_employement_text} `}
                              >
                                {val}
                              </span>
                            </label>
                          </React.Fragment>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
            {/* Type of employement input */}
            <div
              className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
            >
              <div className={`${styles.heading} display: inline-block`}>
                <span className={`${styles.required} `}>*</span>Type of
                Employement
              </div>
              <div role="group" className={``} aria-labelledby="checkbox-group">
                {type_of_eployement_list &&
                  type_of_eployement_list?.map((val, index, arr) => {
                    return (
                      <React.Fragment key={`key-${index}`}>
                        <label
                          className={
                            `${styles.type_of_employement_label} ` +
                            (values.type_of_employement.lastIndexOf(val) !== -1
                              ? `${styles.type_of_employement_label_green} `
                              : '')
                          }
                        >
                          <Field
                            type="checkbox"
                            className={`${styles.type_of_employement}`}
                            name="type_of_employement"
                            value={val}
                          />
                          <Image
                            src={
                              values.type_of_employement.lastIndexOf(val) == -1
                                ? PlusImg
                                : GreenTickImg
                            }
                            role="button"
                            alt=""
                            className={`${styles.type_of_employement_icon} `}
                          />
                          <span
                            className={`${styles.type_of_employement_text} `}
                          >
                            {val}
                          </span>
                        </label>
                      </React.Fragment>
                    );
                  })}
              </div>
              {errors.type_of_employement &&
                touched.type_of_employement &&
                errors.type_of_employement && (
                  <span className={`${styles.fromError} d-inline-block`}>
                    {errors.type_of_employement}
                  </span>
                )}
            </div>
            {/* * Type of Environment input */}
            <div
              className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
            >
              <div className={`${styles.heading} display: inline-block`}>
                <span className={`${styles.required} `}>*</span> Type of
                Environment
              </div>
              <div role="group" className={``} aria-labelledby="checkbox-group">
                {type_of_environment_list &&
                  type_of_environment_list?.map((val, index, arr) => {
                    return (
                      <React.Fragment key={`key-${index}`}>
                        <label
                          className={
                            `${styles.type_of_environment_label} ` +
                            (values.type_of_environment.lastIndexOf(val) !== -1
                              ? `${styles.type_of_environment_label_green} `
                              : '')
                          }
                        >
                          <Field
                            type="checkbox"
                            className={`${styles.type_of_environment}`}
                            name="type_of_environment"
                            value={val}
                          />
                          <Image
                            src={
                              values.type_of_environment.lastIndexOf(val) == -1
                                ? PlusImg
                                : GreenTickImg
                            }
                            role="button"
                            alt=""
                            className={`${styles.type_of_environment_icon} `}
                          />
                          <span
                            className={`${styles.type_of_employement_text} `}
                          >
                            {val}
                          </span>
                        </label>
                      </React.Fragment>
                    );
                  })}
              </div>
              {errors.type_of_environment &&
                touched.type_of_environment &&
                errors.type_of_environment && (
                  <span className={`${styles.fromError} d-inline-block`}>
                    {errors.type_of_environment}
                  </span>
                )}
            </div>
            {/*  Runemeration section*/}
            <div className={`${styles.RunemerationSection}`}>
              <div className={`${styles.heading} display: inline-block`}>
                <span className={`${styles.required} `}>*</span> Runemeration
              </div>

              <div className={`${styles.flex_parent_element}`}>
                {/* Runemeration type input */}
                <div
                  className={`${styles.flex_child_element}  position-relative`}
                >
                  <select
                    name="runemeration_type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.runemeration_type}
                    // defaultValue={"Salary"}
                    placeholder="Enter here"
                    autoComplete="off"
                    className={`${styles.formInput} `}
                  >
                    <option value="Salary">Salary</option>
                  </select>
                  <label
                    className={`${styles.formLabel} ${styles.formLabelRunemerationType} position-absolute d-inline-flex align-items-center`}
                  >
                    Runemeration type
                  </label>
                  {errors.runemeration_type &&
                    touched.runemeration_type &&
                    errors.runemeration_type && (
                      <div className={`${styles.fromError} `}>
                        {errors.runemeration_type}
                      </div>
                    )}
                </div>
                {/* Rate input */}
                <div
                  className={`${styles.flex_child_element}  position-relative`}
                >
                  <select
                    name="rate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rate}
                    // defaultValue={"Monthly"}
                    placeholder="Enter here"
                    autoComplete="off"
                    className={`${styles.formInput} `}
                  >
                    <option value="Monthly">Monthly</option>
                  </select>
                  <label
                    className={`${styles.formLabel} ${styles.formLabelRunemerationType}  position-absolute d-inline-flex align-items-center`}
                  >
                    Rate
                  </label>
                  {errors.rate && touched.rate && errors.rate && (
                    <div className={`${styles.fromError} `}>{errors.rate}</div>
                  )}
                </div>
              </div>
              {/* Runemeration Second row */}
              <div
                className={`${styles.flex_parent_element} ${styles.runemeration_gap} `}
              >
                <div
                  className={`${styles.flex_child_element}  ${styles.lable_minimum_amount} position-relative`}
                >
                  Minimum Amount:
                </div>
                <div
                  className={`${styles.flex_child_element}  position-relative`}
                >
                  <input
                    name="min_amount"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.min_amount}
                    placeholder="Enter here"
                    autoComplete="off"
                    className={`${styles.formInput} ${styles.hide_number_arrow}`}
                  />
                  <label
                    className={`${styles.formLabel} ${styles.formLabelRunemerationType}  position-absolute d-inline-flex align-items-center`}
                  >
                    Amount
                  </label>
                  {errors.min_amount &&
                    touched.min_amount &&
                    errors.min_amount && (
                      <div className={`${styles.fromError} `}>
                        {errors.min_amount}
                      </div>
                    )}
                </div>
              </div>
              {/* Runemeration Third row */}
              <div
                className={`${styles.flex_parent_element} ${styles.runemeration_gap} `}
              >
                <div
                  className={`${styles.flex_child_element}  ${styles.lable_minimum_amount} position-relative`}
                >
                  Maximum Amount:
                </div>
                <div
                  className={`${styles.flex_child_element}  position-relative`}
                >
                  <input
                    type="number"
                    name="max_amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.max_amount}
                    placeholder="Enter here"
                    autoComplete="off"
                    className={`${styles.formInput} ${styles.hide_number_arrow}`}
                  />
                  <label
                    className={`${styles.formLabel} ${styles.formLabelRunemerationType}  position-absolute d-inline-flex align-items-center`}
                  >
                    Amount
                  </label>
                  {errors.max_amount &&
                    touched.max_amount &&
                    errors.max_amount && (
                      <div className={`${styles.fromError} `}>
                        {errors.max_amount}
                      </div>
                    )}
                </div>
              </div>
              {/* Runemeration Fourth row */}
              <div
                className={`${styles.flex_parent_element} ${styles.runemeration_gap_2} `}
              >
                <div
                  className={`${styles.flex_child_element}  ${styles.lable_no_of_people} position-relative`}
                >
                  <span className={`${styles.required}`}>*</span> Number of
                  people to be hired
                </div>
                <div
                  className={`${styles.flex_child_element}  position-relative`}
                >
                  <Image
                    src={MinusImg}
                    role="button"
                    alt="Eye"
                    onClick={() => handleMinusClick(values, setFieldValue)}
                    className={`${styles.MinusImg} position-absolute`}
                  />
                  <input
                    type="number"
                    name="no_of_people"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.no_of_people}
                    placeholder="Select"
                    autoComplete="off"
                    className={`${styles.formInput} text-center ${styles.hide_number_arrow}`}
                  />
                  <label
                    className={`${styles.formLabel} ${styles.formLabelRunemerationType}  position-absolute d-inline-flex align-items-center`}
                  >
                    Number
                  </label>
                  <Image
                    src={PlusImg}
                    role="button"
                    alt="Eye"
                    onClick={() => handlePlusClick(values, setFieldValue)}
                    className={`${styles.PlusImg} position-absolute`}
                  />

                  {errors.no_of_people &&
                    touched.no_of_people &&
                    errors.no_of_people && (
                      <div className={`${styles.fromError} `}>
                        {errors.no_of_people}
                      </div>
                    )}
                </div>
              </div>
              {/* Runemeration Fifth row */}
              <div
                className={`${styles.flex_parent_element} ${styles.expiration_date_box} `}
              >
                <div
                  className={`${styles.flex_child_element}  ${styles.lable_expiration_date} position-relative`}
                >
                  <span className={`${styles.required}`}>*</span> Date
                </div>
                <div
                  className={`${styles.flex_child_element}  position-relative`}
                >
                  <input
                    type="date"
                    name="expiration_date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.expiration_date}
                    placeholder="Select Date"
                    autoComplete="off"
                    className={`${styles.formInput}`}
                  />
                  <label
                    className={`${styles.formLabel} ${styles.formLabelRunemerationType}  position-absolute d-inline-flex align-items-center`}
                  >
                    Date of Expiration
                  </label>
                  {errors.expiration_date &&
                    touched.expiration_date &&
                    errors.expiration_date && (
                      <div className={`${styles.fromError} `}>
                        {errors.expiration_date}
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* Submit Buttons  */}
            <div
              className={`${styles.btn_block} d-flex justify-content-between`}
            >
              <Button variant="none" className={`${styles.save_as_draft_btn}`}>
                Save as Draft <Image src={SaveImg} role="button" alt="Eye" />
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="none"
                className={`${styles.next_btn}`}
              >
                Next <Image src={NextArrowImg} role="button" alt="Eye" />
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default BasicDetailStep;
