import Image from 'next/image';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';
import styles from './JobCard.module.css';
import Link from 'next/link';

const JobCard = () => {
  return (
    <div className={`p-3 ${styles.card}`} role="button">
      <div className={styles.cardMain}>
        <div className={styles.cardImageBox}></div>

        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>Job Name</h3>
          <h4 className={styles.cardSubtitle}>
            <Link href="#"> Company Name</Link>
          </h4>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <p className="col-12 d-inline-block mb-0">
          <strong className={styles.salaryInfo}>$80,000/yr</strong>
        </p>
        <div className="d-flex gap-1">
          <span>
            <Image src={locationSvg} alt="location icon" />
          </span>
          <span>Remote - Canada</span>
        </div>
        <p className="text-grey-light">4 minutes ago</p>
      </div>
    </div>
  );
};

export default JobCard;
