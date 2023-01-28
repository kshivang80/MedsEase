import React from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CategoriesSlider6Link,
  ChooseLink,
  CustomerLink,
  DealsSlider11Link,
  Discover,
  FeaturedLink,
  FrequentlyLink,
  HealthArticlesLink,
  LaunchesSlider7Link,
  OfferSlider4Link,
  OnlyImg2Link,
  OnlyImgLink,
  PaymentSlider5Link,
  ShopConcernLink,
  Slider2Link,
  Slider3Link,
  SpotlightSlider11Link,
  TrendingSlider8Link,
  WellnessSlider11Link,
} from "./HomeCards";
import {
  settings,
  settings10,
  settings11,
  settings12,
  settings2,
  settings3,
  settings4,
  settings5,
  settings6,
  settings7,
  settings8,
  settings9,
} from "./ResponsiveCard";
import { Avatar, Box, Image, Text, SimpleGrid, Button } from "@chakra-ui/react";
import Plus from "./Images/PlusImg.png";
import Play from "./Images/appStore.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Maindiv">
      <div className="Discovercard">
        <Slider {...settings}>
          {Discover.map((item) => (
            <div className="card">
              <Link to="/product">
                <div className="cardtop">
                  <img src={item.image} />
                </div>
              </Link>
             
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

      <div className="Slide2">
        <Slider {...settings2}>
          {Slider2Link.map((item) => (
            <div className="Slider-card">
              <img src={item.image} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="Slide3">
        <div className="LiveTest">
          <div
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "95%",
              fontWeight: "bolder",
            }}>
            <p>Lab Tests by Health Concern</p>
          </div>
          <div
            style={{
              display: "flex",
              height: "60%",
              width: "95%",
              justifyItems: "self-start",
            }}>
            <div>
              <p style={{ fontFamily: "sans-serif" }}>Powered by</p>
            </div>
            <div>
              <img
                src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0"
                alt=""
                style={{ width: "100%", height: "20px", marginLeft: "10px" }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div className="Slide3-card">
            <Slider {...settings3}>
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

      <div className="Slide4">
        <div className="LiveTest">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Previously Browsed Items
          </p>
        </div>
        <div className="Data-prev">
          <div className="oneDiv">
            <div
              className="imgBox"
              style={{ width: "70%", height: "180px", margin: "auto" }}>
              <img
                src="https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1669616965.jpg?dim=1440x0"
                alt=""
                style={{
                  width: "100%",
                  height: "60%",
                  marginLeft: "",
                  marginTop: "15%",
                }}
              />
            </div>
            <div style={{ width: "70%", margin: "auto", overflow: "hidden" }}>
              <Text
                noOfLines={[1, 2, 2]}
                style={{
                  fontSize: "18px",
                  fontFamily: "system-ui",
                  color: "#30363C",
                }}>
                Calcimax Forte Plus Strip Of 30 Tablets{" "}
              </Text>
              {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", }}> Strip Of 30 Tablets</h3> */}
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  color: "#8897A2",
                  fontWeight: "bold",
                }}>
                MRP 5.00
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "",
                  justifyItems: "",
                }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    color: "#30363C",
                    fontWeight: "bold",
                  }}>
                  ₹228.00
                </p>
                <p style={{ color: "white" }}>-</p>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    color: " #F47779",
                    fontWeight: "bold",
                  }}>
                  <s>20% OFF</s>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="oneDiv">
            <div
              className="imgBox"
              style={{ width: "70%", height: "180px", margin: "auto" }}>
              <img
                src="https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-1-1647434835.jpg?dim=1440x0"
                alt=""
                style={{
                  width: "100%",
                  height: "60%",
                  marginLeft: "",
                  marginTop: "15%",
                }}
              />
            </div>
            <div style={{ width: "70%", margin: "auto", overflow: "hidden" }}>
              <Text
                noOfLines={[1, 2, 2]}
                style={{
                  fontSize: "18px",
                  fontFamily: "system-ui",
                  color: "#30363C",
                }}>
                Ecosprin 75mg Strip Of 14 Tablets{" "}
              </Text>
              {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", }}> Of 14 Tablets</h3> */}
              <p
                style={{
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  color: "#8897A2",
                  fontWeight: "bold",
                }}>
                MRP 5.00
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "",
                  justifyItems: "",
                }}>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    color: "#30363C",
                    fontWeight: "bold",
                  }}>
                  ₹40.00
                </p>
                <p style={{ color: "white" }}>-</p>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                    color: " #F47779",
                    fontWeight: "bold",
                  }}>
                  <s>15% OFF</s>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ********************Just offer Section ********************* */}

      <div className="justOffer">
        <div className="LiveTest1">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
              marginTop: "40px",
            }}>
            Offers Just for You
          </p>
        </div>

        <div className="justOffer-card">
          <Slider {...settings4}>
            {OfferSlider4Link.map((item) => (
              <div className="">
                <div className="justOffer-cardtop" style={{ display: "flex" }}>
                  <div className="justOffer-cardtop1">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="justOffer-cardbottom">
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* =========== payment offers section */}

      <div className="Payment">
        <div className="LiveTest1">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
              padding: "-40px 0px -40px 10px",
            }}>
            Payment Offers
          </p>
        </div>

        <div className="payment-slid">
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

      <div className="Categories">
        <div className="LiveTest1">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
              padding: "-40px 0px -40px 10px",
            }}>
            Shop by Categories
          </p>
        </div>

        <div className="Categories-card">
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

      <div className="Launches">
        <div className="LiveTest1">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            New Launches
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#4F585E",
              width: "auto",
              fontWeight: "600",
            }}>
            New wellness range just for you!
          </p>
        </div>

        <div className="Launches-card">
          <Slider {...settings6}>
            {LaunchesSlider7Link.map((item) => (
              <div className="Launches1-card">
                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">
                  <Text
                    noOfLines={[1, 2]}
                    style={{
                      fontSize: "17px",
                      fontFamily: "system-ui",
                      color: "#30363C",
                    }}>
                    {item.name}
                  </Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "#8897A2",
                      fontWeight: "bold",
                    }}>
                    {item.Mrp}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "",
                      justifyItems: "",
                    }}>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: "#30363C",
                        fontWeight: "bold",
                      }}>
                      {item.price}
                    </p>
                    <p style={{ color: "white" }}>-</p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: " #F47779",
                        fontWeight: "bold",
                      }}>
                      <s>{item.off}</s>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* New Trending   html code */}

      <div className="Launches">
        <div className="LiveTest1">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Trending Near You
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#4F585E",
              width: "auto",
              fontWeight: "600",
            }}>
            Popular in your city
          </p>
        </div>

        <div className="Launches-card">
          <Slider {...settings6}>
            {TrendingSlider8Link.map((item) => (
              <div className="Launches1-card">
                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">
                  <Text
                    noOfLines={[1, 2]}
                    style={{
                      fontSize: "17px",
                      fontFamily: "system-ui",
                      color: "#30363C",
                    }}>
                    {item.name}
                  </Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "#8897A2",
                      fontWeight: "bold",
                    }}>
                    {item.Mrp}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "",
                      justifyItems: "",
                    }}>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: "#30363C",
                        fontWeight: "bold",
                      }}>
                      {item.price}
                    </p>
                    <p style={{ color: "white" }}>-</p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: " #F47779",
                        fontWeight: "bold",
                      }}>
                      <s>{item.off}</s>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ************** Plus Image ***********/}

      <Box h="200px" w="95%" margin="auto" cursor="pointer">
        <Link to="/Plus">
        <Image src={Plus} w="100%" h="100%" margin="auto" cursor={"pointer"}/></Link>
      </Box>

      {/* ****************** Shop by Concern   ******************** */}

      <Box className="ShopConcern">
        <Box className="LiveTest1" marginTop="50px">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Shop by Concern
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#4F585E",
              width: "auto",
              fontWeight: "600",
            }}>
            Products are handpicked by experts
          </p>
        </Box>

        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 5, lg: 7 }}
          spacing={2}
          h="auto"
          w="100%">
          {ShopConcernLink.map((item) => (
            <Box w="100%" h="200px" marginTop="15px">
              <Box
                className="ShopConcernImgBox"
                h="60%"
                border="2px solid pink"
                margin="auto"
                borderRadius="100%"
                w="80%">
                <Avatar h="100%" w="100%" src={item.image} margin="auto" />
              </Box>
              <Box h="40%" textAlign="center" marginTop="10px">
                <Text as="b" color="#30363C" noOfLines={[1, 2]}>
                  {item.name}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* ******************  Frequently Booked Lab Tests  ******************** */}

      <Box className="Frequently">
        <Box className="LiveTest1" marginTop="50px">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Frequently Booked Lab Tests
          </p>

          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 4, lg: 4 }}
            spacing={10}
            h="auto"
            w="100%"
            marginTop="20px"
            box-shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
            {FrequentlyLink.map((item) => (
              <Box
                className="Frequently-card"
                w="100%"
                h="300px"
                bg="#E8F7FD"
                borderRadius="15px"
                box-shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
                <Box h="17%" paddingLeft="10px" paddingTop="4px">
                  <Button
                    marginTop="5px"
                    marginLeft="4px"
                    colorScheme="purple"
                    backgroundColor="#F47779"
                    variant="solid"
                    color="white">
                    {item.off}
                  </Button>
                </Box>
                <Box h="23%" paddingLeft="10px" >
                  <Text
                    as="b"
                    color="#30363C"
                    marginLeft="4px"
                    noOfLines={[1, 2]}
                    fontSize="xl">
                    {item.name}
                  </Text>
                </Box>
                <Box h="20%" paddingLeft="10px">
                  <Text
                    noOfLines={[1, 2]}
                    marginLeft="4px"
                    fontSize="lg"
                    color="#6E787E">
                    {item.des}
                  </Text>
                </Box>

                <Box display="flex" h="40%">
                  <Box w="50%" paddingLeft="10px">
                    <br />
                    <br />
                    <Text marginLeft="6px" as="b" color="#6E787E" fontSize="lg">
                      <s>{item.cut}</s>{" "}
                    </Text>
                    <br />
                    <Text marginLeft="6px" as="b" fontSize="xl">
                      {item.price}
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Image src={item.image} w="100%" h="100%" />
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* ****************Wellness work start  **************/}

      <Box className="Wellness">
        <Box className="LiveTest2-wellness">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Wellness Essentials of the Week
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#4F585E",
              width: "auto",
              fontWeight: "600",
            }}>
            Super charge your immunity with us
          </p>
        </Box>

        <Box className="Wellness-card">
          <Slider {...settings7}>
            {WellnessSlider11Link.map((item) => (
              <div className="Wellness1-card">
                <Box style={{ display: "flex", width: "100%", height: "100%" }}>
                  <Box className="Wellness-top">
                    <img src={item.image} />
                  </Box>

                  <Box className="Wellness-bottom">
                    <Box marginTop="30px">
                      <Text as="b" noOfLines={[1, 2]}>
                        {item.name}
                      </Text>
                    </Box>

                    <Text
                      color="#8897A2"
                      marginTop="10px"
                      fontSize="15px"
                      fontFamily="sans-serif"
                      fontWeight="bold">
                      {item.Mrp}
                    </Text>
                    <Box style={{ display: "flex", marginTop: "10px" }}>
                      <Text as="b">{item.price}</Text>
                      <Text as="b" color="white">
                        --
                      </Text>
                      <Text as="b" color="#F47779">
                        <s>{item.off}</s>{" "}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>

      {/****************** * Features HTML ********/}

      <Box className="Wellness">
        <Box className="LiveTest2-wellness">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Featured Brands
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#4F585E",
              width: "auto",
              fontWeight: "600",
            }}>
            Pick from our favourite brands
          </p>
        </Box>

        <div className="FeaturedMain">
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

      <Box className="onlyImg">
        <Box style={{ marginTop: "20px" }}>
          <Box className="onlyImg-card">
            <Slider {...settings9}>
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

      <div className="Deals" style={{ marginTop: "60px" }}>
        <div className="LiveTest1">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Deals of the Day
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#4F585E",
              width: "auto",
              fontWeight: "600",
            }}>
            09:15 MINS LEFT, HURRY!
          </p>
        </div>

        <div className="Launches-card">
          <Slider {...settings6}>
            {DealsSlider11Link.map((item) => (
              <div className="Launches1-card">
                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">
                  <Text
                    noOfLines={[1, 2]}
                    style={{
                      fontSize: "17px",
                      fontFamily: "system-ui",
                      color: "#30363C",
                    }}>
                    {item.name}
                  </Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "#8897A2",
                      fontWeight: "bold",
                    }}>
                    {item.Mrp}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "",
                      justifyItems: "",
                    }}>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: "#30363C",
                        fontWeight: "bold",
                      }}>
                      {item.price}
                    </p>
                    <p style={{ color: "white" }}>-</p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: " #F47779",
                        fontWeight: "bold",
                      }}>
                      <s>{item.off}</s>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* New Spoot Light   html code */}

      <div className="Trending" style={{ marginTop: "40px" }}>
        <div className="LiveTest1">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            In the Spotlight
          </p>
        </div>

        <div className="Launches-card" style={{ marginTop: "40px" }}>
          <Slider {...settings6}>
            {SpotlightSlider11Link.map((item) => (
              <div className="Launches1-card">
                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">
                  <Text
                    noOfLines={[1, 2]}
                    style={{
                      fontSize: "17px",
                      fontFamily: "system-ui",
                      color: "#30363C",
                    }}>
                    {item.name}
                  </Text>
                  {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                  <p
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "#8897A2",
                      fontWeight: "bold",
                    }}>
                    {item.Mrp}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "",
                      justifyItems: "",
                    }}>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: "#30363C",
                        fontWeight: "bold",
                      }}>
                      {item.price}
                    </p>
                    <p style={{ color: "white" }}>-</p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "sans-serif",
                        color: " #F47779",
                        fontWeight: "bold",
                      }}>
                      <s>{item.off}</s>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Image part2 HTML  OnlyImg2Link */}

      <Box className="onlyImg2">
        <Box style={{ marginTop: "20px" }}>
          <Box className="onlyImg2-card">
            <Slider {...settings9}>
              {OnlyImg2Link.map((item) => (
                <Box className="onlyImg2-cardImg">
                  <img src={item.image} alt="" />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>

      {/* *************** Health Articles *************/}

      <Box className="Health">
        <Box className="LiveTest2-wellness">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Health Articles
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#4F585E",
              width: "auto",
              fontWeight: "600",
            }}>
            Get up-to-date on our latest health updates
          </p>
        </Box>

        <div className="HealthMain">
          <Slider {...settings10}>
            {HealthArticlesLink.map((item) => (
              <div className="Health-card">
                <div className="Healthtop">
                  <img src={item.image} />
                </div>
                <div className="Healthbottom">
                  <Text noOfLines={[1, 3]} marginTop="10px" fontSize="lg">
                    {item.name}
                  </Text>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Box>

      {/* **********Why Choose Us? ************ */}

      <Box className="Choose">
        <Box className="LiveTest2-wellness">
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
            }}>
            Choose Essentials of the Week
          </p>
        </Box>

        <Box className="Choose-card">
          <Slider {...settings11}>
            {ChooseLink.map((item) => (
              <div className="Choose1-card">
                <Box style={{ display: "flex", width: "100%", height: "100%" }}>
                  <Box className="Choose-top">
                    <img src={item.image} />
                  </Box>

                  <Box className="Choose-bottom">
                    <Box marginTop="20px">
                      <Text fontSize="2xl" as="b" noOfLines={[1, 2]}>
                        {item.name}
                      </Text>
                    </Box>

                    <Text
                      noOfLines={[1, 2, 2]}
                      fontSize="lg"
                      fontFamily="sans-serif">
                      {item.des}
                    </Text>
                  </Box>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* Big Image */}

      <Box marginTop="40px">
        <Box w="95%" margin="auto" h="350px" className="BigImg">
          <Image src={Play} h="100%" w="100%" />
        </Box>
      </Box>

      {/* What Our Customers have to Say */}

      <Box className="CustomersTopMain">
        <Box className="LiveTest2-wellness" style={{}}>
          <p
            style={{
              fontSize: "26px",
              color: "#30363C",
              width: "auto",
              fontWeight: "bolder",
              
            }}>
            {" "}
            What Our Customers have to Say
          </p>
        </Box>

        <div className="CustomersMain">
          <Slider {...settings12}>
            {CustomerLink.map((item) => (
              <div className="Customers">
                <div className="Customerstop">
                  <Text marginLeft="15px" fontSize="lg" as="b" color="#30363C">
                    {item.name}
                  </Text>
                  <Text marginLeft="15px" fontSize="lg" color="#4F585E">
                    {item.date}
                  </Text>
                </div>
                <div className="Customersbottom">
                  <Text
                    marginLeft="8px"
                    fontSize="xl"
                    noOfLines={[1, 7, 7]}
                    color="#4F585E">
                    {item.des}
                  </Text>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Box>

      {/* Last section of header */}

      <Box w="95%" margin="auto" border="1px solid white">
        <Box marginTop="60px">
          <Text fontSize="lg">
            Top-Selling Healthcare Products: Accu-Chek Active - 100 Strips |
            Supradyn Multivitamin Tablets | DR Morepen BG 03 - 50 Strips |
            Dettol Antiseptic Liquid | Ensure Diabetes Care Vanilla Sugar Free
            Jar | Dettol Instant Hand Sanitizer | Everherb Shilajit | Softovac
            SF Powder | Pediasure Premium Chocolate Refill
          </Text>
        </Box>
        <Box marginTop="30px">
          <Text fontSize="lg">
            Top-Selling Medicines: Dolovera Gel | Neurobion Forte | Chymoral
            Forte | Crocin Advance | Soframycin | Dexorange | Becadexamin |
            Folvite | Livogen | Becosules | Fourderm | Nurokind Plus | Burnol |
            Crocin 650 | Mintop 5 | Thrombophob | Evion 600
          </Text>
        </Box>

        <Box marginTop="30px">
          <Text fontSize="lg">
            COVID-19 Preventatives: N95 Masks | Hand Sanitizers | Hand Gloves,
            Disinfectants, Thermometers & more!
          </Text>
        </Box>

        <Box marginTop="30px">
          <Text as="b" fontSize="lg" color="balck">
            Your One-Stop Online Pharmacy - PharmEasy
          </Text>
        </Box>

        <Box marginTop="30px">
          <Box>
            <Text as="b" fontSize="md" color="balck">
              We've got India Covered!
            </Text>
          </Box>
          <br />
          <Box>
            <Text fontSize="md" color="balck">
              We now deliver in 1000+ cities and towns across 22000+ pin codes.
              We thereby cover every nook and corner of the country! The major
              cities in which we deliver include Mumbai, Kolkata, Delhi,
              Bengaluru, Ahmedabad, Hyderabad, Chennai, Thane, Howrah, Pune,
              Gurgaon, Navi Mumbai, Jaipur, Noida, Lucknow, Ghaziabad &
              Vadodara.
            </Text>
          </Box>
        </Box>

        <Box marginTop="30px">
          <Box>
            <Text as="b" fontSize="md" color="balck">
              Say Goodbye to All Your Healthcare Worries With PharmEasy!
            </Text>
          </Box>
          <br />
          <Box>
            <Text fontSize="md" color="balck">
              PharmEasy is here to help you take it easy! We are amongst one of
              India's top online pharmacy and medical care platforms. It enables
              you to order pharmaceutical and healthcare products online by
              connecting you to registered retail pharmacies and get them
              delivered to your home. We are an online medical store, making
              your purchase easy, simple, and affordable!
            </Text>
          </Box>
        </Box>

        <Box marginTop="30px">
          <Box>
            <Text as="b" fontSize="md" color="balck">
              How Are We Making Lives Simpler With Our Online Medical Store?
            </Text>
          </Box>
          <br />
          <Box>
            <Text fontSize="md" color="balck">
              Our doorstep delivery service is available in PAN-India across top
              cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon,
              Noida, Pune, etc. Our online medical store also allows you to
              choose from 1 lakh+ products including OTC products and medical
              equipment. PharmEasy is a one-stop online medical platform where
              you can also book diagnostic tests including blood tests,
              full-body checkups, and other preventive health check-ups at an
              affordable cost, right from the comfort of your home. We have
              partnered with trusted & certified labs that arrange for a sample
              pick-up from the convenience of your home. They also provide you
              with timely reports.
            </Text>
          </Box>
        </Box>

        <Box marginTop="30px">
          <Box>
            <Text as="b" fontSize="md" color="balck">
              Why Are We The Most Preferred Online Pharmacy?
            </Text>
          </Box>
          <br />
          <Box>
            <Text fontSize="md" color="balck">
              Lucrative offers on our platform allow you to make payment online
              and via various payment wallets at a discounted price.
              Alternatively, you can also choose to pay cash on delivery as we
              deliver the products at your doorstep. We cater to all your
              pharmaceutical needs and also make ordering medicines online a
              hassle-free experience for you. We connect you only with
              registered retail pharmacies & certified diagnostic labs. We
              ensure that healthcare is affordable to all and make the process
              of ordering online simple.
            </Text>
          </Box>
        </Box>

        <Box marginTop="30px">
          <Box>
            <Text as="b" fontSize="md" color="balck">
              Sit Back & Relax While You Get Your Essentials Delivered Every
              Month!
            </Text>
          </Box>
          <br />
          <Box>
            <Text fontSize="md" color="balck">
              It’s tough to remember to refill every month, especially in the
              case of chronic diseases. PharmEasy’s subscription service not
              only ensures that you are reminded of your refills but also makes
              sure that you are never out on your medical essentials. You will
              get a reminder every month and your order will be delivered at
              your convenience!
            </Text>
          </Box>
        </Box>

        <Box marginTop="30px">
          <Box>
            <Text as="b" fontSize="md" color="balck">
              Access medical and health information:
            </Text>
          </Box>
          <br />
          <Box>
            <Text fontSize="md" color="balck">
              PharmEasy delivers reliable and accurate medical information that
              has been carefully written, vetted and validated by our health
              experts. Our specialists curate high-quality and most reliable
              literature about medicines, illnesses, lab tests, Ayurvedic and
              over the counter health products.
            </Text>
          </Box>
        </Box>

        <Box marginTop="30px">
          <Box>
            <Text as="b" fontSize="md" color="balck">
              We Believe in ‘Simplifying Healthcare, Impacting Lives!’
            </Text>
          </Box>
          <br />
          {/* <Box>
            <Text fontSize='md' color="balck">PharmEasy delivers reliable and accurate medical information that has been carefully written, vetted and validated by our health experts. Our specialists curate high-quality and most reliable literature about medicines, illnesses, lab tests, Ayurvedic and over the counter health products.</Text>
          </Box> */}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
