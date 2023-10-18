import Image from 'next/image';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';
import moneySvg from '../../../../../public/assets/images/icons/money.svg';
import officeSvg from '../../../../../public/assets/images/icons/job.svg';
import crossSvg from '../../../../../public/assets/images/icons/cross-boxed.svg';
import pencilSvg from '../../../../../public/assets/images/icons/pencil-boxed.svg';
import lockSvg from '../../../../../public/assets/images/icons/lock-boxed.svg';
import styles from './EmployerJobCard.module.css';
import Link from 'next/link';

const EmployerJobCard = () => {
  return (
    <div
      className={`p-4 pb-3 col-12 d-inline-block position-relative ${styles.card}`}
      role="button"
    >
      <div className={`col-12 d-flex gap-3 ${styles.cardMain}`}>
        <div className={styles.cardImageBox}></div>

        <div className={styles.cardInfo}>
          <h3 className={`${styles.cardTitle} col-12`}>
            <Link href="/jobs/1">Job Name</Link>
          </h3>
          <div className="d-flex gap-2">
            <button className={styles.iconButton} title="Lock">
              <Image src={lockSvg} alt="Lock" />
            </button>
            <button className={styles.iconButton} title="Edit">
              <Image src={pencilSvg} alt="Edit" />
            </button>
            <button className={styles.iconButton} title="Delete">
              <Image src={crossSvg} alt="Remove" />
            </button>
          </div>
        </div>
      </div>
      <div className={`col-12 d-inline-flex flex-column`}>
        <p className="col-12 d-inline-block mb-1 d-flex gap-2">
          <Link href="/jobs/1" title="View Applicants">
            <b>Applicants: </b>
          </Link>
          <span>246</span>
        </p>
        <div
          className={`${styles.cardDetailRow} d-flex align-items-center col-12 gap-2 mb-1`}
        >
          <Image src={locationSvg} alt="location icon" />
          <span className={``}>Canada</span>
        </div>
        <div
          className={`${styles.cardDetailRow} d-flex align-items-center col-12 gap-2 mb-1`}
        >
          <Image src={officeSvg} alt="location icon" />
          <span className={``}>Design, Marketing</span>
        </div>
        <div
          className={`${styles.cardDetailRow} d-flex align-items-center col-12 gap-2 mb-1`}
        >
          <Image src={moneySvg} alt="location icon" />
          <span className={``}>$200/day</span>
        </div>
        <p className={`${styles.jobPostTime} mt-3 mb-0 text-grey-light`}>
          6 May 2023
        </p>
      </div>
      <div className={`${styles.jobStatusType} position-absolute`}>
        <span
          className={`${styles.activeType} d-inline-flex align-items-center`}
        >
          Active
        </span>
      </div>
    </div>
  );
};

export default EmployerJobCard;
