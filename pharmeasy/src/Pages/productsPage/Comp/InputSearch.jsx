import {Image, Input} from "@chakra-ui/react"
import { useState } from "react";
import { useSelector } from "react-redux";
import magnifyLense from "../img/magnifyLense.webp"


export default function InputSearch({text,onchange,setText}){

    const [text1,setText1]=useState('')

    const debounce=(cb,delay)=>{
        let id;
        
            return ()=>{
        id&&clearTimeout(id)
        id=setTimeout(() => {
            cb()
        },delay);
        }
          }


          const handelText=(e)=>{
            setText1(e.target.value)
          }


          let d=debounce()
          console.log(d);
         

    return <Input  onChange={(e)=>handelText(e)}   />
}