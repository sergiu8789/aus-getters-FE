import JobCard from '../JobCard/JobCard';
import styles from './JobsListing.module.css';

const JobsListing = () => {
  return (
    <div>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.mb32}`}
      >
        <div class={styles.jobsCountBoard}>
          <span>Showing all 18 jobs</span>
        </div>
        <div className="d-flex gap-4">
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
      <div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="mb-4" key={i}>
            <JobCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsListing;
