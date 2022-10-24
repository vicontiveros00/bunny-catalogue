import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Bunny } from "./pages/Bunny";
import { BunnyList } from "./pages/BunnyList";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bunny">Bunnies</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bunny" element={<BunnyList />} />
      <Route path="/bunny/:id" element={<Bunny />} />
    </Routes>
  </>
  );
}

export default App;
