import React from "react";
import styles from './Skills.module.css';

export const Skills = () => {
    return (
        <React.Fragment>            
            <div className={`${styles.user_education} d-flex flex-wrap p-4`}>
                <div className={`${styles.user_skills} d-flex gap-2 flex-wrap p-3`}>
                    <h5 className="mb-2 pb-2 w-100">Skills</h5>
                    <button className="">Video Marketing</button>
                    <button className="">Data Analytics</button>
                    <button className="">Content Creation</button>
                    <button className="">SEO Optimization</button>
                    <button className="">Linguistics & Communication</button>
                </div>
            </div>
        </React.Fragment>        
    )
}
