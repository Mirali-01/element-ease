import "./App.css";
import { Helmet } from "react-helmet-async";
import Nav from "./components/Nav";
import PeriodicTable from "./components/PeriodicTable";
import ElementModal from "./components/ElementModal";
import CategoryModal from "./components/CategoryModal";
import StudyMode from "./components/StudyMode";
import StudyElementModal from "./components/StudyElementModal";
import StudyCategoryModal from "./components/StudyCategoryModal";
import NoMatch from "./components/NoMatch";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Element Ease</title>
        <link
          rel="icon"
          href="/assets/images/url-icon.png"
          attribute="https://www.flaticon.com/free-icon/science_1046269"
        />
      </Helmet>
      <Nav />
      <Routes>
        <Route path="/" element={<PeriodicTable />}>
          <Route path="/element/:number" element={<ElementModal />} />
          <Route path="/elements" element={<CategoryModal />} />
        </Route>
        <Route path="/study" element={<StudyMode />}>
          <Route
            path="/study/element/:number"
            element={<StudyElementModal />}
          />
          <Route path="/study/elements" element={<StudyCategoryModal />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
