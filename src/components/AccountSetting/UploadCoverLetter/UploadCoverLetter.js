import React from "react";
import { Formik } from 'formik';
import styles from './UploadCoverLetter.module.css'
import Image from "next/image";
import UploadImg from "../../../../public/assets/images/upload-documnet.png"
import Closebtn from "../../../../public/assets/images/x_blk_close.svg"

export const UploadCoverLetter = () => {
    return (
        <React.Fragment>
            <div className={`${styles.add_work_exp} col-12 p-4`}>
                <div className="d-flex justify-content-between">
                    <h6>Upload Cover Letter</h6>
                    <Image src={Closebtn} className=""/>
                </div>
                <Formik>
                    <from className="row">
                        <div className={`col-12 mb-3 pb-2 h-100`}>
                            <div className={`${styles.img_upload_box} position-relative d-flex justify-content-center align-items-center`}>
                                <input type="file" className="position-absolute start-0 top-0 h-100 opacity-0 w-100" id="file-input" name="ImageStyle"/>
                                <Image src={UploadImg} className="object-fit-contain"/>
                            </div>
                        </div>
                        <div className={`${styles.cancel_sub_btn} justify-content-center d-flex gap-4`}>
                            <p role="buttton" className="">Cancel</p>
                            <p role="buttton" className="">Submit</p>
                        </div>
                    </from>
                </Formik>
            </div>  
        </React.Fragment>
    )
}
