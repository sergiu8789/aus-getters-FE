'use client';
import JobsTable from '@/components/Jobs/JobsTable/JobsTable';

const AppliedJobsPage = () => {
  return (
    <div>
      <JobsTable type={'applied'} />
    </div>
  );
};

export default AppliedJobsPage;
