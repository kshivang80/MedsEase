

import {Box,Image} from "@chakra-ui/react"
import Slider from "react-slick"
import { crousel } from "./ResponsiveCrousel";

import "./singlecart.css"

export default function DamImages({images}){




    return <>

<div className='crousel-div'    >
        <Slider    {...crousel}>
          {images.map((item) => (
            <div key={images} className="crousel-card">
              
              <Image src={item.url}  />
            </div>
          ))}
        </Slider>

      </div>

    </>
}