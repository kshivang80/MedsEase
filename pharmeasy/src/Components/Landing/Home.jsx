import React from 'react'
import "./Home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoriesSlider6Link, Discover, LaunchesSlider7Link, OfferSlider4Link, PaymentSlider5Link, Slider2Link, Slider3Link, TrendingSlider8Link } from './HomeCards';
import { settings, settings2, settings3, settings4, settings5, settings6 } from './ResponsiveCard';




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
          <div style={{ fontSize: "26px", color: "#30363C", width: "auto", border: "1px solid red", fontWeight: "bolder", }}>
            <p>Lab Tests by Health Concern</p>
          </div>
          <div style={{ display: "flex", height: "60%", border: "1px solid red", justifyItems: "self-start", }} >
            <div>
              <p style={{ fontFamily: "sans-serif" }}>Powered by</p>
            </div>
            <div>
              <img src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0" alt="" style={{ width: "100%", height: "20px", marginTop: "17px", marginLeft: "10px" }} />
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
            <div style={{ width: "60%", margin: "auto" }} >
              <h3 style={{ fontSize: "18px", fontFamily: "system-ui", color: "#30363C", lineHeight: '14px' }}>Calcimax Forte Plus </h3>
              <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3>
              <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", lineHeight: '' }}>MRP 5.00</p>
              <div style={{ display: "flex", justifyContent: "", justifyItems: "", marginTop: "-18px" }}>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", lineHeight: '1px' }}>₹228.00</p>
                <p style={{ color: "white" }}>-</p>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", lineHeight: '1px' }}><s>20% OFF</s> </p>
              </div>

            </div>


          </div>
          <div className='oneDiv'>
            <div className='imgBox' style={{ width: "60%", height: "180px", margin: "auto", }}>
              <img src="https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-1-1647434835.jpg?dim=1440x0" alt="" style={{ width: "100%", height: "60%", marginLeft: "", marginTop: "15%", }} />

            </div>
            <div style={{ width: "60%", margin: "auto" }} >
              <h3 style={{ fontSize: "18px", fontFamily: "system-ui", color: "#30363C", lineHeight: '14px' }}>Ecosprin 75mg Strip Of</h3>
              <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Of 14 Tablets</h3>
              <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", lineHeight: '' }}>MRP 5.00</p>
              <div style={{ display: "flex", justifyContent: "", justifyItems: "", marginTop: "-18px" }}>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", lineHeight: '1px' }}>₹40.00</p>
                <p style={{ color: "white" }}>-</p>
                <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", lineHeight: '1px' }}><s>15% OFF</s> </p>
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
          <p style={{ fontSize: "26px", color: "#30363C", width: "auto",  fontWeight: "bolder", padding: "-40px 0px -40px 10px" }}>Shop by Categories</p>


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
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", marginTop: "-16px", }}>New wellness range just for you!</p>

        </div>

        <div className='Launches-card'>
          <Slider {...settings6}>
            {LaunchesSlider7Link.map((item) => (
              <div className="Launches1-card">

                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">
                 
                    <h3 style={{ fontSize: "17px", fontFamily: "system-ui", color: "#30363C", lineHeight: '16px' }}>{item.name}</h3>
                    {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                    <p style={{ fontSize: "15px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", lineHeight: '' }}>{item.Mrp}</p>
                    <div style={{ display: "flex", justifyContent: "", justifyItems: "", marginTop: "-18px" }}>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", lineHeight: '1px' }}>{item.price}</p>
                      <p style={{ color: "white" }}>-</p>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", lineHeight: '1px' }}><s>{item.off}</s> </p>
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
          <p style={{ fontSize: "18px", color: "#4F585E", width: "auto", border: "1px solid red", fontWeight: "600", marginTop: "-16px", }}>Popular in your city</p>

        </div>

        <div className='Launches-card'>
          <Slider {...settings6}>
            {TrendingSlider8Link.map((item) => (
              <div className="Launches1-card">

                <div className="Launches-top">
                  <img src={item.image} />
                </div>
                <div className="Launches-bottom">
                 
                    <h3 style={{ fontSize: "17px", fontFamily: "system-ui", color: "#30363C", lineHeight: '16px' }}>{item.name}</h3>
                    {/* <h3 style={{ fontSize: "18px", fontFamily: '', color: "#30363C", lineHeight: '6px' }}> Strip Of 30 Tablets</h3> */}
                    <p style={{ fontSize: "15px", fontFamily: "sans-serif", color: "#8897A2", fontWeight: "bold", lineHeight: '' }}>{item.Mrp}</p>
                    <div style={{ display: "flex", justifyContent: "", justifyItems: "", marginTop: "-18px" }}>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: "#30363C", fontWeight: "bold", lineHeight: '1px' }}>{item.price}</p>
                      <p style={{ color: "white" }}>-</p>
                      <p style={{ fontSize: "16px", fontFamily: "sans-serif", color: " #F47779", fontWeight: "bold", lineHeight: '1px' }}><s>{item.off}</s> </p>
                    </div>


                </div>

              </div>

            ))}
          </Slider>

        </div>


      </div>




















    </div>
  )
}

export default Home