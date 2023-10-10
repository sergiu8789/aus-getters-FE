import React from "react";
import styles from './SocialMedia.module.css';
import Facebook from "../../../../public/assets/images/facebook.png";
import Insta from "../../../../public/assets/images/insta.png";
import X from "../../../../public/assets/images/x.png";
import Linkdin from "../../../../public/assets/images/linkdin.png";
import Image from "next/image";

export const SocialMedia = () => {
    return (
        <React.Fragment>            
            <div className={`${styles.user_education} d-flex flex-wrap p-4`}>
                <div className={`${styles.user_social_media} w-100 d-flex gap-2 flex-wrap p-3 justify-content-between`}>
                    <h5 className="m-0">Social Media</h5>
                    <div className="d-flex gap-3 align-items-center">
                        <Image src={Facebook} className="object-fit-cover" alt="Profile Pic"></Image>
                        <Image src={Insta} className="object-fit-cover" alt="Profile Pic"></Image>
                        <Image src={X} className="object-fit-cover" alt="Profile Pic"></Image>
                        <Image src={Linkdin} className="object-fit-cover" alt="Profile Pic"></Image>
                    </div>
                </div>
            </div>
        </React.Fragment>        
    )
}
