import { lazy } from "react";
import { Routes, Route } from "react-router";
let Home = lazy(() => import('./Pages/Home'))
let Details = lazy (() => import('./Pages/Detail'))
let ErrorPage = lazy (() => import('./Pages/Error'))
import './index.css';

export default function App() {

  return (
    <>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/details/:body" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

