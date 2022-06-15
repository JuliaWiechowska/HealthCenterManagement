import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Patients from "./components/Patients";
import Navigation from "./components/Navigation";
import MainPage from "./components/MainPage";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="patients" element={<Patients />}></Route>
          <Route path="projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
