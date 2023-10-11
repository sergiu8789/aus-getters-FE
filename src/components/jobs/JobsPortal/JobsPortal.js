import JobsFilters from './JobsFilters/JobsFilters';
import JobsListing from './JobsListing/JobsListing';
import JobsSearchForm from './JobsSearchForm/JobsSearchForm';
import styles from './JobsPortal.module.css';

const JobsPortal = () => {
  return (
    <div className="container py-4">
      <div className={styles.jobsSearchWrap}>
        <JobsSearchForm />
      </div>
      <div className="d-flex gap-4">
        <div className={styles.jobsFiltersWrap}>
          <JobsFilters />
        </div>
        <div className={styles.jobsListingWrap}>
          <JobsListing />
        </div>
      </div>
    </div>
  );
};

export default JobsPortal;
