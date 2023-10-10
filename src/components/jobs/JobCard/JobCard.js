import Image from 'next/image';
import locationSvg from '../../../../public/assets/images/icons/location.svg';
import officeBagSvg from '../../../../public/assets/images/icons/office-bag.svg';
import moneySvg from '../../../../public/assets/images/icons/money.svg';
import styles from './JobCard.module.css';
import BookmarkIcon from '@/components/global/icons/BookmarkIcon';

const JobCard = () => {
  return (
    <div className={`p-4 ${styles.card}`}>
      <div className={styles.cardMain}>
        <div className={styles.cardImageBox}></div>

        <div className={styles.cardInfo}>
          <div>
            <h3 className={styles.cardTitle}>Job Name</h3>
            <div className={styles.iconsWithText}>
              <div className={styles.iconWithText}>
                <Image src={locationSvg} alt="location icon" />
                <span className="text-grey-dark">New York City</span>
              </div>
              <div className={styles.iconWithText}>
                <Image src={officeBagSvg} alt="office bag icon" />
                <span className="text-grey-dark">Design, Marketing</span>
              </div>
              <div className={styles.iconWithText}>
                <Image src={moneySvg} alt="money icon" />
                <span className="text-grey-dark">$200 / day</span>
              </div>
            </div>
            <div className={styles.labels}>
              {['Full Time', 'Collaborative', 'In Person'].map((label) => (
                <span className={styles.label} key={label}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.cardInfoActions}>
            <div>
              <BookmarkIcon />
            </div>
            <div>
              <button>Apply now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDetails}></div>
    </div>
  );
};

export default JobCard;
