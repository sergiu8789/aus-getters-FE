'use client';
import React from 'react';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import JobsTable from '@/components/jobs/JobsTable/JobsTable';
import Footer from '@/components/global/Footer/Footer';

export default function page() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <JobsTable type={'bookmark'} />
      <Footer />
    </React.Fragment>
  );
}
