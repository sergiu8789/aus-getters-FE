import React from "react";
import styles from "./WorkExp.module.css";
import SuitCase from "../../../../public/assets/images/bag.svg";
import LocationLine from "../../../../public/assets/images/location_line.svg"
import Cross from "../../../../public/assets/images/x_close.svg"
import EditIcon from "../../../../public/assets/images/edit_icon.svg"
import Plus from "../../../../public/assets/images/plus.svg"
import Image from "next/image";

export const WorkExp = () => {
    return (
        <React.Fragment>
            <h6>Education & Training</h6>
            <div className="row mt-3">
                <div className="col-lg-6 pb-4">
                    <div className={`${styles.edu_training_box} row m-0 p-3`}>
                        <div className="col-lg-9">
                            <p className="m-0 mb-2">Company name<br></br><span>Profile name</span></p>  
                            <div className={`${styles.location_icon_text} d-flex gap-3 flex-wrap`}>
                                <p className="gap-1 align-items-center m-0 d-flex me-2">
                                    <Image src={LocationLine} className="" alt location></Image>
                                    Location
                                </p>
                                <p className="gap-1 align-items-center m-0 d-flex me-2">
                                    <Image src={SuitCase} className="" alt location></Image>                                
                                    Jan 2019 - Mar 2021
                                </p>
                            </div>                      
                        </div>
                        <div className={`${styles.edu_edit_btn} col-lg-3 text-end flex-wrap d-flex flex-column align-items-end justify-content-between`}>
                            <Image src={Cross} className="" alt location></Image> 
                            <p className="m-0 d-flex gap-1 align-items-center">Edit <Image src={EditIcon} className={`object-fit-cover`} alt="EditIcon"></Image></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
