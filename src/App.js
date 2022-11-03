import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import CategoryList from "./components/Categories/CategoryList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Strategy from "./components/Categories/categories/strategy";
import HiddenRoles from "./components/Categories/categories/hidden-roles";
import Dexterity from "./components/Categories/categories/dexterity";
import PushYourLuck from "./components/Categories/categories/push-your-luck";
import RollAndWrite from "./components/Categories/categories/roll-and-write";
import DeckBuilding from "./components/Categories/categories/deck-building";
import EngineBuilding from "./components/Categories/categories/engine-building";

function App() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("https://obsoknotty-project.herokuapp.com/api/reviews")
      .then((data) => {
        return data.json();
      })
      .then(({ reviews }) => {
        setReviewData(reviews);
      });
  }, []);

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
          <Route path="/" element={<Home />} />
          <Route
            path="/reviews"
            element={
              <Reviews reviewData={reviewData} setReviewData={setReviewData} />
            }
          />
          <Route
            path="/category"
            element={<CategoryList />}
            className="categoryBar"
          >
            <Route
              path="strategy"
              element={
                <Strategy
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
              }
            />
            <Route
              path="hidden-roles"
              element={
                <HiddenRoles
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
              }
            />
            <Route
              path="dexterity"
              element={
                <Dexterity
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
              }
            />
            <Route
              path="push-your-luck"
              element={
                <PushYourLuck
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
              }
            />
            <Route
              path="roll-and-write"
              element={
                <RollAndWrite
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
              }
            />
            <Route
              path="deck-building"
              element={
                <DeckBuilding
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
              }
            />
            <Route
              path="engine-building"
              element={
                <EngineBuilding
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
