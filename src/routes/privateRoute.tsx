import { Navigate, Outlet, useLocation } from "react-router-dom";
//Redux
import { useSelector } from "react-redux";
import { IReducer } from "../redux/reducer";

const PrivateRoute = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector((state: IReducer) => state.userAuth);
  const redirectPath = location.state?.from ? location.state.from : "/";
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;