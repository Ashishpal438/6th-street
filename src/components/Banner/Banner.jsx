import React, { useEffect, useState } from 'react'
import './banner.css'
import Carousel from 'react-bootstrap/Carousel';

export const Banner = () => {


    return (
        <div className='bannerConatiner'>
            <Carousel controls={false} interval={3000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mobilecdn.6thstreet.com/AllBanners/4-2-22+NEW/Beauty/Niran-Infinity%26Eternity/Infinity_web_EN.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home/Hometown__web_banner_EN.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mobilecdn.6thstreet.com/AllBanners/21-1-11+NEW/home+hero+banners/Lakeland__web_banner_EN.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mobilecdn.6thstreet.com/AllBanners/21-1-11+NEW/home+hero+banners/Lakeland__web_banner_EN+(1).jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mobilecdn.6thstreet.com/AllBanners/21-1-11+NEW/home+hero+banners/Lakeland__web_banner_EN+appliancessssss.jpg"
                        alt="Fifth slide"
                    />  
                </Carousel.Item>

                <Carousel.Item>
                    <img    
                        className="d-block w-100"
                        src="https://mobilecdn.6thstreet.com/AllBanners/18-01-2022/Beauty/Niran+Vietnamese+Bukhoor/Vietnamese-niran_web_banner_EN.jpg"
                        alt="Sixth slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    )
}
