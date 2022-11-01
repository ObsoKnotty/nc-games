import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
