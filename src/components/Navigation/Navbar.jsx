import React from 'react'
import { Bottomnav } from './Bottomnav'
import { MidNav } from './MidNav'
import { UpperNav } from './UpperNav'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navContainer'>
        <UpperNav/>
        <MidNav/>
        <Bottomnav/>
    </div>
  )
}
