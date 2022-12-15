import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../Components/Landing/Home'
import ProductPage from '../Pages/productsPage/Productpage'


const AllRouter = () => {
  return (
    <div>
        <Routes>
            
            <Route   path='/' element={<Home/>} ></Route>
   
   <Route path={'/product'}  element={<ProductPage/>} ></Route>
        </Routes>

    </div>
  )
}

export default AllRouter