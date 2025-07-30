import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "../pages/Home"
import CardInfo from "../pages/CardInfo"

function AppRoutes() {
  return (
   <>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/CardInfo' element={<CardInfo/>}/>
   </Routes>
   </>
  )
}

export default AppRoutes