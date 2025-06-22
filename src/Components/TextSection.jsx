import React from 'react'

function textSection(props) {
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold text-gray-900 sm:text-2xl mt-10'>{props.title}</h1>
      <p className='text-base mt-5 text-pretty text-gray-700 sm:text-lg/relaxed '>{props.text}</p>
    </div>
  )
}

export default textSection
