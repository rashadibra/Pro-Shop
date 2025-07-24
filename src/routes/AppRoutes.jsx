import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"

function AppRoutes() {
  return (
   <>
   <Routes>
<Route path='/Home' element={<Home/>}/>
<Route path='/Login' element={<Login/>}/>
   </Routes>
   </>
  )
}

export default AppRoutes