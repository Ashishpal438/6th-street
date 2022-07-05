import React from 'react'
import './navbar.css'

export const Bottomnav = () => {
  return (
    <div className='bottomnavContainer'>
        <ul className='bottomnav'>
            <li> UTILITIES </li>
            <li>DECOR</li>
            <li>FRAGNANCE</li>
            <li>LIGHTING</li>
            <li>PARTY</li>
            <li>BAKING</li>
            <li>COFEE/TEA</li>
            <li>COOKING</li>
            <li>ELECTRICAL</li>
            <li>LAUNDRY</li>
            <li className='redLink'>SALE</li>
        </ul>
    </div>
  )
}
