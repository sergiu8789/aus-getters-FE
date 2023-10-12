import Link from 'next/link';
import styles from './JobDetails.module.css';
import Image from 'next/image';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';

const JobDetails = () => {
  return (
    <div className={styles.jobDetails}>
      <div className={styles.jobHeader}>
        <div className={styles.jobHeaderMain}>
          <div className={styles.jobImage}></div>
          <div className="d-flex gap-2 justify-content-between flex-1 align-items-center py-2">
            <div>
              <h2 className={styles.jobTitle}>Job Name</h2>
              <h3 className={styles.jobSubtitle}>
                <Link href="#"> Company Name</Link>
              </h3>
            </div>
            <div>
              <button className="btn-custom btn-custom--primary btn-custom--medium">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className={styles.jobProperties}>
          {[
            '$90,000/yr',
            'Part Time',
            'Henry Gerard',
            'Toronto, Ontaria',
            '5 yrs of exp',
            'Brand Name'
          ].map((x, i) => (
            <div
              className={`d-inline-flex align-items-center gap-1 ${styles.jobProperty}`}
              key={i}
            >
              <Image src={locationSvg} alt="location icon" />
              <span>{x}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.jobDescription}>
        <div>
          <h3>Job Description</h3>
          <p>
            Suspendisse ac neque porta, maximus ipsum eu, porttitor lorem.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
            accumsan sollicitudin congue. Aliquam ipsum ex, dictum accumsan
            congue sit amet, mattis ac sapien. Nulla pulvinar cursus justo, et
            tristique est fermentum sed. Maecenas vulputate at metus non
            hendrerit.
          </p>
        </div>
        <div>
          <h3>Key Responsibilites</h3>
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
              sollicitudin quis.
            </li>
          </ul>
        </div>
        <div>
          <p>18 min ago</p>
        </div>
      </div>
      <div>
        <button className="btn-custom btn-custom--primary">Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetails;
