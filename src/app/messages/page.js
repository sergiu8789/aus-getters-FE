import React from 'react';
import { Message } from '@/components/Message/Message/Mainmessage';
import JobsHeaderNav from '@/components/jobs/JobsHeaderNav/JobsHeaderNav';

function page() {
  return (
    <React.Fragment>
      <JobsHeaderNav />
      <Message />
    </React.Fragment>
  );
}

export default page;
