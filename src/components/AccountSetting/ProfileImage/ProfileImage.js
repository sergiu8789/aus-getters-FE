import React from "react";
    import styles from './ProfileImage.module.css';
    import Image from "next/image";
import ProfilePic from "../../../../public/assets/images/profile_pic.png";
import Close from "../../../../public/assets/images/x_close.svg";
import EditIcon from "../../../../public/assets/images/edit_icon.svg";

export const ProfileImage = () => {
    return (
        <React.Fragment>
            <div className={`${styles.image_main_box} w-100 p-3`}>
                <h6>Profile image</h6>
                <div className="d-flex align-items-end justify-content-between">                    
                    <div className={`${styles.profile_edit_btn} d-flex justify-content-end`}>
                        <div className="row align-items-end gap-3 gap-xl-0">
                            <div className="col-xl-6">
                                <Image src={ProfilePic} className={`${styles.dp_img} pe-2 object-fit-cover`}></Image>      
                            </div>
                            <div className="col-xl-6">
                                <div className="row gap-3 gap-xl-0">
                                    <div className="col-xl-6 text-center px-1">
                                        <p role="button" className="m-0 d-inline-flex justify-content-between align-items-center">Remove <Image src={Close} className="object-fit-cover" alt="Close"></Image></p>
                                    </div>
                                    <div className="col-xl-6 text-center px-1">
                                        <p role="button" className={`${styles.upload_pic_btn} m-0 d-inline-flex justify-content-between align-items-center`}>Upload new <Image src={EditIcon} className="object-fit-cover" alt="EditIcon"></Image></p>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </React.Fragment>        
    )
}
