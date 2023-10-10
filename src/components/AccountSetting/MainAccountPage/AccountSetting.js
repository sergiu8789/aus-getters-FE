import React from "react";
import styles from './AccountSetting.module.css';
import Image from "next/image";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import EditIcon from "../../../../public/assets/images/edit_icon.svg";
import VisibleEye from "../../../../public/assets/images/visible_eye.svg";

export const AccountSetting = () => {
    return (
        <React.Fragment>
            <div className={`${styles.account_sett_container} container`}>
                <h5>Account Settings</h5>
                <div className="row">
                    <div className={`col-md-6 ${styles.profile_pic_edit}`}>
                        <ProfileImage/>
                    </div>
                    <div className={`${styles.all_profile_edit} d-flex justify-content-end align-items-start`}>
                        <p>Edit <Image src={EditIcon} className={`object-fit-cover`} alt="EditIcon"></Image></p>
                        <p>Visibility <Image src={VisibleEye} className={`object-fit-cover`} alt="VisibleEye"></Image></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
