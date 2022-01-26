import { useState } from "react";
import "./App.css";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const newColor = btnColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => {
          setBtnColor(newColor);
        }}
      >
        change to {newColor}!
      </button>
    </div>
  );
}

export default App;
