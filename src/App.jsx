import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Details from "./Pages/Detail";
import ErrorPage from "./Pages/Error";
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

