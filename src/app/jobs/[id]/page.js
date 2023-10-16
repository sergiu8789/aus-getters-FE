'use client';
import Footer from '@/components/global/Footer/Footer';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import JobDetails from '@/components/jobs/JobsPortal/JobDetails/JobDetails';

const JobPage = () => {
  return (
    <>
      <JobsHeaderNav />
      <div className={`container my-4`}>
        <JobDetails />
      </div>
      <Footer />
    </>
  );
};

export default JobPage;
