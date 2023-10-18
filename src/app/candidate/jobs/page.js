'use client';
import React from 'react';
import Footer from '@/components/global/Footer/Footer';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import JobsPortal from '@/components/jobs/JobsPortal/JobsPortal';

const JobsPage = () => {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <JobsPortal />
      <Footer />
    </React.Fragment>
  );
};

export default JobsPage;
