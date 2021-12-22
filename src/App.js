import "./App.css";
import {Routes, Route } from "react-router-dom";
import Journal from "./components/Journal";
import Game from "./components/Game";
import Home from "./components/Home";

function App() {
  return (
    <div className="Wrapper">

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/game" element={<Game />} />
        </Routes>
    </div>
  );
}

export default App;
