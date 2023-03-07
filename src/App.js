import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import './App.css';
import './style/Dark.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          </Route>
          <Route path='users'>
            <Route index element={<List title="Add New Users"/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New/>}/>
          </Route>
          <Route path='products'>
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New title="Add New Products"/>}/>
          </Route>
          <Route path='list'>
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




// import React from "react";
// import { useQuery, useMutation } from "@apollo/client";
// import OfferTile from "./OfferTile.js";

// export default function OfferListing() {
//     // Use console.log() for debugging
//     const LOADING = "Loading offers";
//     const ERROR = "Failed to load offers";

//     return "Return OfferTiles here";
// }

