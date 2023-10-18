'use client';

import Footer from '@/components/global/Footer/Footer';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import JobsPortal from '@/components/jobs/JobsPortal/JobsPortal';

const JobsPage = () => {
  return (
    <>
      <JobsHeaderNav />
      <JobsPortal />
      <Footer />
    </>
  );
};

export default JobsPage;
