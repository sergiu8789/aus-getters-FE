import React from "react";
import { Formik } from 'formik';
import styles from './Addworkexperience.module.css';

export const Addworkexperience = () => {
    return (
        <React.Fragment>
            <div className={`${styles.add_work_exp} col-12 p-4`}>
                <h6>Add Work Experience</h6>
                <Formik>
                    <from className="row">
                        <div className="col-lg-6 mb-3 pb-2">
                            <input type="text" name="CompanyName" placeholder="Company Name" className={`${styles.formInput} w-100`}/>
                        </div>
                        <div className="col-lg-6 mb-3 pb-2">
                            <input type="text" name="Location" placeholder="Location" className={`${styles.formInput_loca} w-100`}/>
                        </div>
                        <div className="col-lg-6 mb-3 pb-2">
                            <input type="text" name="Title" placeholder="Title" className={`${styles.formInput_arrow} w-100`}/>
                        </div>
                        
                        <div className="col-lg-6 mb-3 d-flex align-items-center justify-content-between gap-2 pb-2">
                            <p className="m-0">Duration</p>
                            <select className={`${styles.formInput_arrow}`} role="button">
                                <option value="From">From</option>
                                <option value="2">2</option>
                            </select>
                            <select className={`${styles.formInput_arrow}`} role="button">
                                <option value="To">To</option>
                                <option value="2">2</option>
                            </select>
                            <input type="checkbox" />
                            <p className="m-0">Still working</p>
                        </div>
                        <div className="col-lg-6 mb-3 pb-2">
                            <input type="file" id="file-input" name="ImageStyle"/>
                        </div>
                        <div className="col-lg-6 mb-3 pb-2">
                            <textarea name="postContent" rows={4} className={`${styles.formInput} ${styles.formTextarea} w-100`} />
                        </div>
                    </from>
                </Formik>
            </div>  
        </React.Fragment>
    )
}
