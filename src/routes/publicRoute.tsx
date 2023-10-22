import { Navigate, Outlet, useLocation } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
import { IReducer } from "../redux/reducer";

const PublicRoute = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state: IReducer) => state.userAuth);
  const redirectPath = location.state?.from ? location.state.from : "/";
  return isAuthenticated ? <Navigate to={redirectPath} /> : <Outlet />;
};

export default PublicRoute;