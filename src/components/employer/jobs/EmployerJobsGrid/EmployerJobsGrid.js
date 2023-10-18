import styles from './EmployerJobsGrid.module.css';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpIcon from '@/components/global/icons/ArrowUpIcon';
import EmployerJobCard from '../EmployerJobCard/EmployerJobCard';
import { scrollToTop } from '@/utils/scroll.utils';

const Alignment = {
  Left: 'left',
  Center: 'center',
  Right: 'right',
  justify: 'justify'
};

const headerColumns = [
  {
    name: 'Job Title',
    sortable: false,
    align: Alignment.Left
  },
  {
    name: 'Date Posted',
    sortable: false,
    align: Alignment.Center
  },
  {
    name: 'Application',
    sortable: false,
    align: Alignment.Center
  },
  {
    name: 'Status',
    sortable: false,
    align: Alignment.Center
  },
  {
    name: 'Action',
    sortable: false,
    align: Alignment.Center
  }
];

const EmployerJobsGrid = (props) => {
  return (
    <>
      {/* <div className={styles.jobsListHeader}>
        {headerColumns.map((col, i) => (
          <div key={i} className={`px-2 text-${col.align}`}>
            <h3>{col.name}</h3>
          </div>
        ))}
      </div> */}

      <div className="col-12 d-inline-block mt-5">
        <div className="container">
          <div className="col-12 d-inline-flex flex-wrap">
            {Array.from(Array(5)).map((i) => (
              <div key={i} className="col-md-4 mb-3 px-2">
                <EmployerJobCard />
              </div>
            ))}
          </div>
          <div className={styles.ArrowUpIcon}>
            <div className=" d-flex justify-content-end" role="button">
              {' '}
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerJobsGrid;
