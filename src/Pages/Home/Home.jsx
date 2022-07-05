import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import { Brands } from '../../components/Brands/Brands'
import { Lakeland } from '../../components/Lakeland/Lakeland'
import { ShowByCategory } from '../../components/ShowByCategory/ShowByCategory'

export const Home = () => {
  const lakelandProps = {
    title : "LAKELAND",
    tagLine : "Explore the eco-friendly range",
    image : "https://mobilecdn.6thstreet.com/AllBanners/27-01-2022/LakeLand-Ecofriendly/eco-friendly.jpg"
  }

  const lakelandProps2 = {
    title : "CLEANING & LAUNDRY",
    tagLine : "Rediscovering Cleaning Work",
    image : "https://mobilecdn.6thstreet.com/AllBanners/30-07-2021/Shop+By+Brand/Cleaning/Cleaning-%26-Laundry_1080x720_2.jpg"
  }

  return (
    <div>
      <Banner/>
      <ShowByCategory/>
      <Lakeland props={lakelandProps} />
      <Brands/>
      <Lakeland props={lakelandProps2}/>
    </div>
  )
}
