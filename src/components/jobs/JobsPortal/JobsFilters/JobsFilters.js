import styles from './JobsFilters.module.css';

const JobsFilters = () => {
  return (
    <div className={styles.jobsFilters}>
      <div className={styles.filtersHeader}>
        <div
          className={`d-flex justify-content-between align-items-center ${styles.filtersToggleWrap}`}
        >
          <span>Filters</span>
          <button>On</button>
        </div>
      </div>
      <div className={styles.filters}>
        <div>
          <select className={styles.select} value="Employment Type">
            <option value="Employment Type">Employment Type</option>
          </select>
        </div>
        <div>
          <select className={styles.select} value="Employment Type">
            <option value="Employment Type">All Categories</option>
          </select>
        </div>
        <div>
          <select className={styles.select} value="Remuneration">
            <option value="Remuneration">Remuneration</option>
          </select>
        </div>
        <div>
          <select className={styles.select} value="Employment Type">
            <option value="Employment Type">In Person/House</option>
          </select>
        </div>
        <div>
          <select className={styles.select} value="Employment Type">
            <option value="Employment Type">Environment Type</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobsFilters;
