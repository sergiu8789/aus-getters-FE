import styles from './JobsSearchForm.module.css';

const JobsSearchForm = () => {
  return (
    <div className={styles.jobsSearchForm}>
      <div className={styles.inputBlock}>
        <input
          type="text"
          name="search"
          placeholder="Job Title, Company or Keyword"
        />
      </div>
      <div className={styles.inputBlock}>
        <input type="text" name="location" placeholder="Location" />
      </div>
      <div className={styles.btnWrap}>
        <button class="btn-custom btn-custom--accent btn-custom--medium">
          Go Get!
        </button>
      </div>
    </div>
  );
};

export default JobsSearchForm;
