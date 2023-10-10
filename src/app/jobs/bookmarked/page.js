import JobsTable from '@/components/Jobs/JobsTable/JobsTable';

const BookmarkedJobsPage = () => {
  return (
    <div>
      {' '}
      <JobsTable type={'bookmark'} />
    </div>
  );
};

export default BookmarkedJobsPage;
