import Link from 'next/link';
import CommonTable from '../../CommonTable/CommonTable';
import EmployerSearchAndFilter from '../../EmployerSearchAndFilter/EmployerSearchAndFilter';
import styles from './EmployerCandidates.module.css';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';
import officeBagSvg from '../../../../../public/assets/images/icons/office-bag.svg';
import moneySvg from '../../../../../public/assets/images/icons/money.svg';
import Image from 'next/image';
import TickIcon from '@/components/global/icons/TickIcon';
import Select from 'react-select';

const Alignment = {
  Left: 'left',
  Center: 'center',
  Right: 'right',
  justify: 'justify'
};

const columns = [
  {
    name: 'Name',
    id: 'candidate',
    sortable: false,
    align: Alignment.Left,
    renderer: ({ candidate }) => (
      <div>
        <h5>{candidate.name}</h5>
        <div className="d-block">
          <p className={`d-flex gap-1 align-items-center ${styles.iconText}`}>
            <Image
              width="14"
              src={locationSvg}
              alt="Location"
              className="object-fit-contain d-inline-block"
            />
            <span>{candidate.location}</span>
          </p>
          <p className={`d-flex gap-1 align-items-center ${styles.iconText}`}>
            <Image
              width="14"
              src={officeBagSvg}
              alt="Bag"
              className="object-fit-contain d-inline-block"
            />
            <span>{candidate.designation}</span>
          </p>
          <p className={`d-flex gap-1 align-items-center ${styles.iconText}`}>
            <Image
              width="14"
              src={moneySvg}
              alt="Money"
              className="object-fit-contain d-inline-block"
            />
            <span>{candidate.renumeration}</span>
          </p>
        </div>
      </div>
    )
  },
  {
    name: 'Job',
    id: 'job',
    sortable: false,
    align: Alignment.Center,
    renderer: ({ job }) => (
      <div>
        <h5>{job.name}</h5>
        <div className="d-flex flex-column align-items-center w-100">
          <p className={`d-flex gap-1 align-items-center ${styles.iconText}`}>
            <Image
              width="14"
              src={locationSvg}
              alt="Location"
              className="object-fit-contain d-inline-block"
            />
            <span>{job.location}</span>
          </p>
          <p className={`d-flex gap-1 align-items-center ${styles.iconText}`}>
            <Image
              width="14"
              src={officeBagSvg}
              alt="Bag"
              className="object-fit-contain d-inline-block"
            />
            <span>{job.designation}</span>
          </p>
          <p className={`d-flex gap-1 align-items-center ${styles.iconText}`}>
            <Image
              width="14"
              src={moneySvg}
              alt="Money"
              className="object-fit-contain d-inline-block"
            />
            <span>{job.renumeration}</span>
          </p>
        </div>
      </div>
    )
  },
  {
    name: 'Skill Efficiency',
    id: 'skillEfficiency',
    sortable: false,
    align: Alignment.Center,
    span: 2,
    renderer: ({ skillEfficiency }) => (
      <div className="d-flex gap-1 flex-wrap">
        {skillEfficiency.map((x, i) => (
          <div key={i} className={`d-flex gap-1 ${styles.skillBadge}`}>
            <span>
              <TickIcon />
            </span>
            <span>{x}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    name: 'Status',
    id: 'status',
    sortable: false,
    align: Alignment.Center,
    renderer: ({ status }) => (
      <Select
        value={status}
        options={[
          { value: 'rejected', label: 'Rejected' },
          { value: 'shortlisted', label: 'Shortlisted' },
          { value: 'hired', label: 'Hired' },
          { value: 'active', label: 'Active' }
        ]}
      />
    )
  },
  {
    name: 'Action',
    id: 'action',
    sortable: false,
    align: Alignment.Center,
    renderer: (item) => (
      <div className="d-flex gap-1 align-items-center">
        <Link href="/jobs" className="btn-custom btn-custom--primary">
          View
        </Link>
        <Link href="/chat">Chat</Link>
      </div>
    )
  }
];

const data = [
  {
    candidate: {
      id: 1,
      name: 'Candidate Name',
      location: 'Cranberra',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    job: {
      id: 1,
      name: 'Job Name',
      location: 'New South Wales',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    skillEfficiency: ['Good Match', '5+ years'],
    status: 'active'
  },
  {
    candidate: {
      id: 1,
      name: 'Candidate Name',
      location: 'Cranberra',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    job: {
      id: 1,
      name: 'Job Name',
      location: 'San Francisco',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    skillEfficiency: ['Good Match', '5+ years'],
    status: 'rejected'
  },
  {
    candidate: {
      id: 1,
      name: 'Candidate Name',
      location: 'Cranberra',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    job: {
      id: 1,
      name: 'Job Name',
      location: 'San Francisco',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    skillEfficiency: ['Good Match', '5+ years'],
    status: 'shortlisted'
  },
  {
    candidate: {
      id: 1,
      name: 'Candidate Name',
      location: 'Cranberra',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    job: {
      id: 1,
      name: 'Job Name',
      location: 'San Francisco',
      designation: 'UI/UX Designer',
      renumeration: '$200/day'
    },
    skillEfficiency: ['Good Match', '5+ years'],
    status: 'active'
  }
];

const EmployerCandidates = () => {
  return (
    <>
      <div className={styles.container}>
        <EmployerSearchAndFilter />
        <CommonTable cols={columns} rows={data} />
      </div>
    </>
  );
};

export default EmployerCandidates;
