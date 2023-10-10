import React from "react";
import styles from './Profile.module.css'

export const Profile = () => {
    return (
        <React.Fragment>
           <div className={`${styles.profile_buttons} w-100 px-5 d-flex justify-content-end align-items-center gap-3`}> 
                <button className="">See Learner Account</button>
                <button className="">Download Cover Letter</button>
                <button className="">Download Resume</button>
                <button className="">Edit <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M14.667 2.49895C14.8859 2.28008 15.1457 2.10646 15.4317 1.98801C15.7176 1.86956 16.0241 1.80859 16.3337 1.80859C16.6432 1.80859 16.9497 1.86956 17.2357 1.98801C17.5216 2.10646 17.7815 2.28008 18.0003 2.49895C18.2192 2.71782 18.3928 2.97766 18.5113 3.26362C18.6297 3.54959 18.6907 3.85609 18.6907 4.16562C18.6907 4.47515 18.6297 4.78164 18.5113 5.06761C18.3928 5.35358 18.2192 5.61341 18.0003 5.83228L6.75033 17.0823L2.16699 18.3323L3.41699 13.749L14.667 2.49895Z" fill="#8182F3"/>
                    </svg>
                </button>
           </div>
           <div className="container">
                <div className="row">
                    
                </div>
           </div>
        </React.Fragment>
    )
}
