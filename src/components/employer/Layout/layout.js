import EmployerHeaderComponent from "../Header/header";
import EmployerSidebarComponent from "../Sidebar/sidebar";
import EmployerFooterComponent from "../Footer/footer";
 
export default function EmployerLayout({ children }) {
  return (
    <>
      <EmployerHeaderComponent />
      <div className="d-flex">
        <div className="d-inline-block">
            <EmployerSidebarComponent />
        </div>
        <div className="" style={{width:"100%"}}>
            <main className="text-center">{children}</main>
        </div>
        
      </div>
      <EmployerFooterComponent />
    </>
  )
}