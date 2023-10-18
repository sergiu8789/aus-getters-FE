import EmployerHeaderComponent from '../Header/header';
import EmployerSidebarComponent from '../Sidebar/sidebar';
import EmployerFooterComponent from '../Footer/footer';

export default function EmployerLayout({ children }) {
  return (
    <>
      <EmployerHeaderComponent />
      <div className="d-flex col-12">
        <div className="d-inline-block position-sticky top-0 col-md-3">
          <EmployerSidebarComponent />
        </div>
        <div className="col-md-9 employer-box flex-shrink-1 d-inline-block pe-5 mb-5">
          <div className="container">
            <main className="">{children}</main>
          </div>
        </div>
      </div>
      <EmployerFooterComponent />
    </>
  );
}
