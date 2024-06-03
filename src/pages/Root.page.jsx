import NavBar from "../components/navBar/navBar.component";
import { Outlet, useRouteLoaderData } from "react-router-dom";
function Root() {
  const{isAdmin,token}=useRouteLoaderData('root')
  return (
    <>
  <NavBar isAdmin={isAdmin} isAuthenticated={token?true:false} />
  <Outlet/>
    </>
  );
}

export default Root;