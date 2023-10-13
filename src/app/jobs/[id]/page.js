'use client';
import Footer from '@/components/global/Footer/Footer';
import JobDetails from '@/components/jobs/JobsPortal/JobDetails/JobDetails';

const JobPage = () => {
  return (
    <>
      <div className="container my-4">
        <JobDetails />
      </div>
      <Footer />
    </>
  );
};

export default JobPage;
