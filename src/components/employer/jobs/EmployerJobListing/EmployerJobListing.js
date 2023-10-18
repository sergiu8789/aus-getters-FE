import EmployerSearchAndFilter from '../../EmployerSearchAndFilter/EmployerSearchAndFilter';
import EmployerLayout from '../../Layout/layout';
import PageTitleComponent from '../../PageTitle/page_title';
import EmployerJobsGrid from '../EmployerJobsGrid/EmployerJobsGrid';
import styles from './EmployerJobListing.module.css';

const EmployerJobListing = () => {
  return (
    <>
      <EmployerLayout>
        <PageTitleComponent pageTitle="Jobs" isShowJobBtn={true} />
        <EmployerSearchAndFilter />
        <EmployerJobsGrid />
      </EmployerLayout>
    </>
  );
};

export default EmployerJobListing;
