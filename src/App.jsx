import { Routes, Route } from "react-router";
import Home from "./Home";
import Details from "./Detail";
import NavBar from "./NavBar";
import ErrorPage from "./Error";
import './index.css';

export default function App() {

  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path ="/" element={<Home/>}/>
        {/* <Route path ="/details" element={<Details/>}/> */}
        <Route path="/details/:body" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

