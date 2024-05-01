import React from 'react'

import {Route, Routes } from 'react-router-dom'
import Main from './page/Main'
import FormDataDisplay from './component/FormDataDisplay'


export const AllRoutes = () => {


  return (
    <div>
     
        <Routes>
       
            <Route path='/' element={<Main/>}/>
        <Route path="/formData" element={<FormDataDisplay />} />
        
            
         
        </Routes>
    </div>
  )
}