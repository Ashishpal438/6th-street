import React from 'react'
import './show.css'

export const ShowByCategory = () => {
  return (
    <div className='showcaseContainer'>
        <span className='head'>Shop By Category</span>
        <div className='showcase'>
            <div>
                <img src="https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBC/Baking.jpg" alt="" />
                <p>Baking</p>
            </div>
            <div>
                <img src="https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBC/Cooking.png" alt="" />
                <p>Cooking</p>
            </div>
            <div>
                <img src="https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBC/Home+appliance_.jpg" alt="" />
                <p>Applainces</p>
            </div>

            <div>
                <img src="https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBC/Home+Utilities.jpg" alt="" />
                <p>Home Utilities</p>
            </div>

            <div>
                <img src="https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBC/Home+Decor.jpg" alt="" />
                <p>Home Decor</p>
            </div>

            <div>
                <img src="https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBC/Home+lighting_.jpg" alt="" />
                <p>Lighting</p>
            </div>
        </div>
    </div>
  )
}
