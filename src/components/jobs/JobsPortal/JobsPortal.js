import JobsFilters from './JobsFilters/JobsFilters';
import JobsListing from './JobsListing/JobsListing';
import JobsSearchForm from './JobsSearchForm/JobsSearchForm';
import styles from './JobsPortal.module.css';
import LogoPng from '../../../../public/assets/images/logos/logo-aus-getters.png';
import Image from 'next/image';

const JobsPortal = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-center py-5">
        <Image src={LogoPng} alt="logo" />
      </div>
      <div className={styles.jobsSearchWrap}>
        <JobsSearchForm />
      </div>
      <div className={styles.jobsFiltersWrap}>
        <JobsFilters />
      </div>
      <div className="d-flex gap-4">
        <div className={styles.jobsListingWrap}>
          <JobsListing />
        </div>
      </div>
    </div>
  );
};

export default JobsPortal;
