import { Routes, Route } from "react-router-dom";
import { Connections } from "../pages/connections";
import { Home } from "../pages/home";
import { UserRegister } from "../pages/userRegister";

const BennectRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/register" element={<UserRegister/>}/>
      <Route exact path="/connections" element={<Connections/>}/>
    </Routes>
  );
};

export default BennectRoutes;