import React from "react";
import { Button } from "./components/ui/button"
import { Ghost, Home } from "lucide-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";
import Dashboard from "./pages/Dashboard";
import NewsArticles from "./pages/NewsArticles";


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<SignInForm/>}></Route>
      <Route path="/sign-up" element={<SignUpForm/>}></Route>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/news" element={<NewsArticles/>}></Route>
    </Routes>
    </BrowserRouter>
  )
};

export default App;
