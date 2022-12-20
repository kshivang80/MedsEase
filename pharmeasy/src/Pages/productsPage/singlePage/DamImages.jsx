

import {Box,Image} from "@chakra-ui/react"
import Slider from "react-slick"
import { crousel } from "./ResponsiveCrousel";

import "./singlecart.css"

export default function DamImages({images}){




    return <>

<div className='crousel-div'  style={{border:"2px solid black"}}   >
        <Slider    {...crousel}>
          {images.map((item) => (
            <div className="crousel-card">
              <Image src={item.url}  />
            </div>
          ))}
        </Slider>

      </div>

    </>
}