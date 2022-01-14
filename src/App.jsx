import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import HelpPage from './pages/HelpPage';
import ConfigPage from './pages/ConfigPage';

const App = () => {
  return(
    <Router>  
      <div className="app">
          <Routes>
            <Route exact path="/help" element={<HelpPage/>} />
            <Route exact path="/config" element={<ConfigPage/>} />
            <Route  path="/" element={<MainPage/>} />
          </Routes>
      </div>
    </Router>
  )
}

export default App;
