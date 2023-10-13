import React from 'react';
import { Formik, useFormik } from 'formik';
import styles from './Basicdetails.module.css';

export const EditBasicdetails = () => {
  const formik = useFormik({
    initialValues: {
      Firstname: '',
      Lastname: '',
      Email: '',
      Password: '',
      Number: '',
      Age: '',
      Location: '',
      City: '',
      Address: '',
      Description: ''
    },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    }
  });
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <h6>Basic Details</h6>
        <div className="col-12">
          <div className={`${styles.edit_Basic_detail} row`}>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="text"
                name="Firstname"
                placeholder="name"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Firstname}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> First Name
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="text"
                name="Lastname"
                placeholder="name"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Lastname}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Last Name
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Email Address
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="password"
                name="Password"
                placeholder="Password"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Password}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Password
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="text"
                name="Number"
                placeholder="Number"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Number}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Contact Number
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="text"
                name="Age"
                placeholder="Age"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Age}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Age
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="text"
                name="Location"
                placeholder="Location"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Location}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Location
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}
            >
              <input
                type="text"
                name="City"
                placeholder="City"
                className={`${styles.formInput} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.City}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> City
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-12 mb-4 position-relative`}
            >
              <textarea
                name="Address"
                rows={2}
                cols={40}
                className={`${styles.formInput} ${styles.form_textarea} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Address}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Complete Address
              </label>
            </div>
            <div
              className={`${styles.edit_single_feild} col-12 mb-4 position-relative`}
            >
              <textarea
                name="Description"
                rows={4}
                cols={40}
                className={`${styles.formInput} ${styles.form_textarea} w-100`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Description}
              />
              <label className={`${styles.formLabel} position-absolute`}>
                <span>* </span> Description
              </label>
            </div>
            {/* <button type="submit">Submit</button> */}
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
