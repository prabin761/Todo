import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa6'

const TopHeader = () => {
  return (
    <div className='flex justify-between items-center px-4 rounded-b-2xl h-20 py-3 text-2xl bg-purple-500'>
      <FaArrowAltCircleLeft />
      <strong className='text-xl'>Today's Tasks</strong>
      <FaBell/>
    </div>
  )
}

export default TopHeader
