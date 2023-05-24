import "./App.css";
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
