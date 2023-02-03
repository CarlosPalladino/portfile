import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import home from './pages/Home'
import './App.css'
export default function App() {
  return (
    <Routes>
      <Route exact path="https://github.com/Esteban-Somoza/Grupo_1_Sanitarios" element={"Saniarios/"}  />
      <Route exact path="https://github.com/CarlosPalladino/Mercado-Liebre" element="{Mercado/}" />
    </Routes>
    
  )
}