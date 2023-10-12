import React from 'react';
import JobDetailsHeaderCard from './JobDetailsHeaderCard/JobDetailsHeaderCard';
import JobDetailsResponse from './JobDetailsResponse/JobDetailsResponse';

const JobsDetails = () => {
  return (
    <div className="container">
      <JobDetailsHeaderCard />
      <JobDetailsResponse />
    </div>
  );
};

export default JobsDetails;
