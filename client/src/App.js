import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./components/LoadingScreen";
import ElementCard from "./components/ElementCard";

function App() {
  const [elementData, setElementData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchElement = async () => {
    const response = await axios.get("https://elementease.onrender.com");
    const { data } = response.data;
    setElementData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchElement();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <ElementCard element={elementData} />
    </div>
  );
}

export default App;
