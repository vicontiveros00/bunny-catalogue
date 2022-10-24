import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Bunny } from "./pages/Bunny";
import { BunnyList } from "./pages/BunnyList";

function App() {
  return (
    <>
    <main>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bunny">Bunnies</Link></li>
        </ul>
      </nav>
    {/*begin routing*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bunny">
        {/*display list of buns*/}
          <Route index element={<BunnyList />} />
          <Route path=":id" element={<Bunny />} />
        </Route>
        <Route path="*" element={<h1>404 bunny not found! :(</h1>} /> {/*404 page*/}
      </Routes>
    {/*end routing*/}
    </main>
    <div className="footer-container">
      <footer>github/vicontiveros00</footer>
    </div>
  </>
  );
}

export default App;
