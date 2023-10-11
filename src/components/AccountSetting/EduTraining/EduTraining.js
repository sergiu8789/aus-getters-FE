import React from "react";
import styles from './EduTraining.module.css';
import SuitCase from "../../../../public/assets/images/bag.svg";
import LocationLine from "../../../../public/assets/images/location_line.svg"
import Cross from "../../../../public/assets/images/x_close.svg"
import EditIcon from "../../../../public/assets/images/edit_icon.svg"
import Image from "next/image";

export const EduTraining = () => {
    return (
        <React.Fragment>
            <h6>Education & Training</h6>
            <div className={`${styles.edu_training_box} p-3 col-lg-6`}>
                <div className="row">
                    <div className="col-lg-6">
                        <p className="m-0 mb-2">School name<br></br><span>Specialization</span></p>  
                        <div className="d-flex gap-3">
                            <p className="gap-1 align-items-center m-0 d-flex me-2">
                                <Image src={LocationLine} className="" alt location></Image>
                                Location
                            </p>
                            <p className="gap-1 align-items-center m-0 d-flex me-2">
                                <Image src={SuitCase} className="" alt location></Image>                                
                                GPA: 3.8
                            </p>
                        </div>                      
                    </div>
                    <div className={`${styles.edu_edit_btn} col-lg-6 text-end flex-wrap d-flex flex-column align-items-end justify-content-between`}>
                        <Image src={Cross} className="" alt location></Image> 
                        <p className="m-0">Edit <Image src={EditIcon} className={`object-fit-cover`} alt="EditIcon"></Image></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
