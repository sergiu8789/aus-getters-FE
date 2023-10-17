'use client';
import React from 'react';
import AboutBanner from '@/components/global/AboutBanner/AboutBanner';
import Footer from '@/components/global/Footer/Footer';
import AboutJob from '@/components/global/AboutJob/AboutJob';
import LearningSection from '@/components/global/LearningSection/LearningSection';
import UserTestimonial from '@/components/global/UserTestimonial/UserTestimonial';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';

export default function Page() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <AboutBanner />
      <LearningSection />
      <UserTestimonial />
      <AboutJob />
      <Footer />
    </React.Fragment>
  );
}
