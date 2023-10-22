import { NavLink } from "react-router-dom";
//Styles
import { Header, Logo } from "../assets/css";
import { Logout } from "@mui/icons-material";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { IReducer, userAuthState } from "../redux/reducer";
import { setUserAuth } from "../redux/action";
//Images
import logo from "../assets/img/logo.png";

const HeaderComponent = () => {
  const { isAuthenticated } = useSelector((state: IReducer) => state.userAuth);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(setUserAuth(userAuthState));
  };

  return (
    <Header>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      <ul className="menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Produts
          </NavLink>
        </li>
        {!isAuthenticated && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <button className="logoutBtn" onClick={logout}>
                <Logout />
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </Header>
  );
};

export default HeaderComponent;