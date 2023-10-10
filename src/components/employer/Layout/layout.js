import EmployerHeaderComponent from "../Header/header";
import EmployerSidebarComponent from "../Sidebar/sidebar";
import EmployerFooterComponent from "../Footer/footer";
 
export default function EmployerLayout({ children }) {
  return (
    <>
      <EmployerHeaderComponent />
      <EmployerSidebarComponent />
      <main>{children}</main>
      <EmployerFooterComponent />
    </>
  )
}