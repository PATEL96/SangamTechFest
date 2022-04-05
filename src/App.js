import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import ItCeAiDS from "./Pages/IT-CE-AI-DS";
import EcIct from "./Pages/EC-ECE-ICT";
import Mechanical from "./Pages/Mechanical";
import Automobile from "./Pages/Automobile";
import CivilEnv from "./Pages/CivilEnv";
import Chemical from "./Pages/Chemical";
import Common from "./Pages/Common";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <Router basename="/SangamTechFest">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/it-ce-ai-ds' element={<ItCeAiDS />} />
            <Route exact path='/ec-ece-ict' element={<EcIct />} />
            <Route exact path='/mechanical' element={<Mechanical />} />
            <Route exact path='/automobile' element={<Automobile />} />
            <Route exact path='/civil' element={<CivilEnv />} />
            <Route exact path='/chemical' element={<Chemical />} />
            <Route exact path='/non-technical' element={<Common />} />
            <Route exact path='/developers' element={<About />} />
          </Routes>
          <Counter />
        </Router>
      </div>
    </div >
  );
}

export default App;
