import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Home} from "lucide-react";
import Home from "./pages/Home";
import Frontend from "./components/Frontend/Frontend";
import Backend from "./components/Backend/Backend";
import Admin from "./pages/Admin";
import Nopage from "./pages/Nopage";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Setting from "./pages/Setting";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontend />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="/admin" element={<Backend />}>
            <Route index element={<Admin />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
