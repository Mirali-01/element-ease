import "./App.css";
import Nav from "./components/Nav";
import PeriodicTable from "./components/PeriodicTable";
import ElementModal from "./components/ElementModal";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<PeriodicTable />}>
          <Route path="/element/:number" element={<ElementModal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
