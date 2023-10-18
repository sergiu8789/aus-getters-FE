import React from 'react';
import styles from './SocialMedia.module.css';
import Facebook from '../../../../public/assets/images/facebook.png';
import Insta from '../../../../public/assets/images/insta.png';
import X from '../../../../public/assets/images/x.png';
import Linkdin from '../../../../public/assets/images/linkdin.png';
import Image from 'next/image';

export const SocialMedia = () => {
  return (
    <React.Fragment>
      <div className={`${styles.user_education} d-flex flex-wrap p-4`}>
        <div
          className={`${styles.user_social_media} w-100 d-inline-flex align-items-center gap-2 flex-wrap p-3 justify-content-between`}
        >
          <h5 className="m-0">Social Media</h5>
          <div className="d-flex gap-4 align-items-center">
            <Image
              src={Facebook}
              className="object-fit-contain h-auto w-auto"
              alt="Profile Pic"
            ></Image>
            <Image
              src={Insta}
              className="object-fit-contain h-auto w-auto"
              alt="Profile Pic"
            ></Image>
            <Image
              src={X}
              className="object-fit-contain h-auto w-auto"
              alt="Profile Pic"
            ></Image>
            <Image
              src={Linkdin}
              className="object-fit-contain h-auto w-auto"
              alt="Profile Pic"
            ></Image>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
