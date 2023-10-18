'use client';
import React from 'react';
import { Profile } from '@/components/Profile/MainProfilePage/Profile';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';
import Footer from '@/components/global/Footer/Footer';

function page() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <Profile />
      <Footer />
    </React.Fragment>
  );
}

export default page;
