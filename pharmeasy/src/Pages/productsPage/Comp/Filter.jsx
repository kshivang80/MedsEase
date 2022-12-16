import {
  Box,
  Heading,
  Checkbox,
  Text,
  Spacer,
  Input,
  Image,
  useEventListener,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProductUrl, get_url_fn } from "../../../Redux/Redux-Product/action";
import CheckBox from "../checkBox/CheckBox";
import magnifyLense from "../img/magnifyLense.webp";
import "../pro.css";
import InputSearch from "./InputSearch";

export default function Filter() {

  const [text,setText]=useState('')

const dispatch=useDispatch()

  const [catagorie,setCatogorie]=useState([])

  const [searchParams,setSearchParams]=useSearchParams()
  



  const handelFilter = (e) => {
    let newCatagorie = [...catagorie];

    if (newCatagorie.includes(e.target.value)) {
      newCatagorie.splice(newCatagorie.indexOf(e.target.value));
    } else {
      newCatagorie.push(e.target.value);
    }
    setCatogorie(newCatagorie);
  };




  // const data=useSelector((store)=>store.reducer.dataOnfetch)

  // const handelSearch=()=>{
  
  //     let newdata=data.filter((elm)=>elm.manufacturer==text)
  //     console.log(newdata)
  // }
  
  



  const  handelChange=(e)=>{
     setText(e.target.value)
  }


 
console.log(text,'2')
  
 
  return (
    <Box>
      <Text as="b" color="grey" fontSize={"2xl"}>
        Filter
      </Text>

      <Box>
        <Text fontWeight={"bold"} color="grey" mt="40px">
          Catagorie
        </Text>
        <Box display={"flex"} justifyContent="space-between" mt="20px">
          <Text>Personal Care</Text>
          <CheckBox def={true} />
        </Box>
        <Box border={"1px solid grey"} mt="20px"></Box>

        <Box mt="20px">
          <Text as={"b"} color="gray.600">
            Sub Catagorie
          </Text>
          <Box mt="30px" border={"1px solid grey"}></Box>
          <Box display={"flex"} flexDirection="column" gap={10} mt="30px">
            <Box display={"flex"} justifyContent="space-between">
              <Text fontSize={"10px"} as="b" color={"grey"}>
                Medicine
              </Text>
              <CheckBox
                // ckvalue={catagorie.includes("medicine")}
                value="medicine"
               onchange={handelFilter}
                
              />
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <Text fontSize={"10px"} as="b" color={"grey"}>
                Personal Care
              </Text>
              <CheckBox
                // ckvalue={catagorie.includes("personalNeed")}
                value="personalNeed"
                onchange={handelFilter}

              />
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <Text fontSize={"10px"} as="b" color={"grey"}>
                {" "}
                Immunity Booster
              </Text>
              <CheckBox
                // ckvalue={catagorie.includes("immunityBooster")}
                value="immunityBooster"
               onchange={handelFilter}
              />
            </Box>
          </Box>
        </Box>
        <Box border="1px solid grey" bg="grey" mt="20px"></Box>

        <Box mt="20px">
          <Text color={"gray.700"} as="b">
            Brand
          </Text>
        </Box>

        <Box mt="20px" display={"flex"}>
          <Box className="searchbar">
            {" "}
           <InputSearch  text={text} setText={setText} onchange={handelChange}   />
          </Box>
          <Box className="lense-img">
            {" "}
            <Image src={magnifyLense} w="40px" />
          </Box>
        </Box>

        <Box mt="30px" border={"1px solid grey"}></Box>

        <Box mt="20px">
          <Text as="b" color={"gray.600"}>
            Price
          </Text>
        </Box>

        <Box display={"flex"} flexDirection="column" gap={10} mt="30px">
          <Box display={"flex"} justifyContent="space-between">
            <Text fontSize={"10px"} as="b" color={"grey"}>
              100-199
            </Text>
            <CheckBox />
          </Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text fontSize={"10px"} as="b" color={"grey"}>
              200-299
            </Text>
            <CheckBox />
          </Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text fontSize={"10px"} as="b" color={"grey"}>
              {" "}
              300-above
            </Text>
            <CheckBox />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
