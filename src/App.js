import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import StartGamePage from "./pages/StartGamePage";
import AddPage from "./pages/AddPage";
import SubtractPage from "./pages/SubtractPage";
import MultiplyPage from "./pages/MultiplyPage";
import DividePage from "./pages/DividePage";

import { LEVEL, PATH } from "./utils/constants";
import LevelContext from "./store/level-context";
import Header from "./components/Header";
import ComplexPage from "./pages/ComplexPage";

function App() {
  const [level, setLevel] = useState(LEVEL.UNDEFINED);

  const levelCallback = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <LevelContext.Provider value={{ level: level }}>
      <BrowserRouter>
        {level !== LEVEL.UNDEFINED && <Header levelCallback={levelCallback} />}
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={<StartGamePage levelCallback={levelCallback} />}
            />
            <Route path={PATH.ADD} element={<AddPage />} />
            <Route path={PATH.SUB} element={<SubtractPage />} />
            <Route path={PATH.MULT} element={<MultiplyPage />} />
            <Route path={PATH.DIVI} element={<DividePage />} />
            <Route path={PATH.COMP} element={<ComplexPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </LevelContext.Provider>
  );
}

export default App;
