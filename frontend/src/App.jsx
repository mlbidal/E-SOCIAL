import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//----------------------------------GUEST---------------------------------------------
import AuthLayout from "./layouts/AuthLayout";
import LandingPage from "./components/CommonComponents/LandingPage/LandingPage.jsx";
import Login from "./components/CommonComponents/Login/Login.jsx";
import Register from "./components/CommonComponents/Register/Register.jsx";
import ForgotPassword from "./components/CommonComponents/ForgotPassword/ForgotPassword.jsx";
import NewPassword from "./components/CommonComponents/NewPassword/NewPassword.jsx";
import ConfirmAccount from "./components/CommonComponents/ConfirmAccount/ConfirmAccount.jsx";
import UpdatePassword from "./components/CommonComponents/UpdatePassword/UpdatePassword.jsx";
import Details from "./components/CommonComponents/Details/Details.jsx";
import About from "./components/CommonComponents/About/About";
import NotFound from "./components/CommonComponents/NotFound/NotFound.jsx";
import Home from "./components/CommonComponents/Home/Home";
import Homeout from "./components/CommonComponents/Homeout/Homeout.jsx";
//----------------------------------USER---------------------------------------------
import VerificationUser from "./components/CommonComponents/VerificationUser/VerificationUser.jsx";
import RutaProtegida from "./layouts/RutaProtegida";
import Forms from "./components/UserRegisteredComponents/Form/Forms.jsx";
import Settings from "./components/UserRegisteredComponents/Settings/Settings.jsx";
import UpdateBook from "./components/UserRegisteredComponents/UpdateBook/UpdateBook.jsx";
import CheckOut from "./components/UserRegisteredComponents/CheckOut/CheckOut";
import OrdersHistory from "./components/UserRegisteredComponents/OrdersHistory/OrdersHistory";
import OrderDetail from "./components/UserRegisteredComponents/OrderDetail/OrderDetail";
import Profile from "./components/CommonComponents/Profile/Profile"
import BooksCreated from "./components/UserRegisteredComponents/BooksCreated/BooksCreated"
//----------------------------------ADMIN---------------------------------------------

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />} />
          <Route path="homeout" element={<Homeout />} />
          <Route path="login" element={<Login />} />
          <Route path="registrar" element={<Register />} />
          <Route path="olvide-password" element={<ForgotPassword />} />
          <Route path="olvide-password/:token" element={<NewPassword />} />
          <Route path="confirmar/:id" element={<ConfirmAccount />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
        </Route>

         <Route path="/" element={<VerificationUser />}/>
          <Route path="/create" element={<Forms />} />
          <Route path="/details/update/:id" element={<UpdateBook />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/user/setting" element={<Settings />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/historyOrders/" element={<OrdersHistory/>}/>
          <Route path="/order/:id" element={<OrderDetail/>}/>
          <Route path="/bookCreated/:id" element={<BooksCreated/>}/>


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}