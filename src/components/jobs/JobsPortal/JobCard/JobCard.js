import Image from 'next/image';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';
import moneySvg from '../../../../../public/assets/images/icons/money.svg';
import officeSvg from '../../../../../public/assets/images/icons/job.svg';
import bookmark from '../../../../../public/assets/images/bookmark.svg';
import styles from './JobCard.module.css';
import Link from 'next/link';

const JobCard = ({ type }) => {
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
          <Link
            href="#"
            className={`${styles.companyLink} text-decoration-none d-inline-flex align-items-center gap-1 position-relative`}
          >
            Company Name
          </Link>
        </div>
      </div>
      <div className={`col-12 d-inline-flex flex-column`}>
        <p className="col-12 d-inline-block mb-1">
          <strong className={`${styles.salaryInfo}`}>$80,000/yr</strong>
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
          <span className={``}>Full Time</span>
        </div>
        <div
          className={`${styles.cardDetailRow} d-flex align-items-center col-12 gap-2 mb-1`}
        >
          <Image src={moneySvg} alt="location icon" />
          <span className={``}>$500</span>
        </div>
        <p className={`${styles.jobPostTime} mt-3 mb-0 text-grey-light`}>
          4 minutes ago
        </p>
      </div>
      <div className={`${styles.jobStatusType} position-absolute`}>
        <span
          className={`${styles.failedType} d-inline-flex align-items-center`}
        >
          Active
        </span>
        <span
          className={`${styles.ActiveType} d-inline-flex align-items-center`}
        >
          Failed
        </span>
      </div>
      {type === 'bookmark' && (
        <div className={`${styles.jobSavedType} position-absolute`}>
          <span
            className={`${styles.bookmarkJob} d-inline-flex align-items-center`}
          >
            <Image
              src={bookmark}
              alt="bookmark"
              className="object-fit-contain"
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default JobCard;
