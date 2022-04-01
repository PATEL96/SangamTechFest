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

function App() {
  return (
    <div className="App">
      <div>
        <Router basename="/SangamTechFest">
          <Navbar />
          <Routes>
            <Route exact path='/SangamTechFest' element={<Home />} />
            <Route exact path='/SangamTechFest/it-ce-ai-ds' element={<ItCeAiDS />} />
            <Route exact path='/SangamTechFest/ec-ece-ict' element={<EcIct />} />
            <Route exact path='/SangamTechFest/mechanical' element={<Mechanical />} />
            <Route exact path='/SangamTechFest/automobile' element={<Automobile />} />
            <Route exact path='/SangamTechFest/civil' element={<CivilEnv />} />
            <Route exact path='/SangamTechFest/chemical' element={<Chemical />} />
            <Route exact path='/SangamTechFest/common' element={<Common />} />
            <Route exact path='/SangamTechFest/developers' element={<About />} />
          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;
