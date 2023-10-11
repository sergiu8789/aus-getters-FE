import React from "react";
import styles from './AccountSetting.module.css';
import Image from "next/image";
import { ProfileImage } from "../ProfileImage/ProfileImage";
import EditIcon from "../../../../public/assets/images/edit_icon.svg";
import VisibleEye from "../../../../public/assets/images/visible_eye.svg";
import { SkillsAdd } from "../SkillsAdd/Skillsadd";

export const AccountSetting = () => {
    return (
        <React.Fragment>
            <div className={`${styles.account_sett_container} p-0 container`}>
                <h5>Account Settings</h5>
                <div className="row px-4 m-0 pt-4">
                    <div className={`col-md-6 ${styles.profile_pic_edit}`}>
                        <ProfileImage/>
                    </div>
                    <div className={`${styles.all_profile_edit} col-md-6 gap-3 d-flex justify-content-end align-items-start`}>
                        <p>Edit <Image src={EditIcon} className={`object-fit-cover`} alt="EditIcon"></Image></p>
                        <p>Visibility <Image src={VisibleEye} className={`object-fit-cover`} alt="VisibleEye"></Image></p>
                    </div>
                </div>
                <div className={`${styles.user_basic_detail} row px-4 m-0 border-bottom`}>
                    <h6>Basic Details</h6>
                    <div className="col-md-6">
                        <p><span>First Name</span><br></br>Jason</p>
                    </div>
                    <div className="col-md-6">
                        <p><span>Last Name</span><br></br>Andrews</p>                        
                    </div>
                    <div className="col-md-6">
                        <p><span>Email Address</span><br></br>jasonandrews1234@email.com</p>                        
                    </div>
                    <div className="col-md-6">
                        <p><span>Password</span><br></br>***********</p>                        
                    </div>
                    <div className="col-md-6">
                        <p><span>Contact Number</span><br></br>+61 9244123514</p>                        
                    </div>
                    <div className="col-md-6">
                        <p><span>Age</span><br></br>19</p>                        
                    </div>
                    <div className="col-md-6">
                        <p><span>Location</span><br></br>New South Wales, Australia</p>                        
                    </div>
                    <div className="col-md-6">
                        <p><span>City</span><br></br>Sydney</p>                        
                    </div>
                    <div className="col-12">
                        <p><span>Complete Address</span><br></br>onsectetur iaculis aliquam. Maecenas id arcu aliquam</p>                        
                    </div>
                    <div className="col-12 pb-4">
                        <p><span>Description</span><br></br>
                            onsectetur iaculis aliquam. Maecenas id arcu aliquam, ultrices nibh eget, congue odio. Nam fringilla risus eget lacus venenatis scelerisque. Sed tempor arcu tellus, quis vehicula tortor bibendum et. Sed vestibulum odio sed ex blandit sodales. Ut id sollicitudin risus. Aliquam cursus ultricies sollicitudin. Aliquam feugiat elit feugiat leo consectetur, a sodales leo euismod. Aenean varius finibus tincidunt. Quisque non tellus et tellus feugiat venenatis sit amet a dolor. Aliquam ut dolor mollis, commodo libero quis, ullamcorper nisi.
                        </p>                        
                    </div>
                </div>
                <div className="row px-4 m-0">
                    <SkillsAdd/>
                </div>
            </div>
        </React.Fragment>
    )
}
