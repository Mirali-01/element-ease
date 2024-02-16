import "./App.css";
import Nav from "./components/Nav";
import PeriodicTable from "./components/PeriodicTable";
import ElementModal from "./components/ElementModal";
import NoMatch from "./components/NoMatch";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<PeriodicTable />}>
          <Route path="/element/:number" element={<ElementModal />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
