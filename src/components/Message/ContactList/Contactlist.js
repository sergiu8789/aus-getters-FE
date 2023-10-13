import React from "react";
import styles from "./Contactlist.module.css"

export const Contactlist = () => {
    return (
        <React.Fragment> 
            <div className={`${styles.user_profile_main}`}>             
                   <input type="text" name="Search" placeholder="Search" className={`${styles.formInput} w-100`}/>
                   
                   <div className={`${styles.user_profile}`}>
                        <div className={`${styles.user_img_box}`}>
                            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image> */}
                        </div>
                        <div className={`${styles.user_name} d-flex w-100`}>
                             <div className="">
                               <h6 className="mb-0">Darlene Robertson</h6>
                               <p>Head of Development</p>
                              </div> 
                             <div className={`${styles.right_text} w-20 text-end`}>35 min</div>
                        </div>
                   </div>
                    
                   <div className={`${styles.user_profile}`}>
                        <div className={`${styles.user_img_box}`}>
                            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
                        </div>
                        <div className={`${styles.user_name} d-flex w-100`}>
                             <div className="">
                               <h6 className="mb-0">Jane Cooper</h6>
                               <p>Accountant</p>
                              </div> 
                             <div className={`${styles.right_text} w-20 text-end`}>35 min</div>
                        </div>
                   </div>
                   
                   <div className={`${styles.user_profile}`}>
                        <div className={`${styles.user_img_box}`}>
                            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
                        </div>
                        <div className={`${styles.user_name} d-flex w-100`}>
                             <div className="">
                               <h6 className="mb-0">Arlene McCoy</h6>
                               <p>Programmer</p>
                              </div> 
                             <div className={`${styles.right_text} w-20 text-end`}>35 min</div>
                        </div>
                   </div>

                   <div className={`${styles.user_profile}`}>
                        <div className={`${styles.user_img_box}`}>
                            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
                        </div>
                        <div className={`${styles.user_name} d-flex w-100`}>
                             <div className="">
                               <h6 className="mb-0">Albert Flores</h6>
                               <p>Lawyer</p>
                              </div> 
                             <div className={`${styles.right_text} w-20 text-end`}>35 min</div>
                        </div>
                   </div>


                   <div className={`${styles.user_profile}`}>
                        <div className={`${styles.user_img_box}`}>
                            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
                        </div>
                        <div className={`${styles.user_name} d-flex w-100`}>
                             <div className="w-80">
                               <h6 className="mb-0">Cameron Williams</h6>
                               <p>Operation Manager</p>
                              </div> 
                             <div className={`${styles.right_text} w-20 text-end`}>35 min</div>
                        </div>
                   </div>

                   <div className={`${styles.user_profile}`}>
                        <div className={`${styles.user_img_box}`}>
                            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
                        </div>
                        <div className={`${styles.user_name} d-flex w-100`}>
                             <div className="w-80">
                               <h6 className="mb-0">Kristin Watson</h6>
                               <p>Photographer</p>
                              </div> 
                             <div className={`${styles.right_text} w-20 text-end`}>35 min</div>
                        </div>
                   </div>

                   <div className={`${styles.user_profile}`}>
                        <div className={`${styles.user_img_box}`}>
                            {/* <Image src={UserImage} className={`${styles.user_img} pe-2`}></Image>    */}
                        </div>
                        <div className={`${styles.user_name} d-flex align-items-center w-100`}>
                             <div className="w-80">
                               <h6 className="mb-0">Annette Jones</h6>
                               <p>Product Manager</p>
                              </div> 
                             <div className={`${styles.right_text} w-20 text-end`}>35 min</div>
                        </div>
                   </div>

               </div>
        </React.Fragment>
    )
}
