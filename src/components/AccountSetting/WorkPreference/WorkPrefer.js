import React from "react";
import styles from './WorkPrefer.module.css';
import { Formik } from 'formik';
// import Cross from "../../../../public/assets/images/x_close.svg";
import Plus from "../../../../public/assets/images/plus.svg"
import Image from "next/image";

export const Workprefer = () => {
    return (
        <React.Fragment>
            <h6>Work Preference</h6>
                <Formik>
                    <form className="row mt-3">
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6`}>
                            <select className={`${styles.formSelect} col-12`} role="button">
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
                                name="Salary"
                                placeholder="Expected Salary"
                                className="w-100"
                            />                           
                        </div>
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-2`}>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="">Salary type</option>
                            <option value="Traditional">Traditional</option>
                            <option value="Broadband">Broadband</option>
                            <option value="Market-based">Market-based</option>
                            </select>
                        </div>
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6`}>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="">Work Profile</option>
                            <option value="Designer">Designer</option>
                            <option value="Developer">Developer</option>
                            <option value="CMS">CMS</option>
                            </select>
                        </div>
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6`}>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="">Industry Expertise</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            </select>
                        </div>
                    </form>
                </Formik>
        </React.Fragment>
    )
}
