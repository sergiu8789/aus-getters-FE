import React from "react";
import { Formik } from 'formik';
import HalfArrow from '../../../../public/assets/images/half_arrow.svg'
import styles from './Sociallinkpopup.module.css';
import Image from "next/image";

export const Sociallinkpopup = () => {
    return (
        <React.Fragment>
            <div className={`${styles.skill_popup_box} col-md-6`}>
                <div className={`${styles.skill_popup_box_form} p-4 position-relative`}>
                    <Formik>
                        <from>
                            <Image src={HalfArrow} alt="Half Arrow" className="position-absolute"/>
                            <div className="w-100 justify-content-between d-flex flex-lg-nowrap flex-wrap align-items-center mb-4">
                                <label>Social Media</label>
                                <input type="text" name="Firstname" placeholder="Select" className={`${styles.formInput} w-100`}/>
                            </div>
                            <div className="w-100 justify-content-between d-flex flex-lg-nowrap flex-wrap align-items-center">
                                <label>Link</label>
                                <input type="text" name="Firstname" placeholder="Enter" className={`${styles.formInput2} w-100`}/>
                            </div>
                        </from>
                    </Formik>
                </div>
            </div>  
        </React.Fragment>
    )
}
