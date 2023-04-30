import Home from "./Pages/Home/Home";
import Info from "./Pages/Info/Info";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
