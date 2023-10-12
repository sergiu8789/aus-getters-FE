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
        <div className="" style={{width:"100%",marginBottom:"62px",paddingRight:"60px"}}>
            <main className="">{children}</main>
        </div>
        
      </div>
      <EmployerFooterComponent />
    </>
  )
}