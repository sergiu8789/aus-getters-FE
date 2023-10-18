import styles from './EmployerSearchAndFilter.module.css';

const EmployerSearchAndFilter = () => {
  return (
    <div className="d-flex gap-5 py-4">
      <div className="flex-grow-1">
        <input
          className={`w-100 ${styles.formInput} ${styles.formInputSearch}`}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="d-flex gap-3">
        <select className={styles.formSelect}>
          <option>Active</option>
          <option>Draft</option>
          <option>Deleted</option>
        </select>
        <select className={styles.formSelect}>
          <option>Last 6 Months</option>
          <option>This Year</option>
          <option>All Time</option>
        </select>
      </div>
    </div>
  );
};

export default EmployerSearchAndFilter;
