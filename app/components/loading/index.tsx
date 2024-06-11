import React from 'react'
import './style.css'

const Loading = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen flex justify-center items-center flex-col'>
    <p className='mb-3 font-bold'>loading....</p>
    <div className='loader'></div>
    </div>
  )
}

export default Loading