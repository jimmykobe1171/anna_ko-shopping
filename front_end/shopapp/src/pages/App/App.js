import NavBar from "../../components/NavBar/NavBar";
import Women from "../../components/Women/Women";
import Men from "../../components/Men/Men";
import Kids from "../../components/Kids/Kids";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductList from "../../components/ProductList/ProductList";
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
// import ProductCard from "../../components/ProductCard/ProductCard";
//import UserProfilePage from "../UserProfilePage/UserProfilePage";
// import SideBar from "../../components/SideBar/SideBar";
// import axios from 'axios'
// import { useState, useEffect } from 'react'




export default function App() {
  const [user, setUser] = useState([]);

//   function getUser() {
//     let data
//     axios.get('http://127.0.0.1:8000/profiles/login/')
//       .then(res => {
//         data = res.data;
//         setUser(data);
//       })
//       .catch(err => {
//         console.log(err);
//       }
//       )
//   }
//   useEffect(()=>{
//   userCall()
// },[])


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
          <Route path='product' element={<ProductCard />} />
          <Route path='products' element={<ProductList />} />
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


