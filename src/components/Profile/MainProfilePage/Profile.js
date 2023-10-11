import React from "react";
import styles from './Profile.module.css';
import Image from "next/image";
import ShowEye from "../../../../public/assets/images/show_eye.svg";
import HideEye from "../../../../public/assets/images/hide_eye.svg";
import EditIcon from "../../../../public/assets/images/edit_icon.svg";
import ProfilePic from "../../../../public/assets/images/profile_pic.png";
import { CandidateOverview } from "../CandidateOverview/CandidateOverview";
import { Skills } from "../Skills/Skills";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const Profile = () => {
    return (
        <React.Fragment>
           <div className={`${styles.profile_buttons} w-100 px-5 d-flex justify-content-end align-items-center gap-3`}> 
                <button className="">See Learner Account</button>
                <button className="">Download Cover Letter</button>
                <button className="">Download Resume</button>
                <button className={`${styles.profile_edit_btn}`}>Edit  <Image src={EditIcon} className="object-fit-cover" alt="EditIcon"></Image><span className="ms-2"></span>
                </button>
           </div>
           <div className={`${styles.user_profile_container} container px-5 py-3 pb-0 mb-3`}>
                <div className="row border-bottom pb-4 px-2">
                    <div className={`${styles.user_profile_pic} col-md-2`}>
                        <Image src={ProfilePic} className="object-fit-cover" alt="Profile Pic"></Image>
                    </div>
                    <div className={`${styles.user_profile_detail} col-md-9`}>
                        <h6>Darlene Robertson</h6>
                        <div className="d-flex gap-3 pb-3">
                            <p className="gap-1 align-items-center m-0 d-flex me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.00033 1.33203C5.06699 1.33203 2.66699 3.73203 2.66699 6.66536C2.66699 10.2654 7.33366 14.332 7.53366 14.532C7.66699 14.5987 7.86699 14.6654 8.00033 14.6654C8.13366 14.6654 8.33366 14.5987 8.46699 14.532C8.66699 14.332 13.3337 10.2654 13.3337 6.66536C13.3337 3.73203 10.9337 1.33203 8.00033 1.33203ZM8.00033 13.132C6.60033 11.7987 4.00033 8.93203 4.00033 6.66536C4.00033 4.46536 5.80033 2.66536 8.00033 2.66536C10.2003 2.66536 12.0003 4.46536 12.0003 6.66536C12.0003 8.86536 9.40032 11.7987 8.00033 13.132ZM8.00033 3.9987C6.53366 3.9987 5.33366 5.1987 5.33366 6.66536C5.33366 8.13203 6.53366 9.33203 8.00033 9.33203C9.46699 9.33203 10.667 8.13203 10.667 6.66536C10.667 5.1987 9.46699 3.9987 8.00033 3.9987ZM8.00033 7.9987C7.26699 7.9987 6.66699 7.3987 6.66699 6.66536C6.66699 5.93203 7.26699 5.33203 8.00033 5.33203C8.73366 5.33203 9.33366 5.93203 9.33366 6.66536C9.33366 7.3987 8.73366 7.9987 8.00033 7.9987Z" fill="#595959"/></svg>
                                <span>Sydney, Australia</span>
                            </p>
                            <p className="gap-1 align-items-center m-0 d-flex me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33366 4.9987C2.78137 4.9987 2.33366 5.44641 2.33366 5.9987V11.9987C2.33366 12.551 2.78137 12.9987 3.33366 12.9987H12.667C13.2193 12.9987 13.667 12.551 13.667 11.9987V5.9987C13.667 5.44641 13.2193 4.9987 12.667 4.9987H3.33366ZM1.66699 5.9987C1.66699 5.07822 2.41318 4.33203 3.33366 4.33203H12.667C13.5875 4.33203 14.3337 5.07822 14.3337 5.9987V11.9987C14.3337 12.9192 13.5875 13.6654 12.667 13.6654H3.33366C2.41318 13.6654 1.66699 12.9192 1.66699 11.9987V5.9987Z" fill="#595959"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 2.33464C6.40145 2.33464 6.1471 2.43999 5.95956 2.62753C5.77202 2.81507 5.66667 3.06942 5.66667 3.33464V4.66797C5.66667 4.85206 5.51743 5.0013 5.33333 5.0013C5.14924 5.0013 5 4.85206 5 4.66797V3.33464C5 2.89261 5.1756 2.46868 5.48816 2.15612C5.80072 1.84356 6.22464 1.66797 6.66667 1.66797H9.33333C9.77536 1.66797 10.1993 1.84356 10.5118 2.15612C10.8244 2.46868 11 2.89261 11 3.33464V4.66797C11 4.85206 10.8508 5.0013 10.6667 5.0013C10.4826 5.0013 10.3333 4.85206 10.3333 4.66797V3.33464C10.3333 3.06942 10.228 2.81507 10.0404 2.62753C9.8529 2.43999 9.59855 2.33464 9.33333 2.33464H6.66667Z" fill="#595959"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 7.66797C8.18442 7.66797 8.33366 7.81721 8.33366 8.0013V8.00797C8.33366 8.19206 8.18442 8.3413 8.00033 8.3413C7.81623 8.3413 7.66699 8.19206 7.66699 8.00797V8.0013C7.66699 7.81721 7.81623 7.66797 8.00033 7.66797Z" fill="#595959"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70272 8.51544C1.78556 8.35103 1.986 8.28492 2.1504 8.36776C3.96493 9.28211 5.96852 9.75839 8.0004 9.75839C10.0323 9.75839 12.0359 9.28211 13.8504 8.36776C14.0148 8.28492 14.2152 8.35103 14.2981 8.51544C14.3809 8.67984 14.3148 8.88027 14.1504 8.96311C12.2428 9.92435 10.1365 10.4251 8.0004 10.4251C5.86432 10.4251 3.75798 9.92435 1.8504 8.96311C1.686 8.88027 1.61988 8.67984 1.70272 8.51544Z" fill="#595959"/> </svg>
                                <span>Digital Marketing</span>
                            </p>
                            <p className="gap-1 align-items-center m-0 d-flex me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"> <g clip-path="url(#clip0_6042_598)"> <path d="M12.667 9.33463V4.0013C12.667 3.26797 12.067 2.66797 11.3337 2.66797H2.00033C1.26699 2.66797 0.666992 3.26797 0.666992 4.0013V9.33463C0.666992 10.068 1.26699 10.668 2.00033 10.668H11.3337C12.067 10.668 12.667 10.068 12.667 9.33463ZM11.3337 9.33463H2.00033V4.0013H11.3337V9.33463ZM6.66699 4.66797C5.56033 4.66797 4.66699 5.5613 4.66699 6.66797C4.66699 7.77464 5.56033 8.66797 6.66699 8.66797C7.77366 8.66797 8.66699 7.77464 8.66699 6.66797C8.66699 5.5613 7.77366 4.66797 6.66699 4.66797ZM15.3337 4.66797V12.0013C15.3337 12.7346 14.7337 13.3346 14.0003 13.3346H2.66699C2.66699 12.668 2.66699 12.7346 2.66699 12.0013H14.0003V4.66797C14.7337 4.66797 14.667 4.66797 15.3337 4.66797Z" fill="#595959"/> </g> <defs> <clipPath id="clip0_6042_598"> <rect width="16" height="16" fill="white"/> </clipPath> </defs> </svg>
                                <span>$100 / day</span>
                            </p>
                        </div>
                        <div className={`${styles.user_profile_btn} d-flex gap-3`}>
                            <p role="button">Social Media Management</p>
                            <p role="button">Content Creation</p>
                            <p role="button">Video Content Creation</p>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <Image src={HideEye} className="object-fit-contain" alt="EYE"></Image>
                        <Image src={ShowEye} className="object-fit-contain" alt="EYE"></Image>
                    </div>
                </div>
                <div className="row">
                    <div className={`${styles.about_user_text} col-12 py-5 px-3`}>
                        <h5 className="m-0">About Candidate</h5>
                        <p>Suspendisse ac neque porta, maximus ipsum eu, porttitor lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam accumsan sollicitudin congue. Aliquam ipsum ex, dictum accumsan congue sit amet, mattis ac sapien. Nulla pulvinar cursus justo, et tristique est fermentum sed. Maecenas vulputate at metus non hendrerit. Nunc lectus libero, porta quis arcu vel, mattis rutrum ligula. Etiam porta, ipsum in posuere molestie, quam eros commodo lectus, eget tempor urna tellus eu massa. Aenean dapibus risus scelerisque elit tincidunt facilisis. Cras imperdiet bibendum arcu vel commodo. Donec ornare lorem sit amet augue porttitor scelerisque. Aliquam mollis lobortis rhoncus. Curabitur pellentesque lorem a est suscipit, a fringilla nibh commodo. In tristique nulla odio, ut ultrices risus congue et.</p>
                    </div>
                </div>
           </div>
           <div className={`${styles.user_complete_detail} container my-5 p-4`}>
                <div className="row">
                    <div className={`${styles.edu_work_exp_box} col-md-7 border-end pe-4`}>

{/* User Education Detail */}

                        <div className={`${styles.user_education}`}>
                            <h5 className="mb-3 pb-3">Education</h5>
                            <div className="d-flex gap-4">
                                <p className={`${styles.initial_edu} d-flex justify-content-center align-items-center`}>M</p>
                                <div className={`${styles.education_descr}`}>
                                    <p className="m-0"><b>Bachlors in Fine Arts</b><span className="ms-3">2012-2014</span></p>
                                    <p className={`${styles.text_ef5da8} pb-2`}>Modern College</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4">
                                <p className={`${styles.initial_edu} d-flex justify-content-center align-items-center`}>H</p>
                                <div className={`${styles.education_descr}`}>
                                    <p className="m-0"><b>Computer Science</b><span className="ms-3">2008-2012</span></p>
                                    <p className={`${styles.text_ef5da8} pb-2`}>Harvard University</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>

{/* User Work & Experience Detail */}                        
                        
                        <div className={`${styles.user_education}`}>
                            <h5 className="mb-3 pb-3">Work & Experience</h5>
                            <div className="d-flex gap-4">
                                <p className={`${styles.initial_work} d-flex justify-content-center align-items-center`}>M</p>
                                <div className={`${styles.education_descr} ${styles.work_exp_descr}`}>
                                    <p className="m-0"><b>Product Designer</b><span className="ms-3">2012-2014</span></p>
                                    <p className={`${styles.text_1967D2} pb-2`}>Spotify Inc.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                            </div>
                            <div className="d-flex gap-4">
                                <p className={`${styles.initial_work} d-flex justify-content-center align-items-center`}>H</p>
                                <div className={`${styles.education_descr} ${styles.work_exp_descr}`}>
                                    <p className="m-0"><b>Sr UX Engineer</b><span className="ms-3">2008-2012</span></p>
                                    <p className={`${styles.text_1967D2} pb-2`}>Dropbox Inc.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <CandidateOverview/>
                        <Skills/>
                        <SocialMedia/>
                    </div>
                </div>
           </div>
        </React.Fragment>
    )
}
