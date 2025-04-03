
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage} from "./components/Login/LoginPage";
import {Home} from "./components/Home/Home";
import {SignUpPage} from "./components/SignUp/SignUp";

export const AllRoutes = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<LoginPage />}/>
        <Route path="/home"  element={<Home />} />
        <Route path="/signup"  element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>)
}