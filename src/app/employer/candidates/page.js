'use client';

import EmployerCandidates from '@/components/employer/candidiates/EmployerCandidates/EmployerCandidates';
import EmployerLayout from '@/components/employer/Layout/layout';
import PageTitleComponent from '@/components/employer/PageTitle/page_title';

const EmployerCandidatesPage = () => {
  return (
    <EmployerLayout>
      <PageTitleComponent pageTitle={'Candidates'} isShowJobBtn={true} />
      <EmployerCandidates />
    </EmployerLayout>
  );
};

export default EmployerCandidatesPage;
