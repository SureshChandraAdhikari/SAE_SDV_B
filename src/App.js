import React from 'react';
import './App.css';
import About from './Components/About/About';
import Compo from './Components/compo/compo';
import Gallery from './Components/Gallery/Gallery';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/components' element={<Compo/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
