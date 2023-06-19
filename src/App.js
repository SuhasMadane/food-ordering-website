import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./pages/Nav";
import Navmain from "./pages/Navmain";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
