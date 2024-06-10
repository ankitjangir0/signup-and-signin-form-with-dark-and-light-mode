import './App.css';
import './styles.css';

// import {BrowserRouter ,Routes , Route }from 'react-router-dom'
import React, { useState } from 'react';

import Content from './Components/Content';



function App(){
const [isDarkMode, setIsDarkMode] = useState(false);

const toggleMode = () => {
  setIsDarkMode(!isDarkMode);
  if (!isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
};
 

return (
  <>
  <div className='container' >
    <h1>Welcome 👋</h1>
    <p>No One tell you that ......</p><br/>
    <p>"What They Don't Tell You About Setting Boundries At Work."</p>
    </div>

    <button onClick={toggleMode} className="toggle-btn">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
    <div className="signup-signin">
      <Content/>
   
   
  </div>
  </>

);


}


export default App;


