'use client';
import React from 'react';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import JobsFilters from '@/components/jobs/JobsPortal/JobsFilters/JobsFilters';
import JobsSearchForm from '@/components/jobs/JobsPortal/JobsSearchForm/JobsSearchForm';
import Footer from '@/components/global/Footer/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <div className="col-12 d-inline-block">
        <div className="container">
          <div className="col-12 d-inline-block my-5">
            <JobsSearchForm />
            <JobsFilters />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
