import Image from 'next/image';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';
import officeBagSvg from '../../../../../public/assets/images/icons/office-bag.svg';
import moneySvg from '../../../../../public/assets/images/icons/money.svg';
import styles from './JobCard.module.css';
import BookmarkIcon from '@/components/global/icons/BookmarkIcon';
import ChevronDownIcon from '@/components/global/icons/ChevronDownIcon';

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
              <button class="btn-custom btn-custom--primary">Apply now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <div>
          <h4>Job Description</h4>
          <p>
            Suspendisse ac neque porta, maximus ipsum eu, porttitor lorem.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
            accumsan sollicitudin congue. Aliquam ipsum ex, dictum accumsan
            congue sit amet, mattis ac sapien. Nulla pulvinar cursus justo, et
            tristique est fermentum sed. Maecenas vulputate at metus non
            hendrerit.
          </p>
        </div>
        <div className={styles.cardDetailsResponsibilities}>
          <h4>Key Responsiblities</h4>
          <ul>
            <li>
              a dictumst. Ut id interdum augue. Fusce non eleifend tortor. In
              consectetur ligula dapibus enim vulputate vestibulum. Integer ac
              sem id ipsum sagittis rutrum at vitae quam.
            </li>
            <li>
              mus porta non lectus quis consequat. Aenean sem elit, feugiat eget
              tortor ut, suscipit facilisis mauris. Curabitur id bibendum ipsum,
              vel gravida enim. Ut
            </li>
            <li>
              lla facilisi. Sed lacinia diam libero, commodo ornare ante tempor
              vel. Vestibulum condimentum bibendum viverra. Proin purus mi,
              elementum et tellus eget,
            </li>
            <li>
              lputate porttitor placerat at, semper quis nunc. Quisque at
              dapibus lacus. Aliquam mollis odio massa, a euismod nunc
              sollicitudin quis. Ut leo eros, sodales vel nulla ac, finibus
              tempor orci. Aenean mattis faucibus viverra. Aenean lectus justo,
              molestie vel commodo eget, consequat at tortor. Phasellus l
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.cardExpandBox}>
        <ChevronDownIcon />
      </div>
    </div>
  );
};

export default JobCard;
