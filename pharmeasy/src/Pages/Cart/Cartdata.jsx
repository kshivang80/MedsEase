import React,{useState,useEffect} from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

// const temp = JSON.parse(localStorage.getItem('checkout-arr') || '[]');
const Cartdata = ({data}) => {
    const [state, setState] = useState([]);
    
    const handleDelete=(id)=>{
        let arr=JSON.parse(localStorage.getItem("checkout-arr"))
        let x=arr.filter((elm)=>{
            return elm.productId!=id;
        })      
        localStorage.setItem("checkout-arr",JSON.stringify(x));
    }




  return (
    <div>        
        {
            data.map((elm)=>{
               
                return <div key={elm.productId} >
                    <div className='prod'style={{display:"flex" }}>
            <div className='prodimg' style={{width:"10%"}}>
                <img src={elm.images} alt="" />
            </div>
            <div className='proddetails'style={{width:"90%"}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div><h2 style={{color:'black',fontWeight:"bold"}}>{elm.name}</h2></div>
                    <div><DeleteIcon onClick={()=>{handleDelete(elm.productId)}}/></div>
                </div>
                
                <p style={{color:'gray'}}>{data[0].manufacturer}</p>
                <h2 style={{color:'black',fontWeight:"bold"}}>MRP.{data[0].mrpDecimal-data[0].discountDecimal}</h2>
            </div>
        </div>
                </div>

            })
        }
    </div>
  )
}

export default Cartdata;