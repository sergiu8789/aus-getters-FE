import JobsTable from '@/components/jobs/JobsTable/JobsTable';

const BookmarkedJobsPage = () => {
  return (
    <div>
      {' '}
      <JobsTable type={'bookmark'} />
    </div>
  );
};

export default BookmarkedJobsPage;
