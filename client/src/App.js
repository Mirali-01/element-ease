import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingScreen from "./components/LoadingScreen";
import ElementCard from "./components/ElementCard";
import Nav from "./components/Nav";

function App() {
  const [elementData, setElementData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchElement = async () => {
    try {
      const response = await axios.get("https://elementease.onrender.com");
      const { data } = response.data;
      setElementData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchElement();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Nav />
      <ElementCard element={elementData} />
    </div>
  );
}

export default App;
