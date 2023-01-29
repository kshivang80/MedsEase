import React, { useState, useEffect } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Image } from '@chakra-ui/react';

// const temp = JSON.parse(localStorage.getItem('checkout-arr') || '[]');
const Cartdata = ({ data }) => {
    const [state, setState] = useState([]);

    const handleDelete = (id) => {
        let arr = JSON.parse(localStorage.getItem("checkout-arr"))
        let x = arr.filter((elm) => {
            return elm.productId != id;
        })
        localStorage.setItem("checkout-arr", JSON.stringify(x));
    }




    return (
        <div>
            {
                data.map((elm) => {

                    return <div key={elm.productId} >
                        <div className='prod' style={{ display: "flex",marginTop:"15px" }}>
                            <div className='prodimg' style={{ width: "18%",height:"100px" ,boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
                                <Image w='90%' h='90%' m='auto' marginTop="5px"  src={elm.images} alt="" />
                            </div>
                            <div className='proddetails' style={{ width: "90%", }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div style={{marginLeft:"15px",marginTop:"5px"}}><h2 style={{ color: 'black', fontWeight: "bold" }}>{elm.name}</h2></div>
                                    <div><DeleteIcon onClick={() => { handleDelete(elm.productId) }} /></div>
                                </div>

                                <p style={{ color: 'gray' ,marginLeft:"15px"}}>{data[0].manufacturer}</p>
                                <h2 style={{ color: 'black', fontWeight: "bold",marginLeft:"15px" }}>MRP.{data[0].mrpDecimal - data[0].discountDecimal}</h2>
                            </div>
                           
                        </div>
                    </div>

                })
            }
        </div>
    )
}

export default Cartdata;