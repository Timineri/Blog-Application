import { Routes, Route } from "react-router";
import Home from "./Home";
import Details from "./Detail";
import NavBar from "./NavBar";
import Card from "./Card"
import './index.css';

export default function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/details" element={<Details/>}/>
      </Routes>
      <Card/>
    </>
  )
}

