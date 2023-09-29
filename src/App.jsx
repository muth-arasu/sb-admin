import React from 'react'
import Sidebar from './components/sidebar'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import Edit from './components/Edit'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import NestedRouteExanples from './components/NestedEamples/' 


export default function App() {
let [data,setData]=useState([
  {
    name:"Mutharasu",
    userName:"muthu244",
    email:"mutharasu.sm@gmail.com",
    mobile:9600356020,
    batch:"B50WT"
},
{
  name:"Gowtham",
  userName:"Gowtham874",
  email:"mutharasu.sm@gmail.com",
  mobile:9600356088,
  batch:"B50WH"
},
{
  name:"Uthay",
  userName:"Uthay887",
  email:"mutharasu.sm@gmail.com",
  mobile:960356099,
  batch:"B50WE"
}
])
  return (
    <>
       <div id='wrapper'>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={ <Dashboard data={data} setData={setData}/>}/>
        <Route path='/create' element={ <Create data={data} setData={setData} />}/>
        <Route path='/edit/:id' element={ <Edit  data={data} setData={setData}/>}/>
        <Route path='/*' element={ <Navigate to='/dashboard'/>}/>
        <Route path='/nesetd'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           element={<NestedRouteExanples/>}>

        </Route>
      </Routes>
      </BrowserRouter>
       </div>
    
    </>
  )
}
