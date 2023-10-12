import JobCard from '../JobCard/JobCard';
import JobDetails from '../JobDetails/JobDetails';
import styles from './JobsListing.module.css';

const JobsListing = () => {
  return (
    <div className={styles.jobListing}>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.mb32}`}
      >
        <div className="mb-4">
          <span>Your search results</span>
        </div>
        <div className="d-flex d-none gap-4">
          <div className={styles.selectWrap}>
            <select class={styles.select} value={0}>
              <option value={0} disabled>
                Sort By
              </option>
            </select>
          </div>

          <div className={styles.selectWrap}>
            <select class={styles.select} value={12}>
              <option value={12} disabled>
                12 per page
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.jobsContainer}>
        <div className={styles.jobsList}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <JobCard />
            </div>
          ))}
        </div>
        <div className={styles.jobDetailsWrap}>
          <JobDetails />
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
