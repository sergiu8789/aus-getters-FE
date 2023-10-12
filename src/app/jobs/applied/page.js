'use client';
import React from 'react';
import JobsTable from '@/components/jobs/JobsTable/JobsTable';
import JobCard from '@/components/jobs/JobsPortal/JobCard/JobCard';

export default function page() {
  return (
    <React.Fragment>
      <JobsTable type={'applied'} />
    </React.Fragment>
  );
}
