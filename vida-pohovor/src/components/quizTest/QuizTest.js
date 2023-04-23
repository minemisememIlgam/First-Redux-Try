import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";
import { Route, Routes } from "react-router-dom";
function QuizTest() {
  const value = useContext(Context);
  console.log(value);

  return (
    <div>
      <h1>Chcete zacit test?</h1>
      <p></p>
      {value.startTest ? null : (
        <>
          {" "}
          <button>
            <Link to="/question">Jdu na to! </Link>
          </button>
          <p></p>
          <button onClick={() => value.wannaShowResults()}>
            <Link to="/quiz">Moje vysledky z predchozich pokusu</Link>
          </button>{" "}
        </>
      )}
    </div>
  );
}

export default QuizTest;
