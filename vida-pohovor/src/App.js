import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import QuizResultsStat from "./components/quizResultsStat/QuizResultsStat";
import QuizTest from "./components/quizTest/QuizTest";
import Context from "./components/Context";
import Questions from "./components/questions/Questions";

function App() {
  const [startTest, setStartTest] = useState(false);

  const [showResults, setShowResults] = useState(false);

  const array = ["5/10", "2/10", "3/10"];

  const wasStarted = () => {
    setStartTest(true);
  };

  const wasClickedZpet = () => {
    setStartTest(false);
  };

  const wasClickedZpetOnResultPage = () => {
    setShowResults(false);
  };

  const wannaShowResults = () => {
    setShowResults(true);
  };

  const value = {
    wasStarted,
    startTest,
    array,
    wannaShowResults,
    showResults,
    wasClickedZpet,
    wasClickedZpetOnResultPage,
    QuizTest,
  };
  //Context Provider это обертка и все компоненты что в ней находятся имеют доступ к одним и тем же данным (данные передабтся как value
  //Routes позволяет добавлять маршрутизацию между разными элементами)
  console.log(startTest);
  return (
    <Context.Provider value={value}>
      <div className="container">
        <Routes>
          <Route path="/" element={<QuizTest />} />
          <Route path="quiz" element={<QuizResultsStat />} />
          <Route path="question" element={<Questions />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
