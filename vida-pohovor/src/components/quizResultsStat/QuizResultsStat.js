import { useContext } from "react";
import Context from "../Context";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
function QuizResultsStat() {
  const value = useContext(Context);
  return (
    <div>
      {}
      <h1>Vysledky z predchozich pokusu</h1>
      {value.showResults ? <div>{value.array}</div> : null}
      <p></p>
      <button>
        <Link to="/">Zpet</Link>
      </button>
    </div>
  );
}

export default QuizResultsStat;
