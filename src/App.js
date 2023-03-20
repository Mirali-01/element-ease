import "./App.css";
import { useState, useEffect } from "react";
import ElementCard from "./components/ElementCard";

// Try to use filter for the names when inputting search
function App() {
  const [state, setState] = useState(null);

  const getElement = async () => {
    let response = await fetch(
      "https://kineticzephyr.onrender.com/periodictable/"
    );
    let data = await response.json();
    data = data.data;
    data.length = 5;
    setState(
      data.map((element) => {
        return element;
      })
    );
    // console.log(state);
  };

  useEffect(() => {
    getElement();
  }, []);

  return (
    <div className="App">
      <ElementCard element={state} />
    </div>
  );
}

export default App;
