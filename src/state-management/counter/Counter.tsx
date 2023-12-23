import { useReducer } from "react";
import counterReducer from "./counterReducers";
import useCounterStore from "./Store";

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [value, dispatch] = useReducer(counterReducer, 0);
  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      <h3>Using Reducer</h3>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
      <br />
      <br />
      <h3>Using Zustand Reducer</h3>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
