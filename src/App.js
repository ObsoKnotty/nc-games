import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import CategoryList from "./components/Categories/CategoryList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Strategy from "./components/Categories/categories/strategy";
import HiddenRoles from "./components/Categories/categories/hidden-roles";
import Dexterity from "./components/Categories/categories/dexterity";
import PushYourLuck from "./components/Categories/categories/push-your-luck";
import RollAndWrite from "./components/Categories/categories/roll-and-write";
import DeckBuilding from "./components/Categories/categories/deck-building";
import EngineBuilding from "./components/Categories/categories/engine-building";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <nav className="topBar">
          <Link to="/" class="button">
            Home
          </Link>
          <Link to="/reviews" class="button">
            Reviews
          </Link>
          <Link to="/category" class="button">
            Categories
          </Link>
        </nav>
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/category"
            element={<CategoryList />}
            className="categoryBar"
          >
            <Route path="strategy" element={<Strategy />} />
            <Route path="hidden-roles" element={<HiddenRoles />} />
            <Route path="dexterity" element={<Dexterity />} />
            <Route path="push-your-luck" element={<PushYourLuck />} />
            <Route path="roll-and-write" element={<RollAndWrite />} />
            <Route path="deck-building" element={<DeckBuilding />} />
            <Route path="engine-building" element={<EngineBuilding />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
