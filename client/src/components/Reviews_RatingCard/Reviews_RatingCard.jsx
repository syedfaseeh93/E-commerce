import { Avatar, Rating } from '@mui/material'
import React from 'react'

const Reviews_RatingCard = () => {
  return (
    <div className='mx-4 p-2 mb-4'>
        <h1 className='flex gap-2 items-center font-bold pb-2'>
            <Avatar sx={{bgcolor:"blue"}}>F</Avatar>
            Syed Faseeh
        </h1>
        <div>
            <Rating value={4.5} precision={0.5} readOnly/>
        </div>
        <div>
            I really liked this Product.Worth every penny.
        </div>
    </div>
  )
}

export default Reviews_RatingCard