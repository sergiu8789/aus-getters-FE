import styles from './job_create.module.css';
import innerStyles from './job_details_step.module.css';
import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import Button from 'react-bootstrap/Button';
import SaveImg from '../../../../../public/assets/images/save.svg';
import NextArrowImg from '../../../../../public/assets/images/nextArrow.svg';

import Image from 'next/image';
import UploadImg from '../../../../../public/assets/images/upload.svg';
import LenseImg from '../../../../../public/assets/images/lense.svg';
import crossArrow from '../../../../../public/assets/images/redCross.svg';
import TrashboxImg from '../../../../../public/assets/images/trashbox.svg';
import Select from 'react-select';

const JobDetailsComponent = () => {
  const [skills, setSkills] = useState([]);
  const handleFormValidation = (values) => {
    const errors = {};

    return errors;
  };

  const handleFormSubmission = (values, { setSubmitting }) => {};

  const search_skills_options = [
    { value: 'WebPress', label: 'WebPress' },
    { value: 'NodeJs', label: 'NodeJs' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Angular', label: 'Angular' },
    { value: 'lms_plugins', label: 'LMS Plugins' }
  ];

  
  return (
    <Formik
      initialValues={{
        job_title: '',
        description:
          'onsectetur iaculis aliquam. Maecenas id arcu aliquam, ultrices nibh eget, congue odio. Nam fringilla risus eget lacus venenatis scelerisque. Sed tempor arcu tellus, quis vehicula tortor bibendum et. Sed vestibulum odio sed ex blandit sodales. Ut id sollicitudin risus. Aliquam cursus ultricies sollicitudin. Aliquam feugiat elit feugiat leo consectetur, a sodales leo euismod. Aenean varius finibus tincidunt. Quisque non tellus et tellus feugiat venenatis sit amet a dolor. Aliquam ut dolor mollis, commodo libero quis, ullamcorper nisi.',
        responsibilty:
          'a dictumst. Ut id interdum augue. Fusce non eleifend tortor. In consectetur ligula dapibus enim vulputate vestibulum. Integer ac sem id ipsum sagittis rutrum at vitae quam.'
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
          {/* Describe your Job */}
          <div className={`${styles.heading} ${innerStyles.heading}`}>
            <span className={`${styles.required} `}>*</span> Describe your Job
          </div>
          <div
            className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
          >
            <label className={`${innerStyles.documentLabel} `}>
              <input
                type="file"
                name="document"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.job_title}
                autoComplete="off"
                className={`${innerStyles.document} `}
              />
              <Image
                src={UploadImg}
                role="button"
                alt="Eye"
                className={`${innerStyles.UploadImg} `}
              />
              Upload document (.doc, .pdf)
            </label>
          </div>
          <div
            className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
          >
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              placeholder="Enter here"
              autoComplete="off"
              className={`${styles.formInput} ${innerStyles.formInputDescription} d-inline-block col-12`}
            ></textarea>
            <label
              className={`${styles.formLabel} ${innerStyles.formLabeldDescription} position-absolute d-inline-flex align-items-center`}
            >
              Description (250 words)
            </label>
            {errors.description &&
              touched.description &&
              errors.description && (
                <span className={`${styles.fromError} d-inline-block`}>
                  {errors.description}
                </span>
              )}
          </div>

          {/* * Key Responsibilities */}
          <div className={`${styles.heading} ${innerStyles.heading}`}>
            <span className={`${styles.required} `}>*</span> Key
            Responsibilities
          </div>
          <div
            className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
          >
            <label className={`${innerStyles.documentLabel} `}>
              <input
                type="file"
                name="document_responsibility"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.document_responsibility}
                autoComplete="off"
                className={`${innerStyles.document} `}
              />
              <Image
                src={UploadImg}
                role="button"
                alt="Eye"
                className={`${innerStyles.UploadImg} `}
              />
              Upload document (.doc, .pdf)
            </label>
          </div>
          <div
            className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
          >
            <textarea
              type="text"
              name="responsibilty"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.responsibilty}
              placeholder="Enter here"
              autoComplete="off"
              className={`${styles.formInput} ${innerStyles.formInputResponsibilty} d-inline-block col-12`}
            ></textarea>
            <label
              className={`${styles.formLabel} ${innerStyles.formLabeldResponsibilty} position-absolute d-inline-flex align-items-center`}
            >
              Key Responsibilities (5 points)
            </label>
            {errors.responsibilty &&
              touched.responsibilty &&
              errors.responsibilty && (
                <span className={`${styles.fromError} d-inline-block`}>
                  {errors.responsibilty}
                </span>
              )}
          </div>

          {/* Wanted Skills input */}
          <div
            className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
          >
            <div className={`${styles.heading} display: inline-block`}>
              <span className={`${styles.required} `}>*</span> Wanted Skills
            </div>
            {/* <input
              type="text"
              name="search_skills"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.search_skills}
              placeholder="Search"
              autoComplete="off"
              className={`${styles.formInput} d-inline-block col-12`}
            /> */}
            <Select
              className={`${styles.formInput} ${styles.formInputJobCategory} d-inline-block col-12`}
              classNamePrefix={`search_skills`}
              defaultValue={[values.search_skills]}
              onChange={(data) => {
                console.log(data);
                let value = data ? data.value : '';
                setFieldValue('search_skills', value, true);
                setFieldValue('job_sub_categories', [], true);
                //setSubCategoroesList(sub_categoroes[value]);
                setSkills(data);
              }}
              isMulti
              onBlur={handleBlur}
              placeholder={'Search'}
              isClearable={true}
              isSearchable={true}
              name="search_skills"
              options={search_skills_options}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  height: '100%'
                })
              }}
            />
            <label
              className={`${styles.formLabel} ${styles.formLabelWantedSkills} position-absolute d-inline-flex align-items-center`}
            >
              Search Skills
            </label>
            {/* <Image
              src={LenseImg}
              role="button"
              alt="Eye"
              className={`${innerStyles.LenseImg} position-absolute`}
            /> */}
            {errors.search_skills &&
              touched.search_skills &&
              errors.search_skills && (
                <span className={`${styles.fromError} d-inline-block`}>
                  {errors.search_skills}
                </span>
              )}
          </div>
          <div
            className={`${styles.FormElementFloating} col-12 position-relative d-inline-block`}
          >
            <div
              className={`${innerStyles.loginFormFloating} col-md-12  position-relatived-flex align-items-between gap-4`}
            >
              {skills &&
                skills?.map((val, index) => {
                  return <div key={index}
                    className={`${innerStyles.loginFormBox} ${innerStyles.wantedSkillChildConatiner} col-6 box d-inline-block flex-shrink-1 position-relatived `}
                  
                  >
                    <span
                      className={`${innerStyles.removeSkill} position-absolute d-inline-flex align-items-center justify-content-center`}
                    >
                      <Image
                        src={TrashboxImg}
                        alt="Cross"
                        className="object-fit-contain"
                      />
                    </span>
                    <span
                      className={`${innerStyles.selectSkillName} position-absolute d-inline-flex align-items-center justify-content-center`}
                    >
                      {val.label}
                    </span>
                    <select
                      name="skills"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${styles.formSelect} ${innerStyles.formSelect}  d-inline-block col-12`}
                      role="button"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advance">Advance</option>
                    </select>
                  </div>;
                })}
            </div>
          </div>
          {/* Submit Buttons  */}
          <div
              className={`${styles.btn_block} `}
            >
              <Button variant="none" className={`${styles.save_as_draft_btn} ${innerStyles.save_as_draft_btn} d-inline-block`}>
                Save as Draft <Image src={SaveImg} role="button" alt="Eye" />
              </Button>
              <div className='d-inline-block float-end'>
              <Button
                type="button"
                variant="none"
                className={`${styles.pre_btn} ${innerStyles.pre_btn} d-inline-block`}
              >
                Previous <Image src={NextArrowImg} role="button" alt="Eye" />
              </Button> {" "}
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="none"
                className={`${styles.next_btn} ${innerStyles.next_btn}  d-inline-block`}
              >
                Next <Image src={NextArrowImg} role="button" alt="Eye" />
              </Button>
              </div>
            </div>
        </form>
      )}
    </Formik>
  );
};

export default JobDetailsComponent;
