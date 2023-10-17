import React from 'react';
import { useFormik } from 'formik';
import styles from './BasicDetails.module.css';
import * as Yup from 'yup';

const EditBasicDetails = ({ setEditMode }) => {
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
    validationSchema: Yup.object().shape({
      Firstname: Yup.string().trim().required(`first Name is required`),
      Lastname: Yup.string().trim().required(`last Name is required`),
      Email: Yup.string().trim().required(`email is required`),
      Password: Yup.string().trim().required(`password is required`),
      Number: Yup.string()
        .trim()
        .matches(/^\d{4,14}$/, 'Phone number can have at most 14 digits')
        .required(`password is required`),
      Age: Yup.string().trim().required(`age is required`),
      Location: Yup.string().trim().required(`loaction is required`),
      City: Yup.string().trim().required(`city is required`),
      Address: Yup.string().trim().required(`address is required`)
    }),
    onSubmit: (values) => {
      setEditMode(false);
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
        id="editProfileDetails"
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
              {formik.errors.Firstname && formik.touched.Firstname && (
                <div className={styles.errorMessage}>
                  {formik.errors.Firstname}
                </div>
              )}
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
              {formik.errors.Lastname && formik.touched.Lastname && (
                <div className={styles.errorMessage}>
                  {formik.errors.Lastname}
                </div>
              )}
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
              {formik.errors.Email && formik.touched.Email && (
                <div className={styles.errorMessage}>{formik.errors.Email}</div>
              )}
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
              {formik.errors.Password && formik.touched.Password && (
                <div className={styles.errorMessage}>
                  {formik.errors.Password}
                </div>
              )}
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
              {formik.errors.Number && formik.touched.Number && (
                <div className={styles.errorMessage}>
                  {formik.errors.Number}
                </div>
              )}
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
              {formik.errors.Age && formik.touched.Age && (
                <div className={styles.errorMessage}>{formik.errors.Age}</div>
              )}
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
              {formik.errors.Location && formik.touched.Location && (
                <div className={styles.errorMessage}>
                  {formik.errors.Location}
                </div>
              )}
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
              {formik.errors.City && formik.touched.City && (
                <div className={styles.errorMessage}>{formik.errors.City}</div>
              )}
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
              {formik.errors.Address && formik.touched.Address && (
                <div className={styles.errorMessage}>
                  {formik.errors.Address}
                </div>
              )}
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
                {/* <span>* </span> Description */}
                Description
              </label>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default EditBasicDetails;
