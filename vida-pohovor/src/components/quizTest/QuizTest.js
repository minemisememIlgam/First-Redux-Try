import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Context";

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
          <button onClick={() => value.wasStarted()}>Jdu na to!</button>
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
