import React from "react";
import styles from './SocialLinks.module.css';
import { Formik } from 'formik';
import Cross from "../../../../public/assets/images/x_close.svg";
import Plus from "../../../../public/assets/images/plus.svg"
import Image from "next/image";

export const SocialLinks = () => {
    return (
        <React.Fragment>
            <h6>Social Links</h6>
                <Formik>
                    <form className="row mt-3">
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}>
                            <Image src={Cross} className={`${styles.close_rmv_skill} position-absolute`} alt="close button"></Image>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="Social Media">Social Media</option>
                            <option value="Social Media 2">Social Media 2</option>
                            <option value="Social Media 3">Social Media 3</option>
                            <option value="Social Media 4">Social Media 4</option>
                            </select>
                        </div>   
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}>
                            <Image src={Cross} className={`${styles.close_rmv_skill} position-absolute`} alt="close button"></Image>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="Social Media">Social Media</option>
                            <option value="Social Media 2">Social Media 2</option>
                            <option value="Social Media 3">Social Media 3</option>
                            <option value="Social Media 4">Social Media 4</option>
                            </select>
                        </div>   
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}>
                            <Image src={Cross} className={`${styles.close_rmv_skill} position-absolute`} alt="close button"></Image>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="Social Media">Social Media</option>
                            <option value="Social Media 2">Social Media 2</option>
                            <option value="Social Media 3">Social Media 3</option>
                            <option value="Social Media 4">Social Media 4</option>
                            </select>
                        </div>   
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}>
                            <Image src={Cross} className={`${styles.close_rmv_skill} position-absolute`} alt="close button"></Image>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="Social Media">Social Media</option>
                            <option value="Social Media 2">Social Media 2</option>
                            <option value="Social Media 3">Social Media 3</option>
                            <option value="Social Media 4">Social Media 4</option>
                            </select>
                        </div>   
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}>
                            <Image src={Cross} className={`${styles.close_rmv_skill} position-absolute`} alt="close button"></Image>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="Social Media">Social Media</option>
                            <option value="Social Media 2">Social Media 2</option>
                            <option value="Social Media 3">Social Media 3</option>
                            <option value="Social Media 4">Social Media 4</option>
                            </select>
                        </div>   
                        <div className={`${styles.loginFormBox} mb-4 pb-1 col-md-6 position-relative`}>
                            <Image src={Cross} className={`${styles.close_rmv_skill} position-absolute`} alt="close button"></Image>
                            <select className={`${styles.formSelect} col-12`} role="button">
                            <option value="Social Media">Social Media</option>
                            <option value="Social Media 2">Social Media 2</option>
                            <option value="Social Media 3">Social Media 3</option>
                            <option value="Social Media 4">Social Media 4</option>
                            </select>
                        </div>   
                        <div className="text-end mb-1">
                            <button role="button" className={`${styles.add_skill_btn} col-12 d-inline-block`}>
                                <Image src={Plus} className="" width="10" alt="plus"></Image> Add
                            </button>
                        </div>
                    </form>
                </Formik>
        </React.Fragment>
    )
}
