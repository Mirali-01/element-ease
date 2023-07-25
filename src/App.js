import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ElementCard from "./components/ElementCard";

function App() {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  const getElement = async () => {
    const delay = (ms) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };
    let response = await axios.get(
      "https://kineticzephyr.onrender.com/periodictable/"
    );
    let data = response.data;
    data = data.data;
    setState(data);
    await delay(2500);
    setLoading(false);
  };

  useEffect(() => {
    getElement();
  }, []);

  if (loading) {
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
      <ElementCard element={state} />
    </div>
  );
}

export default App;
