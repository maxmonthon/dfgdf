import Navbarr from "./components/layout/Navbarr";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Shop from "./components/pages/Shop";
function App() {
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
