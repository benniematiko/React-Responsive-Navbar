import "./App.css";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes></Routes>
    </Router>
  );
}

export default App;
