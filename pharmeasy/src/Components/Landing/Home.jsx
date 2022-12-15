import React from 'react'
import "./Home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoriesSlider6Link, DealsSlider11Link, Discover, FeaturedLink, FrequentlyLink, LaunchesSlider7Link, OfferSlider4Link, OnlyImg2Link, OnlyImgLink, PaymentSlider5Link, ShopConcernLink, Slider2Link, Slider3Link, SpotlightSlider11Link, TrendingSlider8Link, WellnessSlider11Link } from './HomeCards';
import { settings, settings2, settings3, settings4, settings5, settings6, settings7, settings8, settings9 } from './ResponsiveCard';
import { Avatar, Box, Image, Text, SimpleGrid, Button } from "@chakra-ui/react"
import Plus from "./Images/PlusImg.png"


const Home = () => {








  return (
    <div className="Maindiv">



      <div className='Discovercard'>
        <Slider {...settings}>
          {Discover.map((item) => (
            <div className="card">

              <div className="cardtop">
                <img src={item.image} />
              </div>
              <div className="cardbottom">
                <p>{item.name}</p>
                <h5>{item.off}</h5>
              </div>

            </div>

          ))}
        </Slider>

      </div>

      <br />
      <br />

      <div className='Slide2'>
        <Slider  {...settings2}>
          {Slider2Link.map((item) => (
            <div className="Slider-card">
              <img src={item.image} />
            </div>
          ))}
        </Slider>

      </div>


      <div className='Slide3'>

        <div className='LiveTest' >
          <div style={{ fontSize: "26px", color: "#30363C", width: "95%", border: "1px solid red", fontWeight: "bolder", }}>
            <p>Lab Tests by Health Concern</p>
          </div>
          <div style={{ display: "flex", height: "60%",width: "95%", border: "1px solid red", justifyItems: "self-start", }} >
            <div>
              <p style={{ fontFamily: "sans-serif" }}>Powered by</p>
            </div>
            <div>
              <img src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0" alt="" style={{ width: "100%", height: "20px", marginLeft: "10px" }} />
            </div>

          </div>

        </div>


        <div style={{ marginTop: "20px" }}>
          <div className='Slide3-card'>
            <Slider  {...settings3}>
              {Slider3Link.map((item) => (
                <div className="Slide3-cardImg">
                  <img src={item.image} />
                </div>
              ))}
            </Slider>


          </div>

        </div>




      </div>



      {/* Previos a data slid  start woek */}

      <div className='Slide4'>
        <div className='LiveTest'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", padding: "-40px 0px -40px 10px" }}>Previously Browsed Items</p>


        </div>
        <div className='Data-prev'>
          <div className='oneDiv'>
            <div className='imgBox' style={{ width: "60%", height: "180px", margin: "auto", boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <img src="https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1669616965.jpg?dim=1440x0" alt="" style={{ width: "100%", height: "60%", marginLeft: "", marginTop: "15%", }} />

            </div>
            <div style={{ width: "60%", margin: "auto", border: "1px solid red", overflow: "hidden" }} >
              <h3 style={{ fontSize: "18px", fontFamily: "system-ui", color: "#30363C", }}>Calcimax Forte Plus Strip Of 30 Tablets </h3>
              {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", }}> Strip Of 30 Tablets</h3> */}
              <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", }}>MRP 5.00</p>
              <div style={{ display: "flex", justifyContent: "", justifyItems: "", }}>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", }}>₹228.00</p>
                <p style={{ color: "white" }}>-</p>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", }}><s>20% OFF</s> </p>
              </div>

            </div>


          </div>
          <div className='oneDiv'>
            <div className='imgBox' style={{ width: "60%", height: "180px", margin: "auto", }}>
              <img src="https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-1-1647434835.jpg?dim=1440x0" alt="" style={{ width: "100%", height: "60%", marginLeft: "", marginTop: "15%", }} />

            </div>
            <div style={{ width: "60%", margin: "auto", overflow: "hidden" }} >
              <h3 style={{ fontSize: "18px", fontFamily: "system-ui", color: "#30363C", }}>Ecosprin 75mg Strip Of 14 Tablets </h3>
              {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", }}> Of 14 Tablets</h3> */}
              <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", }}>MRP 5.00</p>
              <div style={{ display: "flex", justifyContent: "", justifyItems: "", }}>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", }}>₹40.00</p>
                <p style={{ color: "white" }}>-</p>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", }}><s>15% OFF</s> </p>
              </div>

            </div>


          </div>



        </div>

      </div>

      {/* ********************Just offer Section ********************* */}


      <div className='justOffer'>
        <div className='LiveTest1'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", padding: "-40px 0px -40px 10px" }}>Offers Just for You</p>


        </div>

        <div className='justOffer-card'>
          <Slider {...settings4}>
            {OfferSlider4Link.map((item) => (
              <div className="" >

                <div className="justOffer-cardtop" style={{ display: "flex" }} >

                  <div className="justOffer-cardtop1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className='justOffer-cardbottom'>
                    <p>{item.name}</p>
                  </div>


                </div>










              </div>

            ))}
          </Slider>

        </div>




      </div>

      {/* =========== payment offers section */}

      <div className='Payment'>
        <div className='LiveTest1'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", padding: "-40px 0px -40px 10px" }}>Payment Offers</p>


        </div>

        <div className='payment-slid'>
          <Slider {...settings5}>
            {PaymentSlider5Link.map((item) => (
              <div className="paymant-card">


                <img src={item.image} />



              </div>

            ))}
          </Slider>

        </div>


      </div>



      {/* Shop by Categories */}


      <div className='Categories'>
        <div className='LiveTest1'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", fontWeight: "bolder", padding: "-40px 0px -40px 10px" }}>Shop by Categories</p>


        </div>

        <div className='Categories-card'>
          <Slider {...settings6}>
            {CategoriesSlider6Link.map((item) => (
              <div className="Categories1-card">

                <div className="Categories-top">
                  <img src={item.image} />
                </div>
                <div className="Categories-bottom">
                  <p>{item.name}</p>

                </div>

              </div>

            ))}
          </Slider>

        </div>


      </div>


      {/* New Launches  html code */}

      <div className='Launches'>
        <div className='LiveTest1'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>New Launches</p>
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", }}>New wellness range just for you!</p>

        </div>

        <div className='Launches-card'>
          <Slider {...settings6}>
            {LaunchesSlider7Link.map((item) => (
              <div className="Launches1-card">

                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">

                <Text noOfLines={[1, 2,]} style={{ fontSize: "17px", fontFamily: "system-ui", color: "#30363C", }}>{item.name}</Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p style={{ fontSize: "15px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", }}>{item.Mrp}</p>
                  <div style={{ display: "flex", justifyContent: "", justifyItems: "", }}>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", }}>{item.price}</p>
                    <p style={{ color: "white" }}>-</p>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", }}><s>{item.off}</s> </p>
                  </div>


                </div>

              </div>

            ))}
          </Slider>

        </div>


      </div>

      {/* New Trending   html code */}

      <div className='Launches'>
        <div className='LiveTest1'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>Trending Near You</p>
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", }}>Popular in your city</p>

        </div>

        <div className='Launches-card'>
          <Slider {...settings6}>
            {TrendingSlider8Link.map((item) => (
              <div className="Launches1-card">

                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">

                <Text noOfLines={[1, 2,]} style={{ fontSize: "17px", fontFamily: "system-ui", color: "#30363C", }}>{item.name}</Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p style={{ fontSize: "15px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", }}>{item.Mrp}</p>
                  <div style={{ display: "flex", justifyContent: "", justifyItems: "", }}>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", }}>{item.price}</p>
                    <p style={{ color: "white" }}>-</p>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", }}><s>{item.off}</s> </p>
                  </div>


                </div>

              </div>

            ))}
          </Slider>

        </div>


      </div>


      {/* ************** Plus Image ***********/}

      <Box h="200px" border="1px solid red" w="95%" margin="auto" cursor="pointer" >
        <Image src={Plus} w="100%" h="100%" margin="auto" />
      </Box>



      {/* ****************** Shop by Concern   ******************** */}

      <Box className='ShopConcern' >

        <Box className='LiveTest1' marginTop="50px">

          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>Shop by Concern</p>
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", }}>Products are handpicked by experts</p>



        </Box>


        <SimpleGrid columns={{ base: 2, sm: 3, md: 5, lg: 7, }} spacing={2} h="auto" w="100%">
          {ShopConcernLink.map((item) => (

            <Box border="1px solid red" w="100%" h="200px">

              <Box className='ShopConcernImgBox' h="60%" border="2px solid pink" margin="auto" borderRadius="100%" w="80%">

                <Avatar h='100%' w="100%" src={item.image} margin="auto" />

              </Box>
              <Box h="40%" border="1px solid blue" textAlign="center">
                <Text as="b" color="#30363C" noOfLines={[1, 2]}>{item.name}</Text>
              </Box>


            </Box>




          ))

          }
        </SimpleGrid>


      </Box>



      {/* ******************  Frequently Booked Lab Tests  ******************** */}


      <Box className='Frequently'>

        <Box className='LiveTest1' marginTop="50px">

          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>Frequently Booked Lab Tests</p>

          <SimpleGrid columns={{ base: 2, sm: 2, md: 4, lg: 4, }} spacing={10} h="auto" w="100%" marginTop="20px" box-shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
            {FrequentlyLink.map((item) => (

              <Box border="1px solid red" w="100%" h="300px" bg="#E8F7FD" borderRadius="15px" box-shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">

                <Box h="17%" >
                  <Button marginTop="5px" marginLeft="4px" colorScheme="purple" backgroundColor="#F47779" variant='solid' color="white">{item.off}</Button>
                </Box>
                <Box h="23%" >
                  <Text as="b" color="#30363C" marginLeft="4px" noOfLines={[1, 2]} fontSize='xl'>{item.name}</Text>
                </Box>
                <Box h="20%" >
                  <Text noOfLines={[1, 2]} marginLeft="4px" fontSize='lg' color="#6E787E">{item.des}</Text>
                </Box>

                <Box display="flex" h="40%"  >
                  <Box w="50%" >
                    <br />
                    <br />
                    <Text marginLeft="6px" as="b" color="#6E787E" fontSize='lg' ><s >{item.cut}</s>  </Text>
                    <br />
                    <Text marginLeft="6px" as="b" fontSize='xl'>{item.price}</Text>
                  </Box>
                  <Box w="50%" >
                    <Image src={item.image} w="100%" h="100%" />

                  </Box>

                </Box>



              </Box>




            ))

            }
          </SimpleGrid>


        </Box>







      </Box>




      {/* ****************Wellness work start  **************/}

      <Box className='Wellness'>
        <Box className='LiveTest2-wellness'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>Wellness Essentials of the Week</p>
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", }}>Super charge your immunity with us</p>

        </Box>

        <Box className='Wellness-card' >
          <Slider {...settings7}>
            {WellnessSlider11Link.map((item) => (
              <div className="Wellness1-card" >


                <Box style={{ display: "flex", width: "100%", height: "100%" }}>
                  <Box className="Wellness-top" >
                    <img src={item.image} />
                  </Box>

                  <Box className="Wellness-bottom" >
                    <Box marginTop="30px">
                      <Text as="b" border="1px solid pink" noOfLines={[1, 2,]}>{item.name}</Text>

                    </Box>


                    <Text color="#8897A2" marginTop="10px" fontSize="15px" fontFamily="sans-serif" fontWeight="bold">{item.Mrp}</Text>
                    <Box style={{ display: "flex", marginTop: "10px" }}>
                      <Text as="b">{item.price}</Text>
                      <Text as="b" color="white">--</Text>
                      <Text as="b" color="#F47779" ><s>{item.off}</s> </Text>
                    </Box>

                  </Box>

                </Box>


              </div>

            ))}
          </Slider>

        </Box>


      </Box>



      {/****************** * Features HTML ********/}



      <Box className='Wellness'>
        <Box className='LiveTest2-wellness'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>Featured Brands</p>
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", }}>Pick from our favourite brands</p>

        </Box>

        <div className='FeaturedMain'>
          <Slider {...settings8}>
            {FeaturedLink.map((item) => (
              <div className="Featured">

                <div className="Featuredtop">
                  <img src={item.image} />
                </div>
                <div className="Featuredbottom">
                  <p>{item.name}</p>
                  <h5>{item.off}</h5>
                </div>

              </div>

            ))}
          </Slider>

        </div>


      </Box>



      {/*   *********** Only Image Card  **************/}


      <Box className='onlyImg'>

        <Box style={{ marginTop: "20px" }}>
          <Box className='onlyImg-card'>
            <Slider  {...settings9}>
              {OnlyImgLink.map((item) => (
                <Box className="onlyImg-cardImg">
                  <img src={item.image} />
                </Box>
              ))}
            </Slider>


          </Box>

        </Box>


      </Box>



      {/*    Deals of the day    */}

   

      <div className='Deals' style={{ marginTop: "60px" }} >
        <div className='LiveTest1'  >
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>Deals of the Day</p>
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", }}>09:15 MINS LEFT, HURRY!</p>

        </div>

        <div className='Launches-card'>
          <Slider {...settings6}>
            {DealsSlider11Link.map((item) => (
              <div className="Launches1-card">

                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">

                  <Text noOfLines={[1, 2,]} style={{ fontSize: "17px", fontFamily: "system-ui", color: "#30363C", }}>{item.name}</Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p style={{ fontSize: "15px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", }}>{item.Mrp}</p>
                  <div style={{ display: "flex", justifyContent: "", justifyItems: "", }}>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", }}>{item.price}</p>
                    <p style={{ color: "white" }}>-</p>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", }}><s>{item.off}</s> </p>
                  </div>


                </div>

              </div>

            ))}
          </Slider>

        </div>


      </div>

      {/* New Trending   html code */}

      <div className='Trending' style={{ marginTop: "40px" }}>
        <div className='LiveTest1'>
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>In the Spotlight</p>


        </div>

        <div className='Launches-card' style={{ marginTop: "40px" }}>
          <Slider {...settings6}>
            {SpotlightSlider11Link.map((item) => (
              <div className="Launches1-card" >

                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">

                  <Text noOfLines={[1, 2,]} style={{ fontSize: "17px", fontFamily: "system-ui", color: "#30363C", }}>{item.name}</Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p style={{ fontSize: "15px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", }}>{item.Mrp}</p>
                  <div style={{ display: "flex", justifyContent: "", justifyItems: "", }}>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", }}>{item.price}</p>
                    <p style={{ color: "white" }}>-</p>
                    <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", }}><s>{item.off}</s> </p>
                  </div>


                </div>

              </div>

            ))}
          </Slider>

        </div>


      </div>


      {/* Image part2 HTML  OnlyImg2Link */}

      <Box className='onlyImg2'>

        <Box style={{ marginTop: "20px" }}>
          <Box className='onlyImg2-card'>
            <Slider  {...settings9}>
              {OnlyImg2Link.map((item) => (
                <Box className="onlyImg2-cardImg">
                  <img src={item.image} />
                </Box>
              ))}
            </Slider>


          </Box>

        </Box>


      </Box>
























    </div>
  )
}

export default Home