
import React from 'react'
import Background from './assets/background.jpg'

import HomeScreen from './components/HomeScreen.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

 
function App() {    

  return (
    <>
    <div  style={{
              background: `url(${Background})`,
              width: "100%",
              height: "95vh",
              backgroundSize: "contain"
            }}>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  
  );
}

export default App;
