import "./App.css";
import { useState, useEffect } from "react";
import ElementCard from "./components/ElementCard";

// Try to use filter for the names when inputting search
function App() {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  const getElement = async () => {
    let response = await fetch(
      "https://kineticzephyr.onrender.com/periodictable/"
    );
    let data = await response.json();
    data = data.data;
    // data.length = 20;
    setState(
      data.map((element) => {
        return element;
      })
    );
    // Allows us to grab data before rendering it
    setLoading(false);
  };

  // console.log(state);
  useEffect(() => {
    getElement();
  }, []);

  // displays loading before data fetched
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    return (
      <div className="loadingScreen">
        <img
          src="https://www.wearechemistry.com/images/bganimated.gif"
          alt="Chemistry is Cool..."
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>The Periodic Table of Elements</h1>
      <ElementCard element={state} />
    </div>
  );
}

export default App;
