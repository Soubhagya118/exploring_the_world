import React from 'react'

const Shimmer = () => {
  return (
    <div className='resturant-list'>
    {Array(15).fill("").map((e,index)=>(
    <div key={index} className='card-shimmer'></div> 
  ))}
  </div>
  )
}

export default Shimmer
