import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Components/Landing/Home'
import Offer from '../Pages/Offers/Offer'
import Plus from '../Pages/Plus/Plus'

const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route   path='/' element={<Home/>} ></Route>
            <Route   path='/Plus' element={<Plus/>} ></Route>
            <Route   path='/Offer' element={<Offer/>} ></Route>


        </Routes>
        

    </div>
  )
}

export default AllRouter