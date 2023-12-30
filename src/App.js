import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const handleChange = (e) => setStep(Number(e.target.value));

  function handlerReset() {
    setCount(0);
    setStep(0);
  }

  const date = new Date("June 21 2027");
  date.setDate(date.getDate() + count);

  // function handlePrevious() {
  //   setStep(step - 1);
  // }

  // function handleNext() {
  //   setStep(step + 1);
  // }

  function handleSub() {
    if (step !== 0) {
      setCount(count - step);
    }
  }

  function handleAdd() {
    if (step !== 0) {
      setCount(count + step);
    }
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          onChange={handleChange}
          value={step}
        />
        <p>{step}</p>
      </div>

      {
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff", width: "50px" }}
            onClick={handleSub}
          >
            -
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />

          <button
            style={{ backgroundColor: "#7950f2", color: "#fff", width: "50px" }}
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      }

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handlerReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
