import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSnapshot } from "valtio";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Register from "./pages/Register";
import Hackathon from "./pages/Hackathon";
import states from "./states";

function App() {
  let snapshot = useSnapshot(states);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/publish"
          element={snapshot.isConnected ? <Publish /> : <Login />}
        ></Route>
        <Route path="/hackathon/:id" element={<Hackathon />}></Route>
      </Routes>
    </>
  );
}

export default App;
