import  Header  from "./components/Header/Header.jsx"
import Home from "./components/pages/Home/Home.jsx";
import Todos from "./components/pages/Todos/Todos.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route, Link } from "react-router-dom";

const pages = ["home","todos","admin"]

function App() {
  return (
    <div className="App">
      <Header pages={pages}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
