import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";
function App() {
  // redux function
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement coutnter</h1>
      <h4>using react and redux</h4>

      <div className="d-flex p-4 w-50 mx-auto">
        <a
          onClick={() => dispatch(decNumber(5))}
          className="btn btn-warning w-75"
        >
          -
        </a>
        <input
          className="form-control text-center"
          width={50}
          value={myState}
        />
        <a
          onClick={() => dispatch(incNumber(5))}
          className="btn btn-success w-75"
        >
          +
        </a>
      </div>
    </div>
  );
}

export default App;
