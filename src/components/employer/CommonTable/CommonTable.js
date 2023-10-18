import styles from './CommonTable.module.css';

const CommonTable = (props) => {
  const { cols, rows } = props;

  function getContentAlignment(alignment) {
    switch (alignment) {
      case 'left':
        return 'start';
      case 'right':
        return 'end';
      default:
        return alignment;
    }
  }

  return (
    <div>
      <div className={styles.tableHeader}>
        {cols.map((col, i) => (
          <div
            key={i}
            className={`px-2 text-${col.align} ${
              styles['flex-' + (col.span || 1)]
            }`}
          >
            <h3>{col.name}</h3>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {rows.map((row, i) => {
          return (
            <div key={i} className={styles.tableRow}>
              {cols.map((col, j) => {
                return (
                  <div
                    className={`${
                      styles['flex-' + (col.span || 1)]
                    } d-flex text-${
                      col.align
                    } justify-content-${getContentAlignment(col.align)}`}
                    key={i.toString() + j}
                  >
                    {col.renderer ? col.renderer(row) : 'nothing'}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonTable;
