import React from 'react'

const Button = ({name}) => {
  return (
    <button className='bg-blue-300 text-blue-800 px-5 py-2 font-bold rounded-lg'>
      {name}
    </button>
  )
}

export default Button
