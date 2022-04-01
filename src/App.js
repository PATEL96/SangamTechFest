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
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/CollegeFest/' element={<Home />} />
            <Route exact path='/CollegeFest/it-ce-ai-ds' element={<ItCeAiDS />} />
            <Route exact path='/CollegeFest/ec-ece-ict' element={<EcIct />} />
            <Route exact path='/CollegeFest/mechanical' element={<Mechanical />} />
            <Route exact path='/CollegeFest/automobile' element={<Automobile />} />
            <Route exact path='/CollegeFest/civil-environment' element={<CivilEnv />} />
            <Route exact path='/CollegeFest/chemical' element={<Chemical />} />
            <Route exact path='/CollegeFest/common' element={<Common />} />
            <Route exact path='/CollegeFest/developers' element={<About />} />
          </Routes>
        </Router>
      </div>
    </div >
  );
}

export default App;
