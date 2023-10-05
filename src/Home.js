import React from 'react';
import "./Home.css"
import Product from './Product';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


function Home() {
    const properties = {
        duration: 1000,
        autoplay: true,
        transitionDuration: 500,
        arrows: true,
        infinite: true,
        // indicators: i => <div className="indicator">{i + 1}</div>
    };

    const slideImages = [
        `${process.env.PUBLIC_URL}/slide_1.jpg`,
        `${process.env.PUBLIC_URL}/slide_2.jpg`,
        `${process.env.PUBLIC_URL}/slide_3.jpg`,
        `${process.env.PUBLIC_URL}/slide_4.jpg`,
        `${process.env.PUBLIC_URL}/slide_6.jpg`,
        `${process.env.PUBLIC_URL}/slide_7.jpg`,
        `${process.env.PUBLIC_URL}/slide_8.jpg`,
    ];



  return (
    <div className="Home">
        <div className="home__container">
            {/* <img className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt=""/> */}
                <Slide {...properties}>
                    {slideImages.map((each, index) => (
                        //   <div key={index} className="each-slide">
                        <img key={index} className='home__image' src={each} alt="sample" />
                        //   </div>
                    ))}
                </Slide> 
            
            <div className="home__row">
                <Product
                id="12339821" 
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                price={72999} 
                image= "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                 rating={4}
                />

                <Product 
                id="49538094"
                title="Kenwood kMix Stand Mixer for
                Baking, Stylish Kitchen Mixer "
                price= {2499}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"

                
                />

            </div>

            <div className="home__row">
                <Product 
                id="1233222" 
                title="Fitbit Charge 5 Advanced Health & Fitness Tracker with Built-in GPS, Sleep Tools, 24/7 Heart Rate, Black/Graphite" 
                price={12999} 
                image= "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                 rating={4}
                 />

                
                <Product 
                
                id="123321" 
                title="Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success" 
                price={299} 
                image= "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                 rating={5}
                
                />
                <Product 
                id="123323421" 
                title="OPPO Enco Air 2 Pro Bluetooth Truly Wireless in Ear Earbuds with Mic - White" 
                price={2199} 
                image= "https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?w=740&t=st=1694665810~exp=1694666410~hmac=24b2d628b592b6acc5fdb78c42437fb1ae83e91acfaa9816631b9b00c6ec4891"
                 rating={4}
                />

            </div>

            <div className="home__row">
                <Product 
                id="1238421" 
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WOHD 5120 x 1440" 
                price={99999} 
                image= "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                rating={5}
                />
            </div>

            

        </div>
    </div>
  );
}

export default  Home