'use client';
import Account from '@/components/AccountSetting/MainAccountPage/Account';
import Footer from '@/components/global/Footer/Footer';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import React from 'react';

function Page() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <Account />
      <Footer />
    </React.Fragment>
  );
}

export default Page;
