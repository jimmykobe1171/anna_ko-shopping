import NavBar from "../../components/NavBar/NavBar";
import Women from "../../components/Women/Women";
import Men from "../../components/Men/Men";
import Kids from "../../components/Kids/Kids";
import Search from "../../components/Search/Search";
import "./App.css";
// import AuthPage from "../AuthPage/AuthPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import Cart from "../Cart/Cart";
import Footer from "../../components/Footer/Footer";
import UserSettingPage from "../UserSettingPage/UserSettingPage";
//import UserProfilePage from "../UserProfilePage/UserProfilePage";
// import SideBar from "../../components/SideBar/SideBar";


export default function App() {
  const [user, setUser] = useState();


  return (
    <div>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path='cart' element={<Cart />} />
        <Route path="auth" element={<AuthPage setUser={setUser} />} />
        <Route path='women' element={<Women />} />
        <Route path='men' element={<Men />} />
        <Route path='kids' element={<Kids />} />
        <Route path='search' element={<Search />} />
        {/* <Route
              path="/settings"
              element={
                <UserSettingPage
                  user={user}
                  setUser={setUser}
                  
                />
              }
            ></Route> */}
        {/* <Footer /> */}
      </Route>
    </Routes>
    <Footer />
    </div>

  );
}


