import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Patients from "./Patients";
import Navigation from "./Navigation";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="patients" element={<Patients />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
