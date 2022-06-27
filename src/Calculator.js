import React from "react";
import "./style.css";

function Calculator() {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    console.log("Expression is: " + expression);
    if (expression[expression.length - 1] === "=") {
      if (/[1-9]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };

  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };

  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <input
            className="input"
            type="text"
            value={expression}
            placeholder="0"
            disabled
          />
          <div className="total">{answer}</div>
        </div>
        <button onClick={allClear} className="padButton AC tomato">
          AC
        </button>
        <button onClick={clear} className="padButton C tomato">
          C
        </button>
        <button onClick={() => display(".")} className="padButton dot">
          .
        </button>
        <button
          onClick={() => display("/")}
          className="padButton div"
          id="divide"
        >
          /
        </button>
        <button
          onClick={() => display("1")}
          className="padButton one dark-green"
        >
          1
        </button>
        <button
          onClick={() => display("2")}
          className="padButton two dark-green"
        >
          2
        </button>
        <button
          onClick={() => display("3")}
          className="padButton three dark-green"
        >
          3
        </button>
        <button
          onClick={() => display("+")}
          className="padButton plus"
          id="add"
        >
          +
        </button>
        <button
          onClick={() => display("4")}
          className="padButton four dark-green"
        >
          4
        </button>
        <button
          onClick={() => display("5")}
          className="padButton five dark-green"
        >
          5
        </button>
        <button
          onClick={() => display("6")}
          className="padButton six dark-green"
        >
          6
        </button>
        <button
          onClick={() => display("-")}
          className="padButton minus"
          id="substract"
        >
          -
        </button>
        <button
          onClick={() => display("7")}
          className="padButton seven dark-green"
        >
          7
        </button>
        <button
          onClick={() => display("8")}
          className="padButton eight dark-green"
        >
          8
        </button>
        <button
          onClick={() => display("9")}
          className="padButton nine dark-green"
        >
          9
        </button>
        <button
          onClick={() => display("*")}
          className="padButton times"
          id="multiply"
        >
          *
        </button>
        <button
          onClick={() => display("0")}
          className="padButton zero dark-green"
        >
          0
        </button>
        <button
          onClick={() => display("0")}
          className="padButton zero dark-green"
        >
          0
        </button>
        <button onClick={calculate} className="padButton equal blue">
          =
        </button>
      </div>
    </div>
  );
}

export { Calculator };
