import HeaderMusic from "../components/shared/HeaderMusic";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  if (localStorage.getItem("token") !== null) {
    return (
      <>
        <HeaderMusic />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export default ProtectedRoutes;