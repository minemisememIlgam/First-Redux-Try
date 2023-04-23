import { useContext } from "react";
import Context from "../Context";
function QuizResultsStat() {
  const value = useContext(Context);
  return (
    <div>
      {}
      <h1>Vysledky z predchozich pokusu</h1>
      {value.showResults ? <div>{value.array}</div> : null}
      <button>Zpet</button>
    </div>
  );
}

export default QuizResultsStat;
