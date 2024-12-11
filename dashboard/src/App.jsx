import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "./Components/pages";
import Home from "./Components/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
