import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "../node_modules/@mui/icons-material/index";
import Login from '../src/components/Login'
import Admin from "./components/Admin";
import SignUp from "./components/SignUp";


function App() {
  

  return (
    <div className="">
      <BrowserRouter>
      {/* <Chatty/> */}
        <Routes>
          <Route path="/login" element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}>
           
          </Route>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
