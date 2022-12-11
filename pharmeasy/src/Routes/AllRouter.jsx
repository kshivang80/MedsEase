import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Components/Landing/Home'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route   path='/' element={<Home/>} ></Route>


        </Routes>
        

    </div>
  )
}

export default AllRouter