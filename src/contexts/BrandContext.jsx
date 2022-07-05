import { createContext } from "react";

export const BrandContext = createContext();

export const BrandContextProvider = ({ children }) => {

    const brands = [
        {
            id: 1,
            image: "https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBB/Lakeland.jpg"
        },
        {
            id: 2,
            image: "https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBB/Hema.jpg"
        },
        {
            id: 3,
            image: "https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBB/RITUALS.jpg"
        },
        {
            id: 4,
            image: "https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBB/Hometown_new+carousel_.jpg"
        },
        {
            id: 5,
            image: "https://mobilecdn.6thstreet.com/AllBanners/24-01-2022/Home-SBB/Niran.jpg"
        },
        {
            id: 6,
            image: "https://mobilecdn.6thstreet.com/AllBanners/10-2-22+NEW/Home/Home-Creative+request/sage.jpg"
        },
        {
            id: 7,
            image: "https://mobilecdn.6thstreet.com/AllBanners/10-2-22+NEW/Home/Home-Creative+request/KitchenAid.jpg"
        },
        {
            id: 8,
            image: "https://mobilecdn.6thstreet.com/AllBanners/10-2-22+NEW/Home/Home-Creative+request/Breville.jpg"
        },
        {
            id: 9,
            image: "https://mobilecdn.6thstreet.com/AllBanners/bmt/11-4-22+NEW/Ninja/Ninja_JustIN.jpg"
        }
    ];

    return (
        <BrandContext.Provider value={brands} >
        {children}
    </BrandContext.Provider>
    )
}