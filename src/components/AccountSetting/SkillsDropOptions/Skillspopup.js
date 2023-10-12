import React from "react";
import { Formik } from 'formik';
import HalfArrow from '../../../../public/assets/images/half_arrow.svg'
import styles from './Skillspopup.module.css';
import Image from "next/image";

export const Skillspopup = () => {
    return (
        <React.Fragment>
            <div className={`${styles.skill_popup_box} col-md-6`}>
                <div className={`${styles.skill_popup_box_form} p-4 position-relative`}>
                    <Formik>
                        <from>
                            <Image src={HalfArrow} alt="Half Arrow" className="position-absolute"/>
                            <div className="w-100 justify-content-between d-flex flex-lg-nowrap flex-wrap align-items-center mb-4">
                                <label>Skill name</label>
                                <input type="text" name="Search" placeholder="Search" className={`${styles.formInput} w-100`}/>
                            </div>
                            <div className="w-100 justify-content-between d-flex flex-lg-nowrap flex-wrap align-items-center">
                                <label>Level of Expertise</label>
                                <select className={`${styles.formSelect} w-100`} role="button">
                                    <option value="Select">Select</option>
                                    <option value=" 2"> 2</option>
                                    <option value=" 3"> 3</option>
                                </select>
                            </div>
                        </from>
                    </Formik>
                </div>
            </div>  
        </React.Fragment>
    )
}
