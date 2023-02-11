
import React from 'react'

import HomeScreen from './components/HomeScreen.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

 
function App() {    

  return (
    <>
    <div >
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
