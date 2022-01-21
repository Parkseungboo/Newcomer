import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Subscription from "./components/Subscription/Subscription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/subscription" element={<Subscription />} />
    </Routes>
  );
}

export default App;