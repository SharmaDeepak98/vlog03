import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navBar";
import Account from "./pages/Account/account";
import Home from "./pages/Home/home";
import MyBlogs from "./pages/MyBlogs/myBlogs";
import BlogList from "./pages/MyBlogs/blogList";
import BlogContents from "./pages/MyBlogs/blogContent";
import LogInOrSignUp from "./pages/Account/loginOrSignUp";
import Registeration from "./pages/Account/register";



function App() {

  return (
    <div className="App">
      {/* -------------------- Navbar ----------------------- */}
      <NavBar />


      {/* -------------------- pages ------------------------ */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/account" element={<Account />} />
        <Route path="/account/login" element={<LogInOrSignUp />} />
        <Route path="/account/register" element={<Registeration />} />



        <Route path="/myBlogs" element={<MyBlogs />} />
        <Route path="/myBlogs/:id" element={<BlogList />} />

        <Route path="*" element={<h3>Path is not being resolved.</h3>} />

      </Routes>

      {/* ----------- to represent extra features on pages -------------- */}
      <Routes>
        <Route path="/myBlogs" element={<BlogContents />} />{/* for content of blog navigation */}
      </Routes>



    </div>
  );
}

export default App;