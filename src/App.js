import './App.css';

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = (props) => {
  
  const apiKey ="35f8498746684954afcc7780fd86323c";
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar
          color='#00ffff'
          progress={progress}
        />
       
        
      </Router>
    </div>
  )
}

export default App;
// <Route path="/" element = {<News setProgress={setProgress} apiKey={apiKey} pageSize = {5} country = "in" category = "general"/>}/> 

