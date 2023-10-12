import React from "react";
import { Formik } from 'formik';
import styles from './Basicdetails.module.css';

export const EditBasicdetails = () => {
    return (
        <React.Fragment>
            <h6>Basic Details</h6>
            <div className="col-12">             
                <Formik>         
                    <from className={`${styles.edit_Basic_detail} row`}>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="text" name="Firstname" placeholder="name" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> First Name</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="text" name="Lastname" placeholder="name" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Last Name</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="email" name="Email" placeholder="Email" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Email Address</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="password" name="Password" placeholder="Password" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Password</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="text" name="Number" placeholder="Number" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Contact Number</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="text" name="Age" placeholder="Age" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Age</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="text" name="Location" placeholder="Location" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Location</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-md-6 mb-4 position-relative`}>
                            <input type="text" name="City" placeholder="City" className={`${styles.formInput} w-100`}/>
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> City</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-12 mb-4 position-relative`}>
                            <textarea name="Address" rows={2} cols={40} className={`${styles.formInput} ${styles.form_textarea} w-100`}/>                            
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Complete Address</label>
                        </div>
                        <div className={`${styles.edit_single_feild} col-12 mb-4 position-relative`}>
                            <textarea name="Description" rows={4} cols={40} className={`${styles.formInput} ${styles.form_textarea} w-100`}/>                            
                            <label className={`${styles.formLabel} position-absolute`}><span>* </span> Description</label>
                        </div>
                        
                    </from>
                </Formik>
            </div>  
        </React.Fragment>
    )
}
