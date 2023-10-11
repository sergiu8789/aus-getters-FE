import styles from './recent-applications.module.css';

import Link from 'next/link';
import Image from 'next/image';
import DollarImg from '../../../../public/assets/images/dollar.png';
import SuitcaseImg from '../../../../public/assets/images/suitcase_16*16.png';
import LocationPointImg from '../../../../public/assets/images/location_point.png';

const RecentApplicationsComponents = () => {
  return (
    <div className={`${styles.page_container}`}>
      <div className={`${styles.title}`}>Recent Jobs</div>
      <div className={`${styles.recent_job_box}`}>
        {/* Job Item */}
        <div className={`${styles.recent_job_item}`}>
          <div className={`${styles.recent_job_title}`}>Applicant Name</div>
          <div className={`${styles.recent_job_info}`}>
            <div>
              <span className={`${styles.recent_job_icons}`}>
                <Image src={LocationPointImg} alt=""></Image>
              </span>
              <span>New York City</span>{' '}
              <span className={`${styles.recent_job_icons}`}>
                <Image src={SuitcaseImg} alt=""></Image>
              </span>
              <span>Design, Marketing</span>{' '}
            </div>
            <div>
              
              <span className={`${styles.recent_job_icons}`}>
                <Image src={DollarImg} alt=""></Image>
              </span>
              <span>$200 / day</span>{' '}
            </div>
          </div>
        </div>
        {/* Job Item */}
        <div className={`${styles.recent_job_item}`}>
          <div className={`${styles.recent_job_title}`}>Applicant Name</div>
          <div className={`${styles.recent_job_info}`}>
            <div>
              <span className={`${styles.recent_job_icons}`}>
                <Image src={LocationPointImg} alt=""></Image>
              </span>
              <span>New York City</span>{' '}
              <span className={`${styles.recent_job_icons}`}>
                <Image src={SuitcaseImg} alt=""></Image>
              </span>
              <span>Design, Marketing</span>{' '}
            </div>
            <div>
              
              <span className={`${styles.recent_job_icons}`}>
                <Image src={DollarImg} alt=""></Image>
              </span>
              <span>$200 / day</span>{' '}
            </div>
          </div>
        </div>
        {/* Job Item */}
        <div className={`${styles.recent_job_item}`}>
          <div className={`${styles.recent_job_title}`}>Applicant Name</div>
          <div className={`${styles.recent_job_info}`}>
            <div>
              <span className={`${styles.recent_job_icons}`}>
                <Image src={LocationPointImg} alt=""></Image>
              </span>
              <span>New York City</span>{' '}
              <span className={`${styles.recent_job_icons}`}>
                <Image src={SuitcaseImg} alt=""></Image>
              </span>
              <span>Design, Marketing</span>{' '}
            </div>
            <div>
              
              <span className={`${styles.recent_job_icons}`}>
                <Image src={DollarImg} alt=""></Image>
              </span>
              <span>$200 / day</span>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecentApplicationsComponents;
