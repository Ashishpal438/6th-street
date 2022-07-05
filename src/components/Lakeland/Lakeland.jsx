import React from 'react'
import './lakeland.css'

export const Lakeland = ({props}) => {
  return (
      <>
    <div className='lakelandContainer'>
        <div className='lakeland'>
           <div>
           <h5>{props.title}</h5>
           <p>{props.tagLine}</p>
           </div>
        </div>
        <img src={props.image} alt="img" />
    </div>
    <div className='bottom'></div>
    </>
  )
}
