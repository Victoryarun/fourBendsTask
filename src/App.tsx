import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
//Styles
import { GlobalStyle, PageContainer } from "./assets/css";
//Components
import HeaderComponent from "./components/headerComponent";
//Redux
import { useDispatch } from "react-redux";
import { setUserAuth } from "./redux/action";
//Routing
import PrivateRoute from "./routes/privateRoute";
import PublicRoute from "./routes/publicRoute";
//Pages
import LoginPage from "./pages/loginPage";
import ProductsPage from "./pages/productsPage";
import CartPage from "./pages/cartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setUserAuth(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <PageContainer maxWidth="xl">
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="/" element={<ProductsPage />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;