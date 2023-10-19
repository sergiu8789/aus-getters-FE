'use client';

import EmployerLayout from '@/components/employer/Layout/layout';
import PageTitleComponent from '@/components/employer/PageTitle/page_title';
import EmployerJobApplicants from '@/components/employer/candidiates/EmployerJobApplicants/EmployerJobApplicants';

const EmployerJobApplicantsPage = () => {
  return (
    <EmployerLayout>
      <PageTitleComponent
        pageTitle={'Candidates for Job X'}
        isShowJobBtn={true}
      />
      <EmployerJobApplicants />
    </EmployerLayout>
  );
};

export default EmployerJobApplicantsPage;
