import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './component/dashboard';
import Landing from './component/landing';
import ProtectUser from './component/protectUser';
import PreventUser from './component/preventUser';
function App() {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const location = userDetails.location;
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={ <ProtectUser><Dashboard cityName={location}/></ProtectUser>}/>
        <Route path="/" element={<PreventUser><Landing/></PreventUser>}/>
      </Routes>
    </>
  );
}

export default App;
