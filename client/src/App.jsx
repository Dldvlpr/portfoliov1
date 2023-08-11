import './App.scss'
import Layout from "./components/Layout/index.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}/>
        </Routes>
    </>
  )
}

export default App