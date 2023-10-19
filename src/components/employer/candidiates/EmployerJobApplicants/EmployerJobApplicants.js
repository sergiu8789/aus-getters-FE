import Link from 'next/link';
import CommonTable from '../../CommonTable/CommonTable';
import EmployerSearchAndFilter from '../../EmployerSearchAndFilter/EmployerSearchAndFilter';
import styles from './EmployerJobApplicants.module.css';
import locationSvg from '../../../../../public/assets/images/icons/location.svg';
import officeBagSvg from '../../../../../public/assets/images/icons/office-bag.svg';
import moneySvg from '../../../../../public/assets/images/icons/money.svg';
import chatBoxedSvg from '../../../../../public/assets/images/icons/chat-boxed.svg';
import Image from 'next/image';
import TickIcon from '@/components/global/icons/TickIcon';
import Select from 'react-select';
import StatusSelect from '../../../global/common/SalaryRangeSlider/StatusSelect/StatusSelect';

const Alignment = {
  Left: 'left',
  Center: 'center',
  Right: 'right',
  justify: 'justify'
};

const statuses = [
  { value: 'rejected', label: 'Rejected' },
  { value: 'shortlisted', label: 'Shortlisted' },
  { value: 'hired', label: 'Hired' },
  { value: 'active', label: 'Active' }
];

const StatusColors = {
  Rejected: 'var(--light-red-bg)',
  Shortlisted: 'var(--light-blue-bg)',
  Hired: 'var(--light-green-bg)',
  Active: 'var(--light-blue-bg)'
};

const StatusTextColors = {
  Rejected: 'var(--red-bg)',
  Shortlisted: 'var(--clr-blue)',
  Hired: 'var(green-bg)',
  Active: 'var(--clr-blue)'
};

const getSelectStyles = (status) => ({
  control: (provided) => ({
    ...provided,
    background: StatusColors[status] // Set the background color based on the status
  }),
  singleValue: (provided) => ({
    ...provided,
    color: StatusTextColors[status] // Set the text color based on the status
  })
});

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
    name: 'Skill Efficiency',
    id: 'skillEfficiency',
    sortable: false,
    align: Alignment.Center,
    span: 2,
    renderer: ({ skillEfficiency }) => (
      <div className="d-flex gap-2 flex-wrap">
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
    renderer: ({ status }) => <StatusSelect options={statuses} value={status} />
  },
  {
    name: 'Action',
    id: 'action',
    sortable: false,
    align: Alignment.Center,
    renderer: (item) => (
      <div className="d-flex gap-2 align-items-center">
        <Link
          href="/jobs"
          className={`btn-custom btn-custom--primary ${styles.btn}`}
        >
          View
        </Link>
        <Link href="/chat" title="Chat">
          <Image src={chatBoxedSvg} alt="chat" />
        </Link>
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
    skillEfficiency: ['Good Match', '5+ years'],
    status: 'active'
  }
];

const EmployerJobApplicants = () => {
  return (
    <>
      <div className={styles.container}>
        <EmployerSearchAndFilter
          selects={[
            {
              options: [
                { value: 'rejected', label: 'Rejected' },
                { value: 'shortlisted', label: 'Shortlisted' },
                { value: 'hired', label: 'Hired' },
                { value: 'active', label: 'Active' }
              ],
              value: 'rejected'
            },
            {
              options: [
                { value: 'last-6-months', label: 'Last 6 months' },
                { value: 'this-year', label: 'This Year' },
                { value: 'last-year', label: 'Last year' }
              ],
              value: 'last-6-months'
            }
          ]}
        />
        <CommonTable cols={columns} rows={data} />
      </div>
    </>
  );
};

export default EmployerJobApplicants;
