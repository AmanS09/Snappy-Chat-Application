import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";

function App() {
  return(
  <BrowserRouter>
  <ToastContainer/>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Chat/>}></Route>
      <Route path="/setAvatar" element={<SetAvatar/>}></Route>
    </Routes>
  </BrowserRouter>)
}

export default App;
