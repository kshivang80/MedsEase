import React, { useEffect } from 'react'

const CartItem = () => {

  function loadData(key){
    try{
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    }
    catch(err){
        return undefined 
        // or return
    }
}

function saveData(key, data=""){
  localStorage.setItem(key,JSON.stringify(data))
}

useEffect(()=>{
  loadData();
},[]);
  return (
    <div>CartItem</div>
  )
}

export default CartItem